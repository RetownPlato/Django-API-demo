from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('auth.User', related_name='customers', on_delete=models.CASCADE)

class Image(models.Model):
    customer = models.ForeignKey('Customer', related_name='images', on_delete=models.CASCADE)
    image = models.ImageField()
    message = models.CharField(max_length=100)


