# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-20 08:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("flow", "0008_compute_size"),
    ]

    operations = [
        migrations.AlterField(
            model_name="data", name="size", field=models.BigIntegerField(),
        ),
    ]
