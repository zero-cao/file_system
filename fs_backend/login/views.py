from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class Login(APIView):
    def post(self, request):
        for key, value in request.data.items():
            if key == 'username':
                if value == 'admin':
                    pass
                else:
                    response = {'code': 403, 'status': 'username is invalid'}
                    return Response(data=response, status=status.HTTP_403_FORBIDDEN)
            if key == 'password':
                if value == '123456':
                    pass
                else:
                    response = {'code': 403, 'status': 'password is wrong'}
                    return Response(data=response, status=status.HTTP_403_FORBIDDEN)
        token = '1234567890dfsa;fjs;fjsa;j;jd;sa;'
        response = {'code': 200, 'status': 'success', 'token': 'Token {}'.format(token)}
        return Response(data=response, status=status.HTTP_200_OK)


class MenuList(APIView):
    def get(self, request):
        response = [
            {'name': 'File', 'id': 1, 'path': 'file', 'children': [
                {'name': 'Overview', 'id': 101, 'path': ''},
                {'name': 'Upload', 'id': 102, 'path': 'upload'},
                {'name': 'FileEdit', 'id': 103, 'path': 'edit'}
            ]},
            {'name': 'Cert', 'id': 2, 'path': 'cert', 'children': [
                {'name': 'Overview', 'id': 201, 'path': ''},
                {'name': 'Upload', 'id': 202, 'path': 'upload'},
                {'name': 'Edit', 'id': 203, 'path': 'edit'}
            ]},
            {'name': 'LDAP', 'id': 3, 'path': 'ldap', 'children': [
                {'name': 'Status', 'id': 301, 'path': ''},
                {'name': 'Configuration', 'id': 302, 'path': 'conf'},
                {'name': 'Log', 'id': 303, 'path': 'log'}
            ]},
        ]
        return Response(data=response, status=status.HTTP_200_OK)