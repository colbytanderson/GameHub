# Generated by Django 3.0.8 on 2020-07-16 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myauth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='hangman_points',
            field=models.IntegerField(default=0),
        ),
    ]