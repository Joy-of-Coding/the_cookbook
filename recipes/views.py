from django.shortcuts import render

from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework import generics

class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer