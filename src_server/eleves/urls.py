#from django.db import router
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import EleveViewSet
 
router = DefaultRouter()
router.register('eleves', EleveViewSet, basename='eleves')

urlpatterns = [
    path('', include(router.urls)),
]