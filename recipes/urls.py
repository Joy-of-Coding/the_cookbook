from django.urls import path
from . import views

urlpatterns = [
    path('api/recipe/', views.RecipeListCreate.as_view() ),
    path('api/recipe/all_tips', views.RecipeTipsListCreate.as_view()),
    path('api/recipe/all_concepts', views.RecipeConceptListCreate.as_view()),
    path('api/recipe/all_steps', views.RecipeStepListCreate.as_view())
] 