from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('leads/', views.lead_list),
    path('leads/<int:pk>', views.lead_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)