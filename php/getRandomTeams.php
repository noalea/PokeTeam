<?php

include("../core/database/connect.php");
$data = file_get_contents("php://input");
$recievedData = json_decode($data);

$username = $recievedData->username;

$select = "SELECT * FROM teams order by rand() LIMIT 5";
$query = mysqli_query($db, $select);

while($row = mysqli_fetch_assoc($query)) {

  $usernames[] = $row["username"];
  $poke1[] = $row['pokemon_1'];
  $poke1Img[] = $row['pokemon_1_img'];
  $poke2[] = $row['pokemon_2'];
  $poke2Img[] = $row['pokemon_2_img'];
  $poke3[] = $row['pokemon_3'];
  $poke3Img[] = $row['pokemon_3_img'];
  $poke4[] = $row['pokemon_4'];
  $poke4Img[] = $row['pokemon_4_img'];
  $poke5[] = $row['pokemon_5'];
  $poke5Img[] = $row['pokemon_5_img'];
  $poke6[] = $row['pokemon_6'];
  $poke6Img[] = $row['pokemon_6_img'];

}


$data = array($usernames, $poke1, $poke1Img, $poke2, $poke2Img, $poke3, $poke3Img, $poke4, $poke4Img, $poke5, $poke5Img, $poke6, $poke6Img);

echo json_encode($data);

?>
