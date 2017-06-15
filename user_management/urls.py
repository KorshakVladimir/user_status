# -*- coding: utf-8 -*-

from django.conf.urls import url, include
from rest_framework import routers

from . views import *

router = routers.DefaultRouter()
router.register(r'users', UsersViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^statuses/$', ListStatuses.as_view(), name="list-statuses"),
]

