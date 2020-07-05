from django.urls import path
from . import views

urlpatterns = [
    path('leads/', views.lead_list),
    path('leads/<int:pk>/', views.lead_detail),
]