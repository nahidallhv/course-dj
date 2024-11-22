from django.shortcuts import render
from exam.models import Video

# Create your views here.

def home_page(request):
    return render(request,"home.html")

def contact_page(request):
    return render(request,"contact.html")

def about_page(request):
    return render(request,"about.html")

def video_lessons_page(request):
    videos = Video.objects.all() 
    return render(request, "video_lessons.html", {"videos": videos})



