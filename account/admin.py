from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class UserAdmin(BaseUserAdmin):
  
    list_display = ('first_name', 'last_name', 'username', 'is_staff')

    search_fields = ('first_name', 'last_name')

    list_filter = ('is_staff',)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
