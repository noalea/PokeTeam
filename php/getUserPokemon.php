<?php

include("../core/database/connect.php");
$data = file_get_contents("php://input");
$recievedData = json_decode($data);

$username = $recievedData->username;

$select = "SELECT * FROM teams WHERE username = '".$username."'";
$query = mysqli_query($db, $select);
$row = mysqli_fetch_assoc($query);

$pokemon1 = $row['pokemon_1'];
$pokemon2 = $row['pokemon_2'];
$pokemon3 = $row['pokemon_3'];
$pokemon4 = $row['pokemon_4'];
$pokemon5 = $row['pokemon_5'];
$pokemon6 = $row['pokemon_6'];
$pokemon1Img = $row['pokemon_1_img'];
$pokemon2Img = $row['pokemon_2_img'];
$pokemon3Img = $row['pokemon_3_img'];
$pokemon4Img = $row['pokemon_4_img'];
$pokemon5Img = $row['pokemon_5_img'];
$pokemon6Img = $row['pokemon_6_img'];

$data = array($pokemon1, $pokemon1Img, $pokemon2, $pokemon2Img, $pokemon3, $pokemon3Img, $pokemon4, $pokemon4Img, $pokemon5, $pokemon5Img, $pokemon6, $pokemon6Img);

echo json_encode($data);

?>
