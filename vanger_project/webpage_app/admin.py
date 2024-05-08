from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import SliderImage
from adminsortable2.admin import SortableAdminMixin

# Register your models here.


class SliderAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("image", "get_image", "my_order")

    def get_image(self, object):
        if object.image:
            return mark_safe(f"<img src='{object.image.url}' width=50>")
        else:
            return "No Image"

    get_image.short_description = "Миниатюра"


admin.site.register(SliderImage, SliderAdmin)
