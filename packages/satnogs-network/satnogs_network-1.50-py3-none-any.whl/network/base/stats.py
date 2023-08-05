"""Module for calculating and keep in cache satellite and transmitter statistics"""
import math

from django.core.cache import cache
from django.db.models import Count, Q
from django.utils.timezone import now

from network.base.models import Observation


def transmitter_stats_by_uuid(uuid):
    """Calculate and put in cache transmitter statistics"""
    stats = cache.get('tr-{0}-stats'.format(uuid))
    if stats is None:
        stats = Observation.objects.filter(transmitter_uuid=uuid).exclude(
            vetted_status='failed'
        ).aggregate(
            good=Count('pk', filter=Q(vetted_status='good')),
            bad=Count('pk', filter=Q(vetted_status='bad')),
            unvetted=Count('pk', filter=Q(vetted_status='unknown', end__lte=now())),
            future=Count('pk', filter=Q(vetted_status='unknown', end__gt=now()))
        )
        cache.set('tr-{0}-stats'.format(uuid), stats, 3600)
    total_count = 0
    unvetted_count = 0 if stats['unvetted'] is None else stats['unvetted']
    future_count = 0 if stats['future'] is None else stats['future']
    good_count = 0 if stats['good'] is None else stats['good']
    bad_count = 0 if stats['bad'] is None else stats['bad']
    total_count = unvetted_count + future_count + good_count + bad_count
    unvetted_rate = 0
    future_rate = 0
    success_rate = 0
    bad_rate = 0

    if total_count:
        unvetted_rate = math.trunc(10000 * (unvetted_count / total_count)) / 100
        future_rate = math.trunc(10000 * (future_count / total_count)) / 100
        success_rate = math.trunc(10000 * (good_count / total_count)) / 100
        bad_rate = math.trunc(10000 * (bad_count / total_count)) / 100

    return {
        'total_count': total_count,
        'unvetted_count': unvetted_count,
        'future_count': future_count,
        'good_count': good_count,
        'bad_count': bad_count,
        'unvetted_rate': unvetted_rate,
        'future_rate': future_rate,
        'success_rate': success_rate,
        'bad_rate': bad_rate
    }


def satellite_stats_by_transmitter_list(transmitter_list):
    """Calculate satellite statistics"""
    total_count = 0
    unvetted_count = 0
    future_count = 0
    good_count = 0
    bad_count = 0
    unvetted_rate = 0
    future_rate = 0
    success_rate = 0
    bad_rate = 0
    for transmitter in transmitter_list:
        transmitter_stats = transmitter_stats_by_uuid(transmitter['uuid'])
        total_count += transmitter_stats['total_count']
        unvetted_count += transmitter_stats['unvetted_count']
        future_count += transmitter_stats['future_count']
        good_count += transmitter_stats['good_count']
        bad_count += transmitter_stats['bad_count']

    if total_count:
        unvetted_rate = math.trunc(10000 * (unvetted_count / total_count)) / 100
        future_rate = math.trunc(10000 * (future_count / total_count)) / 100
        success_rate = math.trunc(10000 * (good_count / total_count)) / 100
        bad_rate = math.trunc(10000 * (bad_count / total_count)) / 100

    return {
        'total_count': total_count,
        'unvetted_count': unvetted_count,
        'future_count': future_count,
        'good_count': good_count,
        'bad_count': bad_count,
        'unvetted_rate': unvetted_rate,
        'future_rate': future_rate,
        'success_rate': success_rate,
        'bad_rate': bad_rate
    }


def transmitters_with_stats(transmitters_list):
    """Returns a list of transmitters with their statistics"""
    transmitters_with_stats_list = []
    for transmitter in transmitters_list:
        transmitter_stats = transmitter_stats_by_uuid(transmitter['uuid'])
        transmitter_with_stats = dict(transmitter, **transmitter_stats)
        transmitters_with_stats_list.append(transmitter_with_stats)
    return transmitters_with_stats_list


def vetting_count(user):
    """Returns a count of unvetted observation per user"""
    user_vetting_count = cache.get('user-{0}-unvet'.format(user.id))
    if user_vetting_count is None:
        user_vetting_count = Observation.objects.filter(
            author=user, vetted_status='unknown', end__lt=now()
        ).count()
        cache.set('user-{0}-unvet'.format(user.id), user_vetting_count, 120)

    return user_vetting_count
