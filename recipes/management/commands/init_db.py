from django.core import management
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """
    Loads necessary fixtures
    """

    fixtures = ["mockRecipes.json"]

    def handle(self, *args, **options):
        self._init_db()

    def _init_db(self):
        management.call_command("migrate")
        for json_file in self.fixtures:
            management.call_command("loaddata", json_file)
