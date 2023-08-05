import django.dispatch
import logging

log = logging.getLogger('django')

to_bind_user = django.dispatch.Signal(providing_args=["old_user", "new_user"])
to_get_user_profile = django.dispatch.Signal(providing_args=["user", "request"])
to_save_user_profile = django.dispatch.Signal(providing_args=['user', 'profile'])