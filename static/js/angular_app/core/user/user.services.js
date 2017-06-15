angular.module('userApp')
    .factory('get_users_status', ['$http', function($http) {
         return $http.get('user_management/statuses/')
   // var msgs = [];
   // return function(msg) {
   //   msgs.push(msg);
   //   if (msgs.length === 3) {
   //     win.alert(msgs.join('\n'));
   //     msgs = [];
   //   }
   // };
 }]);