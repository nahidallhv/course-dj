
from django.contrib import admin
from django.urls import path,include
from home.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",home_page,name="home"),
    path("contact",contact_page,name="contact"),
    path("about",about_page,name="about"),
    path("account/",include("account.urls")),
    path("exam/",include("exam.urls")),
    path("video/",video_lessons_page,name="video"),
]
