from rest_framework.serializers import ModelSerializer
from .models import Recipe, RecipeConcept, RecipeDebuggingTip, RecipeStep


class RecipeConceptSerializer(ModelSerializer):
    class Meta:
        model = RecipeConcept
        fields = ["title", "learning_link"]


class RecipeStepSerializer(ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = ["title", "text_content"]


class RecipeTipSerializer(ModelSerializer):
    class Meta:
        model = RecipeDebuggingTip
        fields = ["content"]


class RecipeSerializer(ModelSerializer):
    concepts = RecipeConceptSerializer(
        many=True, read_only=True, source="recipe_concept"
    )
    steps = RecipeStepSerializer(many=True, read_only=True, source="recipe_step")
    tips = RecipeTipSerializer(many=True, read_only=True, source="recipe_tip")

    class Meta:
        model = Recipe
        fields = [
            "title",
            "summary",
            "img_link",
            "concepts",
            "steps",
            "tips",
            "created_at",
            "updated_at",
        ]
