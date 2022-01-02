from rest_framework.serializers import SerializerMethodField, ModelSerializer
from .models import Recipe, RecipeConcept, RecipeDebuggingTip, RecipeStep
from rest_framework.renderers import JSONRenderer

class RecipeConceptSerializer(ModelSerializer):
    class Meta:
        model = RecipeConcept
        fields = ('title', 'learning_link', 'recipe')

class RecipeStepSerializer(ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = ('title', 'text_content', 'recipe')

class RecipeTipSerializer(ModelSerializer):
    class Meta:
        model = RecipeDebuggingTip
        fields = ('content', 'recipe')

class RecipeSerializer(ModelSerializer):
    concepts = SerializerMethodField()
    steps = SerializerMethodField()
    tips = SerializerMethodField()

    def get_concepts(self, obj):
        # TODO
        return []
    
    def get_steps(self, obj):
        # TODO
        return []
        
    def get_tips(self, obj):
        # TODO
        return []
        
    class Meta:
        model = Recipe
        fields = ('title', 'summary', 'img_link', 'concepts', 'steps', 'tips', 'created_at', 'updated_at')
