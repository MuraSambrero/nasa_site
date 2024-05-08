from django.db import models
from filer.fields.image import FilerImageField
# Create your models here.

class SliderImage(models.Model):
    image = FilerImageField(on_delete=models.CASCADE, verbose_name='Название изображения')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
        verbose_name='Сортировка'
    )

    class Meta:
        verbose_name = 'Картинки слайдера'
        verbose_name_plural = 'Картинки слайдера'
        ordering = ['my_order']
        