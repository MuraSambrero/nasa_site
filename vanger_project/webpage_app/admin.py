from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import SliderImage
from adminsortable2.admin import SortableAdminMixin
from easy_thumbnails.files import get_thumbnailer

# Register your models here.


class SliderAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("image", "get_image", "my_order")

    def get_image(self, object):
        if object.image:
            options = {'size': (50, 50), 'crop': True}
            thumb_url = get_thumbnailer(object.image).get_thumbnail(options).url
            return mark_safe(f"<img src='{thumb_url}'>")
        else:
            return "No Image"

    get_image.short_description = "Миниатюра"



# options = {'size': (100, 100), 'crop': True}
# thumb_url = get_thumbnailer(profile.photo).get_thumbnail(options).url

admin.site.register(SliderImage, SliderAdmin)
