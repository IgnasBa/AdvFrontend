<?php
/* Connection to the SQL database */
$conn = mysqli_connect('localhost', 'u564314620_reviews', 'salonMatin', 'u564314620_php');

if (!$conn) {
  die("Connection failed: ".mysqli_connect_error());
}

?>
