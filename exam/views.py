

# from django.shortcuts import render, redirect
# from django.shortcuts import render, redirect
from django.urls import reverse
from django.shortcuts import render, redirect

def math_quiz_view(request):
    correct_answers = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
    score = {'correct': 0, 'incorrect': 0}

    if request.method == 'POST':
        user_answers = [
            request.POST.get('question1'),
            request.POST.get('question2'),
            request.POST.get('question3'),
            request.POST.get('question4'),
            request.POST.get('question5'),
            request.POST.get('question6'),
            request.POST.get('question7'),
            request.POST.get('question8'),
            request.POST.get('question9'),
            request.POST.get('question10'),
        ]
        
        for i, answer in enumerate(user_answers):
            if answer == correct_answers[i]:
                score['correct'] += 1
            else:
                score['incorrect'] += 1

        # URL parametrelerini kullanarak yönlendirme
        return redirect(f"/exam/result/{score['correct']}/{score['incorrect']}")

    return render(request, 'math_quiz.html')

def exams_view(request):
    return render(request,"exams.html")


def result(request, correct, incorrect):
    return render(request, 'math_resault.html', {'correct': correct, 'incorrect': incorrect})
