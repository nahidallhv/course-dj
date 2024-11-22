from django.db import models


class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    youtube_url = models.URLField()

    def __str__(self):
        return self.title