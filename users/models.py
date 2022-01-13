from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):

    first_name = models.CharField("First name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)

    def get_full_name(self):
        return self.first_name + " " + self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email
