app.controller("appCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  $scope.logOut = function () {
      $http.post("php/logout.php").success(function(response) {
        console.log(response);
        $rootScope.isLoggedIn = 'false';

        $state.go("create");
      }).error(function(error) {
        console.error(error);
      });
  };

  var isLoggedIn = function() {

    $http.get("php/isLoggedIn.php").success(function(response){
        if (response[0] === true) {
          $rootScope.isLoggedIn = 'true';
          $rootScope.username = response[2];
          console.log("set true");
        } else if (response[0] === false) {
          $rootScope.isLoggedIn = 'false';

          console.log("set false");
          $state.go("create");
        }
        console.log("logged in? : " + $rootScope.isLoggedIn + " session: " + response[1]);

    }).error(function(error){
        console.error(error);
    });

  }

  isLoggedIn();





})
