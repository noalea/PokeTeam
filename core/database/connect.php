<?php

@session_start();

$db = mysqli_connect("localhost", "eccentt8", "_@OllyAvery09", "eccentt8_poketeam");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

?>
