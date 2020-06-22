from  rest_framework import serializers
from django.contrib.auth.models import User
from .models import Sucursal


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = ['id','name','address']