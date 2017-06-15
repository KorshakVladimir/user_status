from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from user_management.models import Users
from user_management.serializers import UsersSerializer


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    def create(self, request, *arg, **kwargs):
        res = self.queryset.filter(user_name=request.data.get("user_name", ""))
        if not len(res):
            request.data["status"] = Users.STATUSES[2][0]
            return super().create(request)
        else:
            serializer = UsersSerializer(res.first())
            return Response(serializer.data)


def base_view(request):
    return render(template_name="base.html", request=request)


class ListStatuses(APIView):
    """
    View to list all statuses.
    """

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        statuses = [status[0] for status in Users.STATUSES]
        return Response(statuses)


