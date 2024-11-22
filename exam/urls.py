from django.urls import path,include
from .views import *

app_name="exam"

urlpatterns = [
    path('math_exam/', math_quiz_view, name='math_exam'),
    path('result/<int:correct>/<int:incorrect>/', result, name='result'),
    path('exams/',exams_view,name="exams"),

   
]




