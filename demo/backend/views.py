from .models import Lead
from .serializers import LeadSerializer, UserSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'leads': reverse('lead-list', request=request, format=format)
    })



class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class LeadList(generics.ListCreateAPIView):
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class LeadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]