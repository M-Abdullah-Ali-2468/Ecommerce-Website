from django.shortcuts import render

# Create your views here.
def product(request):
    return render(request, 'products/product.html') # Render the index.html template

def purchase(request):
    return render(request, 'products/purchase.html') # Render the purchase.html template