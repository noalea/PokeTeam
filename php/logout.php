<?php

include("../core/database/connect.php");

// remove all session variables
session_unset();

// destroy the session
session_destroy();

echo json_encode($_SESSION["logged_in"]);


?>
