from django.db import models
from django.utils.translation import gettext as _

class TimeStampedModel(models.Model):
    """ Model that records time based information about itself. """

    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        abstract = True

class Recipe(TimeStampedModel):
    title = models.CharField(max_length=100)
    summary = models.TextField(max_length=400)
    img_link = models.CharField(max_length=300)

class RecipeConcept(models.Model):
    title = models.CharField(max_length=100)
    learning_link = models.CharField(max_length=300)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, blank=False, null=False)

class RecipeStep(models.Model):
    title = models.CharField(max_length=100)
    text_content = models.TextField(max_length=800)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, blank=False, null=False)

class RecipeDebuggingTip(models.Model):
    content = models.TextField(max_length=500)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, blank=False, null=False)