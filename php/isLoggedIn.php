<?php

include("../core/database/connect.php");

$result = false;

if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] == true) {
  $result = true;
}

$data = array($result, $_SESSION["logged_in"], $_SESSION["username"]);

echo json_encode($data);

?>
