from rest_framework.serializers import ModelSerializer
from .models import MessageOfTheDay


class MessageOfTheDaySerializer(ModelSerializer):
    class Meta:
        model = MessageOfTheDay
        fields = ["text", "created_at"]
