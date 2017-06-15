'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('userApp').
  component('userLogin', {
    templateUrl: 'static/js/angular_app/user-login/user-login.template.html',
    controller:['$http','$location',
        function UserLoginController($http, $location) {
            this.find_user = function (user_name) {
                $http.post('user_management/users/', {"user_name":user_name})
                    .then(function (result) {
                        $location.path('/user/' + result.data.id + '/')
                    }, function (data) {
            
                    });
            };
      }]
  });
