from rest_framework import serializers
from .models import Customer, Image
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
class UserSerializer(serializers.HyperlinkedModelSerializer):
    customers = serializers.HyperlinkedRelatedField(many=True, view_name='customer-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'customers', 'email']


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

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


