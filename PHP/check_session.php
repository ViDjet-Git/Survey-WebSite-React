<?php 
header("Access-Control-Allow-Origin: *");
header("Access-COntrol-Allow-Methods: POST");
header("Access-COntrol-Allow-Headers: Content-Type");

session_start();

$loged = false;
if(isset($_SESSION['email']) && isset($_SESSION['username']) && isset($_SESSION['id'])){ 
	$loged = true;
}

return $loged;
?>