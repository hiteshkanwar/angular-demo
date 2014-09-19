//
angular.module('angularDevise.controllers').controller('SessionsController', ['$scope', '$location', '$cookieStore', 'Session', function($scope, $location, $cookieStore, Session) {
  
  $scope.session = Session.userSession;

  $scope.create = function() {

    if ( Session.signedOut ) {
      $scope.session.$save()
      .success(function(data, status, headers, config) {
        $cookieStore.put('_angular_devise_user', data);
        window.location.href="http://"+data.subdomain+".angular.dev:3000/home";
      });
    }
  };


  $scope.destroy = function() {
    $scope.session.$destroy();
  };

}]);