from django.urls import path
from . import views
from .views import RecipeListCreateAPIView

urlpatterns = [
    path('recipes/', RecipeListCreateAPIView.as_view(), name='recipe-list'),
]