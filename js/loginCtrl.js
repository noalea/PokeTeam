app.controller("loginCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  var loginData = {};

  $scope.logIn = function() {

    loginData = {
      username: $scope.login.username,
      password: $scope.login.password
    };

    // Validate (check if username is taken)
    $http.post("php/login.php", loginData).success(function(response){

        console.log("login? " + response);

        if (response === "true") {
          $state.go("home");
          $rootScope.isLoggedIn = 'true';

          $rootScope.username = $scope.login.username;

        } else {
          document.getElementById("alertLogin").style.opacity = "100";
        }

    }).error(function(error){
        console.error(error);
    });

  }

})
