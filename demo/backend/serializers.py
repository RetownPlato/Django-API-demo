from rest_framework import serializers
from .models import Customer, Image
from django.contrib.auth.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    customers = serializers.HyperlinkedRelatedField(many=True, view_name='customer-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'customers']


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    images = serializers.HyperlinkedRelatedField(many=True, view_name='image-detail', read_only=True)
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Customer
        fields = ['url', 'id', 'first_name', 'last_name', 'email', 'images', 'owner']

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    customer = serializers.ReadOnlyField(source='customer.email')
    class Meta:
        model = Image
        fields = ['url', 'id', 'image', 'message', 'customer']


