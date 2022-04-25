<?php 
include_once 'dbh.inc.php' ;
$user_name = $_POST['username'];
$passwordd = $_POST['password'];

$sql="select id_client from client where username = '$username' AND passwordd = '$passwordd' " ;


$res = mysqli_query($conn ,$sql) ;

if (!empty($res)){
print_r(json_encode($res)) ; 
}
else
{
print_r(json_encode(array('username'=>NULL))) ;
}
