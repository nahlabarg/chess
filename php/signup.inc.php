<?php 
include_once 'dbh.inc.php' ;
$nom = $_POST['nom'];

$mail = $_POST['mail'];
$passwordd = $_POST['password'];

$sql ="INSERT INTO client ( nom_client ,   mail_client , passwordd ) VALUES ('$nom',  '$mail', ' ,'$password')";

mysqli_query($conn ,$sql) ;

if (mysqli_query($conn, $sql)) {
    echo "client ajouté avec succés";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }


  
