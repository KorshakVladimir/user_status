from rest_framework import serializers

from user_management.models import Users


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'user_name', 'status')
