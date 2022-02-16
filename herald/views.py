from django.shortcuts import render
from rest_framework import generics
from .models import MessageOfTheDay
from .serializers import MessageOfTheDaySerializer

# Create your views here.


class GetMessageOfTheDay(generics.RetrieveAPIView):
    queryset = MessageOfTheDay.objects.all()
    serializer_class = MessageOfTheDaySerializer

    def get_object(self, *args, **kwargs):
        return self.queryset.latest("created_at")
