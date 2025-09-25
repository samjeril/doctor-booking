from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

# Signup view
def signup_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        # Check if username already exists
        if User.objects.filter(username=username).exists():
            return render(request, "signup.html", {"error": "Username already exists"})

        # Create user
        user = User.objects.create_user(username=username, password=password)
        user.save()
        # Redirect to login page after successful signup
        return redirect("login")  

    return render(request, "signup.html")


# Login view
def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("profile")
        else:
            return render(request, "login.html", {"error": "Invalid username or password"})
    return render(request, "login.html")


# Profile view
def profile_view(request):
    return render(request, "profile.html")


# Logout view
def logout_view(request):
    logout(request)
    return redirect("login")
