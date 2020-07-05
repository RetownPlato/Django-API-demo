from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

# API endpoints
urlpatterns = format_suffix_patterns([
    path('', views.api_root),
    path('leads/',
        views.LeadList.as_view(),
        name='lead-list'),
    path('leads/<int:pk>/',
        views.LeadDetail.as_view(),
        name='lead-detail'),
    path('users/',
        views.UserList.as_view(),
        name='user-list'),
    path('users/<int:pk>/',
        views.UserDetail.as_view(),
        name='user-detail')
])