from django.shortcuts import render

def home(request):
    return render(request, 'store/home.html') # Render the index.html template
