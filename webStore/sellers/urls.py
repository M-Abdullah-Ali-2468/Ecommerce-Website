from django.urls import path
from . import views

urlpatterns = [
    path('seller-page', views.seller, name='seller-page'),
]
