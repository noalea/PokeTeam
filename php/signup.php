<?php

include("../core/database/connect.php");
$data = file_get_contents("php://input");
$recievedData = json_decode($data);

$email = $recievedData->email;
$username = $recievedData->username;
$password = $recievedData->password;
$pokeOne = $recievedData->pokeOne;
$pokeOneImg = $recievedData->pokeOneImg;
$pokeTwo = $recievedData->pokeTwo;
$pokeTwoImg = $recievedData->pokeTwoImg;
$pokeThree = $recievedData->pokeThree;
$pokeThreeImg = $recievedData->pokeThreeImg;
$pokeFour = $recievedData->pokeFour;
$pokeFourImg = $recievedData->pokeFourImg;
$pokeFive = $recievedData->pokeFive;
$pokeFiveImg = $recievedData->pokeFiveImg;
$pokeSix = $recievedData->pokeSix;
$pokeSixImg = $recievedData->pokeSixImg;

$passwordSecure = md5($password);

// Insert user
$insert = "INSERT INTO users (username, password, email)
VALUES ('$username', '$passwordSecure', '$email')";
mysqli_query($db, $insert);

// Insert user team
$insert2 = "INSERT INTO teams (username, pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_1_img, pokemon_2_img, pokemon_3_img, pokemon_4_img, pokemon_5_img, pokemon_6, pokemon_6_img)
VALUES ('$username', '$pokeOne', '$pokeTwo', '$pokeThree', '$pokeFour', '$pokeFive', '$pokeOneImg', '$pokeTwoImg', '$pokeThreeImg', '$pokeFourImg', '$pokeFiveImg', '$pokeSix', '$pokeSixImg')";
mysqli_query($db, $insert2);


session_start();
$_SESSION["logged_in"] = true;
$_SESSION["username"] = $username;
$data = array($_SESSION["logged_in"], $_SESSION["username"]);
echo json_encode($data);

?>
