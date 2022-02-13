from django.urls import path
from . import views

urlpatterns = [
    path("motd/", views.MessageOfTheDayListCreate.as_view()),
]
