from django.shortcuts import render

from .models import Recipe, RecipeConcept, RecipeDebuggingTip, RecipeStep
from .serializers import (
    RecipeConceptSerializer,
    RecipeSerializer,
    RecipeStepSerializer,
    RecipeTipSerializer,
)
from rest_framework import generics


class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeStepListCreate(generics.ListCreateAPIView):
    queryset = RecipeStep.objects.all()
    serializer_class = RecipeStepSerializer


class RecipeConceptListCreate(generics.ListCreateAPIView):
    queryset = RecipeConcept.objects.all()
    serializer_class = RecipeConceptSerializer


class RecipeTipsListCreate(generics.ListCreateAPIView):
    queryset = RecipeDebuggingTip.objects.all()
    serializer_class = RecipeTipSerializer
