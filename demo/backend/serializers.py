from rest_framework import serializers
from .models import Lead
from django.contrib.auth.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    leads = serializers.HyperlinkedRelatedField(many=True, view_name='lead-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'leads']


class LeadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lead
        fields = ['url', 'id', 'email', 'message', 'owner']

    owner = serializers.ReadOnlyField(source='owner.username')


