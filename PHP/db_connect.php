<?php

$sname = "localhost";
$uname = "root";
$password = "root";

$db_name = "login_vote";

$conn = new mysqli($sname, $uname, $password, $db_name);

if(!$conn){
	echo "Connection error";
} else {
	
}

?>