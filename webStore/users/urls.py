from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('signup', views.signup, name='signup'),
    path('admin-page', views.admin, name='admin'),
    path('admin-base', views.admin_base, name='admin_base'),
    path('customer', views.customer, name='customer'),
]
