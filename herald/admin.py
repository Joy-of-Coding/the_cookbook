from django.contrib import admin
from .models import MessageOfTheDay

# Register your models here.

models = [MessageOfTheDay]

for model in models:
    admin.site.register(model)
