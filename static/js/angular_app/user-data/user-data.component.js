'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('userApp').
  component('userData', {
    templateUrl: 'static/js/angular_app/user-data/user-data.template.html',
    controller:['$http','$location', '$routeParams', '$scope',
        function UserDataController($http, $location, $routeParams, $scope) {
            $scope.user = {};
            $scope.statuses = {};
            $http.get('user_management/users/'+$routeParams.Id + '/')
                .then(function (result) {
                    $scope.user = result.data;
                });
            $http.get('user_management/statuses/')
                .then(function (result) {
                    $scope.statuses = result.data;
                });
            $scope.update_status = function (status) {
                var data = {};
                angular.copy($scope.user, data);
                data.status = status;
                $http.put('user_management/users/'+$routeParams.Id + '/', data)
                .then(function (result) {
                    $scope.user = result.data;
                });
            }
      }]
  });
