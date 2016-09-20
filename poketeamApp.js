var app = angular.module("poketeamApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

	$stateProvider

  //home
  .state("home", {
    url:"/",
    templateUrl: "views/home.html"
  })

  //login
  .state("login", {
    url:"/login",
    templateUrl: "views/login.html"
  })

  //signup
  .state("signup", {
    url:"/signup",
    templateUrl: "views/signup.html"
  })

  //create
  .state("create", {
    url:"/create",
    templateUrl: "views/createTeam.html"
  })

  $urlRouterProvider.otherwise('/home');

})
