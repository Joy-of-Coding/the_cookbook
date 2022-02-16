from django.shortcuts import render
from rest_framework import generics
from .models import MessageOfTheDay
from .serializers import MessageOfTheDaySerializer

# Create your views here.


class MessageOfTheDayListCreate(generics.ListCreateAPIView):
    queryset = MessageOfTheDay.objects.latest("created_at")
    serializer_class = MessageOfTheDaySerializer
