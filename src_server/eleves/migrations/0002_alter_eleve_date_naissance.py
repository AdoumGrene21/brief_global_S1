# Generated by Django 4.0.3 on 2022-04-14 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eleves', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eleve',
            name='date_naissance',
            field=models.DateField(null=True),
        ),
    ]
