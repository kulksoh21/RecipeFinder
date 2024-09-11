from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Recipe
from .serializers import RecipeSerializer
from .models import Note

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #ensures unique user is created
    serializer_class = UserSerializer
    permission_classes = [AllowAny] #anyone can create an account

class RecipeListCreateAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]

