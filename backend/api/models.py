from django.db import models
from django.contrib.auth.models import User
import json

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title

class Recipe(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    url = models.URLField(max_length=255)
    image = models.URLField(max_length=255)
    name = models.CharField(max_length=255)
    description = models.TextField()
    author = models.CharField(max_length=100)
    ratings = models.FloatField()
    ingredients = models.TextField()
    steps = models.TextField()
    nutrients = models.JSONField()
    times = models.JSONField()
    serves = models.IntegerField()
    difficult = models.CharField(max_length=50)
    vote_count = models.IntegerField()
    subcategory = models.CharField(max_length=100)
    dish_type = models.CharField(max_length=100)
    maincategory = models.CharField(max_length=50)

    def __str__(self):
        return self.name
