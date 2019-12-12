<?php

/* Putting posts/comments to the database */

function setComments($conn) {
  if (isset($_POST['commentSubmit'])) {
    $uid = $_POST['uid'];
    $message = $_POST['message'];

    $sql = "INSERT INTO comments (uid, message) VALUES ('$uid', '$message')";
    $result = $conn->query($sql);
  }

}

/* Getting posts/comments from the database and displaying them on the browser */

function getComments($conn) {
  $sql = "SELECT * FROM comments";
  $result = $conn->query($sql);
  while (  $row = $result->fetch_assoc()) {
    echo "<div class='col s12'>
              <div class='card'>
                <div class='card-content black-text'>";
      echo "<span class='card-title'>";
      echo $row['uid']."<br>";
      echo "</span>";
      echo nl2br($row['message']);
    echo "</div></div></div>";
  }
}
