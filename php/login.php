<?php

include("../core/database/connect.php");
$data = file_get_contents("php://input");
$recievedData = json_decode($data);

$username = $recievedData->username;
$password = $recievedData->password;

$passwordSecure = md5($password);

$isLogin = false;

// Check if user exists
$select = "SELECT * FROM users WHERE username = '".$username."' AND password = '".$passwordSecure."'";
$check = mysqli_query($db, $select);

if (mysqli_num_rows($check) > 0){
  $isLogin = true;

  $_SESSION["logged_in"] = true;
  $_SESSION["username"] = $username;
}

echo json_encode($isLogin);

?>
