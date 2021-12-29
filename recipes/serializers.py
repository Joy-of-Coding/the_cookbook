from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('name', 'author', 'text_content', 'created_at')