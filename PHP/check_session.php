<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");


$loged = '0';
if(isset($_COOKIE['PHPSESSID'])){
session_id($_COOKIE['PHPSESSID']);
session_start();

if(isset($_SESSION['email']) && isset($_SESSION['username']) && isset($_SESSION['id'])){ 
	$loged = '1';
}
}
session_write_close();
echo $loged;
?>