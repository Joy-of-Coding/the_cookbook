from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    author = models.EmailField()
    text_content = models.TextField(max_length=800)
    created_at = models.DateTimeField(auto_now_add=True)