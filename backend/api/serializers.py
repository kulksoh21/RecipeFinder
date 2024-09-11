from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.response import Response
from .models import Recipe

#Uses an Orm (Object Relational mapping)
#serializers convert python objects into "jsonable" data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

        extra_kwargs = {"password" : {"write_only" : True}} #password shouldn't be readable by anyone

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data) #** allows for multiple variables to be able to be sent
        
        return user

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'