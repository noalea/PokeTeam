app.controller("signupCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  var signupData = {};

  $scope.userTaken = false;

  $scope.signUp = function() {

    signupData = {
      email: $scope.signup.email,
      username: $scope.signup.username,
      password: $scope.signup.password,
      pokeOne: $rootScope.thePokemons[0][0],
      pokeOneImg: $rootScope.thePokemons[0][1],
      pokeTwo: $rootScope.thePokemons[1][0],
      pokeTwoImg: $rootScope.thePokemons[1][1],
      pokeThree: $rootScope.thePokemons[2][0],
      pokeThreeImg: $rootScope.thePokemons[2][1],
      pokeFour: $rootScope.thePokemons[3][0],
      pokeFourImg: $rootScope.thePokemons[3][1],
      pokeFive: $rootScope.thePokemons[4][0],
      pokeFiveImg: $rootScope.thePokemons[4][1],
      pokeSix: $rootScope.thePokemons[5][0],
      pokeSixImg: $rootScope.thePokemons[5][1]
    };

    // Validate (check if username is taken)
    $http.post("php/usernameTaken.php", signupData).success(function(response){

        console.log("username taken? " + response);

        if (response == "true") {
          $scope.userTaken = true;
          document.getElementById("alertSignup").style.opacity = "100";
        } else {
          $http.post("php/signup.php", signupData).success(function(response){
            $state.go("home");
            console.log("Signed up!");
            $scope.userTaken = false;
            console.log("Session: " + response);
            $rootScope.username = $scope.signup.username;
            // $http.get("php/isLoggedIn.php").success(function(response){
            //     if (response === "true") {
            //       $rootScope.isLoggedIn = 'true';
            //       $rootScope.username = $scope.signup.username;
            //     } else if (response === "false") {
            //       $rootScope.isLoggedIn = 'false';
            //
            //       $state.go("create");
            //     }
            //     console.log("logged in? : " + $rootScope.isLoggedIn);
            //
            // }).error(function(error){
            //     console.error(error);
            // });

          }).error(function(error) {
            console.error(error);
          });
        }

        console.log($scope.userTaken);

    }).error(function(error){
        console.error(error);
    });

  }

})
