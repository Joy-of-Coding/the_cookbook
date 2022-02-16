from django.urls import path
from . import views

urlpatterns = [
    path("motd/", views.MessageOfTheDayCreate.as_view()),
]
