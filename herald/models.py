from django.db import models
from recipes.models import TimeStampedModel

# Create your models here.


class MessageOfTheDay(TimeStampedModel):
    text = models.TextField(max_length=300)
