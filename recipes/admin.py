from django.contrib import admin

from .models import Recipe, RecipeDebuggingTip, RecipeConcept, RecipeStep

# Register your models here.

models = [Recipe, RecipeDebuggingTip, RecipeConcept, RecipeStep]

for model in models:
    admin.site.register(model)
