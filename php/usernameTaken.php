<?php

include("../core/database/connect.php");
$data = file_get_contents("php://input");
$recievedData = json_decode($data);

$username = $recievedData->username;

$select = "SELECT * FROM users WHERE username='".$username."'";
$check = mysqli_query($db, $select);

$isTaken = false;

// Username is taken
if (mysqli_num_rows($check) > 0){
  $isTaken = true;
}

echo json_encode($isTaken);

?>
