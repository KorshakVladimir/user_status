from django.db import models


class Users(models.Model):
    STATUSES = (
        ('Working', 'Working'),
        ('On Vacation', 'On Vacation'),
        ('Business Trip', 'Business Trip'),
    )
    user_name = models.CharField(max_length=250, unique=True)
    status = models.CharField(max_length=1, choices=STATUSES)

    class Meta:
        ordering = ('user_name',)
