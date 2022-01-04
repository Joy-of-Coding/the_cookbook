from django.urls import path
from . import views

urlpatterns = [
    path("recipes/", views.RecipeListCreate.as_view()),
    path("recipes/all_tips", views.RecipeTipsListCreate.as_view()),
    path("recipes/all_concepts", views.RecipeConceptListCreate.as_view()),
    path("recipes/all_steps", views.RecipeStepListCreate.as_view()),
]
