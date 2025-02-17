from django.urls import path
from . import views

urlpatterns = [
    path('products', views.product, name='product'),
    path('purchase', views.purchase, name='purchase'),
]