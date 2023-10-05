<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if(isset($_COOKIE['PHPSESSID'])) {
	session_id($_COOKIE['PHPSESSID']);
	session_start();
	if(!isset($_SESSION['id'])){ 
		echo(json_encode(array("error" => "Register please")));
		exit();
	}
}

if(isset($_POST['name'])){
    $name = $_POST['name'];
    switch($name) {
        case "username":
            $username = $_SESSION['username'];
            echo(json_encode(array("success" => $username)));
		    exit();
        case "email":
            $email = $_SESSION['email'];
            echo(json_encode(array("success" => $email)));
		    exit();
        case "gender":
            $gender = $_SESSION['gender'];
            echo(json_encode(array("success" => $gender)));
		    exit();
        case "birthday":
            $birthday = $_SESSION['birthday'];
            echo(json_encode(array("success" => $birthday)));
            exit();
        default:
            echo(json_encode(array("error" => "No such information")));
            exit();
    }
}
?>