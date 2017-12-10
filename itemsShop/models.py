from django.db import models


CHOICES_PECH_MANUFACTURER = (
    ('Harvia', 'Harvia'),
    ('Tylo', 'Tylo')
)

CHOICES_PECH_TYPE = (
    ('Wood', 'Дровяная'),
    ('Electrical', 'Электрическая')
)

class Pech(models.Model):
    name = models.CharField(blank=True, null=True, max_length=100, verbose_name='Название')
    manufacturer = models.CharField(max_length=100, choices=CHOICES_PECH_MANUFACTURER, blank=True, null=True, verbose_name='Производитель')
    type = models.CharField(blank=True, null=True, max_length=100, choices=CHOICES_PECH_TYPE, verbose_name='Тип печи')
    slug = models.SlugField(blank=True, null=True, editable=False)
    price = models.PositiveIntegerField(blank=True, null=True, verbose_name='Цена')
    power = models.FloatField(blank=True, null=True, verbose_name='Мощность')
    beforeAmount = models.FloatField(blank=True, null=True, verbose_name='мин. объем парильни')
    afterAmount = models.FloatField(blank=True, null=True, verbose_name='макс. объем парильни')
    description = models.TextField(blank=True, null=True, verbose_name='описание')
    image = models.ImageField(upload_to='pechs', blank=True, null=True, verbose_name='картинка')

    def save(self, *args, **kwargs):
        self.slug = self.name.replace(' ', '_').lower() + '-' + str(self.pk)

        super(Pech, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Печь'
        verbose_name_plural = 'Печи'

    def __str__(self):
        return self.name

