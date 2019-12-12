<?php
/* Connection to the SQL database */
$conn = mysqli_connect('localhost', 'root', '', 'reviews');

if (!$conn) {
  die("Connection failed: ".mysqli_connect_error());
}

?>
