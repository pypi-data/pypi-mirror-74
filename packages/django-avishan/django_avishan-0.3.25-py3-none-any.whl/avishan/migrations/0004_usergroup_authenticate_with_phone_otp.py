# Generated by Django 3.0.3 on 2020-02-14 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('avishan', '0003_requesttrackexecinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='usergroup',
            name='authenticate_with_phone_otp',
            field=models.BooleanField(default=False),
        ),
    ]
