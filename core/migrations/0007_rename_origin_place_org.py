# Generated by Django 3.2 on 2022-04-17 06:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20220417_0623'),
    ]

    operations = [
        migrations.RenameField(
            model_name='place',
            old_name='origin',
            new_name='org',
        ),
    ]