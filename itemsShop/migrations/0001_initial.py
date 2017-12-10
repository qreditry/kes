# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-09 11:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pech',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='Название')),
                ('manufacturer', models.CharField(blank=True, choices=[('Harvia', 'Harvia'), ('Tylo', 'Tylo'), ('RST', 'RST'), ('Termofor', 'Термофор'), ('Vez', 'Везувий')], max_length=100, null=True, verbose_name='Производитель')),
                ('type', models.CharField(blank=True, choices=[('Wood', 'Дровяная'), ('Electrical', 'Электрическая')], max_length=100, null=True, verbose_name='Тип печи')),
                ('slug', models.SlugField(blank=True, editable=False, null=True)),
                ('price', models.PositiveIntegerField(blank=True, null=True, verbose_name='Цена')),
                ('power', models.FloatField(blank=True, null=True, verbose_name='Мощность')),
                ('beforeAmount', models.FloatField(blank=True, null=True, verbose_name='мин. объем парильни')),
                ('afterAmount', models.FloatField(blank=True, null=True, verbose_name='макс. объем парильни')),
                ('description', models.TextField(blank=True, null=True, verbose_name='описание')),
                ('image', models.ImageField(blank=True, null=True, upload_to='pechs', verbose_name='картинка')),
            ],
            options={
                'verbose_name_plural': 'Печи',
                'verbose_name': 'Печь',
            },
        ),
    ]