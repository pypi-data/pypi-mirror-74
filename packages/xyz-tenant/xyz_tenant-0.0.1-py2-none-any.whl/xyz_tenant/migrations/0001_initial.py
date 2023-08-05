# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2020-02-04 10:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import tenant_schemas.postgresql_backend.base
import xyz_util.modelutils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='App',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('school', '\u5b66\u6821'), ('course', '\u8bfe\u7a0b'), ('exam', '\u6d4b\u9a8c')], db_index=True, max_length=64, verbose_name='\u540d\u5b57')),
                ('status', models.PositiveSmallIntegerField(choices=[(0, '\u672a\u5b89\u88c5'), (1, '\u5df2\u5b89\u88c5')], default=1, verbose_name='\u72b6\u6001')),
                ('settings', xyz_util.modelutils.JSONField(default={}, verbose_name='\u914d\u7f6e')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='\u521b\u5efa\u65f6\u95f4')),
                ('modify_time', models.DateTimeField(auto_now=True, verbose_name='\u4fee\u6539\u65f6\u95f4')),
            ],
            options={
                'verbose_name': '\u5e94\u7528',
                'verbose_name_plural': '\u5e94\u7528',
            },
        ),
        migrations.CreateModel(
            name='Tenant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain_url', models.CharField(max_length=128, unique=True)),
                ('schema_name', models.CharField(max_length=63, unique=True, validators=[tenant_schemas.postgresql_backend.base._check_schema_name])),
                ('name', models.CharField(max_length=128, verbose_name='\u540d\u79f0')),
            ],
            options={
                'verbose_name': '\u79df\u6237',
                'verbose_name_plural': '\u79df\u6237',
            },
        ),
        migrations.AddField(
            model_name='app',
            name='tenant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='apps', to='tenant.Tenant', verbose_name='\u79df\u6237'),
        ),
        migrations.AlterUniqueTogether(
            name='app',
            unique_together=set([('tenant', 'name')]),
        ),
    ]
