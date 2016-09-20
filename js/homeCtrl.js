app.controller("homeCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  var getUserPokemon = function() {

    $http.get("php/isLoggedIn.php").success(function(response){
        console.log(response);
        $rootScope.username = response[2];
        console.log("user: " + $rootScope.username);

        var data = {
          username: $rootScope.username
        }

        $http.post("php/getUserPokemon.php", data).success(function(response) {

          $scope.userPoke1 = response[0];
          $scope.userPoke1Img = response[1];
          $scope.userPoke2 = response[2];
          $scope.userPoke2Img = response[3];
          $scope.userPoke3 = response[4];
          $scope.userPoke3Img = response[5];
          $scope.userPoke4 = response[6];
          $scope.userPoke4Img = response[7];
          $scope.userPoke5 = response[8];
          $scope.userPoke5Img = response[9];
          $scope.userPoke6 = response[10];
          $scope.userPoke6Img = response[11];

        }).error(function(error) {
          console.error(error);
        });

    }).error(function(error){
        console.error(error);
    });

  };

  var getRandomUserTeams = function() {

    $http.get("php/getRandomTeams.php").success(function(response) {
      $scope.randomUsernames = response[0];
      $scope.randomPoke1 = response[1];
      $scope.randomPoke1Img = response[2];
      $scope.randomPoke2 = response[3];
      $scope.randomPoke2Img = response[4];
      $scope.randomPoke3 = response[5];
      $scope.randomPoke3Img = response[6];
      $scope.randomPoke4 = response[7];
      $scope.randomPoke4Img = response[8];
      $scope.randomPoke5 = response[9];
      $scope.randomPoke5Img = response[10];
      $scope.randomPoke6 = response[11];
      $scope.randomPoke6Img = response[12];

      $scope.random_info = [
         {
           username: $scope.randomUsernames,
           poke1: $scope.randomPoke1,
           poke1Img: $scope.randomPoke1Img,
           poke2: $scope.randomPoke2,
           poke2Img: $scope.randomPoke2Img,
           poke3: $scope.randomPoke3,
           poke3Img: $scope.randomPoke3Img,
           poke4: $scope.randomPoke4,
           poke4Img: $scope.randomPoke4Img,
           poke5: $scope.randomPoke5,
           poke5Img: $scope.randomPoke5Img,
           poke6: $scope.randomPoke6,
           poke6Img: $scope.randomPoke6Img
         }
       ];

       var length = $scope.random_info[0].username.length;

       $scope.random_nums = [];

       for(var i = 0; i < length; i++) {
         $scope.random_nums.push(i);
       }

    }).error(function(error) {
      console.error(error);
    });

  };

  $scope.getRandomUserTeams = function() {

    $http.get("php/getRandomTeams.php").success(function(response) {
      $scope.randomUsernames = response[0];
      $scope.randomPoke1 = response[1];
      $scope.randomPoke1Img = response[2];
      $scope.randomPoke2 = response[3];
      $scope.randomPoke2Img = response[4];
      $scope.randomPoke3 = response[5];
      $scope.randomPoke3Img = response[6];
      $scope.randomPoke4 = response[7];
      $scope.randomPoke4Img = response[8];
      $scope.randomPoke5 = response[9];
      $scope.randomPoke5Img = response[10];
      $scope.randomPoke6 = response[11];
      $scope.randomPoke6Img = response[12];

      $scope.random_info = [
         {
           username: $scope.randomUsernames,
           poke1: $scope.randomPoke1,
           poke1Img: $scope.randomPoke1Img,
           poke2: $scope.randomPoke2,
           poke2Img: $scope.randomPoke2Img,
           poke3: $scope.randomPoke3,
           poke3Img: $scope.randomPoke3Img,
           poke4: $scope.randomPoke4,
           poke4Img: $scope.randomPoke4Img,
           poke5: $scope.randomPoke5,
           poke5Img: $scope.randomPoke5Img,
           poke6: $scope.randomPoke6,
           poke6Img: $scope.randomPoke6Img
         }
       ];

       var length = $scope.random_info[0].username.length;

       $scope.random_nums = [];

       for(var i = 0; i < length; i++) {
         $scope.random_nums.push(i);
       }

    }).error(function(error) {
      console.error(error);
    });

  };

  getUserPokemon();
  getRandomUserTeams();

})
