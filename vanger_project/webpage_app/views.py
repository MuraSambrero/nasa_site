from django.shortcuts import render
from .models import SliderImage

def home_page(request):
    slider_images = SliderImage.objects.all()
    context = {
        'slider_images': slider_images
    }
    return render(request, 'home.html', context)
