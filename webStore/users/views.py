from django.shortcuts import render

def login(request):
    return render(request, 'users/login.html') # Render the index.html template

def signup(request):
    return render(request, 'users/signup.html') # Render the index.html template

def admin(request):
    return render(request, 'users/admin.html') # Render the admin.html template

def admin_base(request):
    return render(request, 'users/admin-base.html') # Render the user.html template

def customer(request):
    return render(request, 'users/customer.html') # Render the user.html template