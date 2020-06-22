from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Sucursal
from .serializer import UserSerializer, SucursalSerializer
from django.http import JsonResponse
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SucursalViewSet(viewsets.ModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer

