from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from knox import views as knox_views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'customers', views.CustomerViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'images', views.ImageViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    # path(r'auth/', include('knox.urls')),
    path('auth/register/', views.RegisterView.as_view()),
    path('auth/login/', views.LoginView.as_view()),
    path('auth/user/', views.UserView.as_view()),
    path('auth/logout/', knox_views.LogoutView.as_view(), name="knox_logout"),
]