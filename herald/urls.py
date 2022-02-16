from django.urls import path
from . import views

urlpatterns = [
    path("motd/", views.GetMessageOfTheDay.as_view()),
    path("motd/create/", views.CreateMessageOfTheDay.as_view())
]
