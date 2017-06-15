'use strict';

angular.
  module('userApp').
  component('usersList', {
    templateUrl: 'static/js/angular_app/users-list/users-list.template.html',
    controller:['$http', '$scope', 'get_users_status','$routeParams',
        function UsersListController($http, $scope, get_users_status, $routeParams) {
            $http.get('user_management/users/')
                .then(function (result) {
                    $scope.users = result.data;
                });
            get_users_status.then(function (result) {
               $scope.statuses = result.data;
            });
            $scope.search= {};
            $scope.search.id ='!' + $routeParams.Id;

      }]
  });
