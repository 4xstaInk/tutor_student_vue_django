# Generated by Django 3.2.5 on 2021-07-20 11:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0006_rename_field_student_fields'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='description',
        ),
        migrations.RemoveField(
            model_name='student',
            name='title',
        ),
    ]
