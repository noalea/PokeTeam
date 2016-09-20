<?php include "core/init.php"; ?>

<!DOCTYPE html>
<html ng-app="poketeamApp">
  <head>
    <meta charset="utf-8">
    <base href="/poketeam/">
    <title>PokéTeam</title>
    <meta name="description" content="Create yours and find others." />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title></title>

    <link href="https://fonts.googleapis.com/css?family=Miriam+Libre:400,700" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css" type="text/css" />

    <!-- Scripts -->
    <script src="js/jquery.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="js/angular-ui-router.js"></script>
    <script type="text/javascript" src="poketeamApp.js"></script>
    <script type="text/javascript" src="js/mainCtrl.js"></script>
    <script type="text/javascript" src="js/createCtrl.js"></script>
    <script type="text/javascript" src="js/signupCtrl.js"></script>
    <script type="text/javascript" src="js/loginCtrl.js"></script>
    <script type="text/javascript" src="js/homeCtrl.js"></script>
  </head>
  <body ng-controller="appCtrl">

    <!-- DONT FORGET TO ADD LOADING SCREEN -->

    <header>
      <div ng-show="isLoggedIn === 'true'">
        <a ng-click="logOut()" class="pointer">Logout</a>
      </div>
      <div ng-show="isLoggedIn === 'false'">
        <a ui-sref="login" class="pointer">Already a member?</a>
      </div>
    </header>

    <div ui-view></div>

  </body>
</html>
