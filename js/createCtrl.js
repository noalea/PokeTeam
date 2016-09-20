app.controller("createCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  $scope.pokeNum = 0;
  $scope.chosenPoke = "Bulbasaur";

  $scope.chosenPokemon = [
    "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
    "Water",
    "2′4″ (0.71m)",
    "15.2 lbs (6.9 kg)",
    "45",
    "70 (normal)",
    "64",
    "Medium Slow"
  ];

  $rootScope.thePokemons = [
    ["null", "null"],
    ["null", "null"],
    ["null", "null"],
    ["null", "null"],
    ["null", "null"],
    ["null", "null"]
  ];

  var getData = function() {

    $http.get("php/pokemonList.php").success(function(response){

        $scope.pokemonList = response;

    }).error(function(error){
        console.error(error);
    });

  }

  getData();

  $scope.setQuery = function(query) {
    $scope.query = query;
    $scope.focus = false;
  };

  $scope.pokeInfo = function(pokemon) {
    $scope.chosenPoke = pokemon;

    var pokeInfo = {
      pokemon: $scope.chosenPoke
    }

    $http.post("php/getPokeInfo.php", pokeInfo).success(function(response){
        console.log("poke info: " + response);
        $scope.chosenPokemon = [
          response[1],
          response[0],
          response[2],
          response[3],
          response[4],
          response[5],
          response[6],
          response[7]
        ];
    }).error(function(error){
        console.error(error);
    });
  };

  $scope.addPokemon = function(pokeName, pokeGif) {

    $scope.pokeNum += 1;
    console.log($scope.pokeNum);

    if ($scope.pokeNum === 1) {
      $rootScope.thePokemons[0][0] = pokeName;
      $rootScope.thePokemons[0][1] = pokeGif;
      document.getElementById("block1").src = pokeGif;
    }
    else if ($scope.pokeNum === 2) {
      $rootScope.thePokemons[1][0] = pokeName;
      $rootScope.thePokemons[1][1] = pokeGif;
      document.getElementById("block2").src = pokeGif;
    }
    else if ($scope.pokeNum === 3) {
      $rootScope.thePokemons[2][0] = pokeName;
      $rootScope.thePokemons[2][1] = pokeGif;
      document.getElementById("block3").src = pokeGif;
    }
    else if ($scope.pokeNum === 4) {
      $rootScope.thePokemons[3][0] = pokeName;
      $rootScope.thePokemons[3][1] = pokeGif;
      document.getElementById("block4").src = pokeGif;
    }
    else if ($scope.pokeNum === 5) {
      $rootScope.thePokemons[4][0] = pokeName;
      $rootScope.thePokemons[4][1] = pokeGif;
      document.getElementById("block5").src = pokeGif;
    }
    else if ($scope.pokeNum === 6) {
      $rootScope.thePokemons[5][0] = pokeName;
      $rootScope.thePokemons[5][1] = pokeGif;
      document.getElementById("block6").src = pokeGif;
    }

    console.log($rootScope.thePokemons);

  };

  $scope.submitTeam = function() {

    var canContinue = true;

    for (var i = 0; i < $rootScope.thePokemons.length; i++) {
      for (var j = 0; j < $rootScope.thePokemons.length; j++) {
        if ($rootScope.thePokemons[i][j] === "null") {
          canContinue = false;
        }
      }
    }

    if (canContinue) {
      // go to sign up
      $state.go( "signup" );
    } else {
      // show alert
      document.getElementById("alert").style.opacity = "100";
    }

  }

});

// Returns the search function that will perform the filter on the data.
//
app.filter('search', function() {
  return search;
});

// Returns an array of items where the item text matches the search query. In
// this example, both the query and item are converted to lower case for easier
// matching.
//
function search(arr, query) {
  if (!query) {
    return arr;
  }

  var results = [];
  query = query.toLowerCase();

  angular.forEach(arr, function(item) {
    if (item.toLowerCase().indexOf(query) !== -1) {
      results.push(item);
    }
  });

  return results;
};
