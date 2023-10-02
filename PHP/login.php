<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-COntrol-Allow-Methods: POST");
header("Access-COntrol-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if(isset($_COOKIE['PHPSESSID'])) session_id($_COOKIE['PHPSESSID']);
session_start();
include "db_connect.php";

if(isset($_POST['email']) && isset($_POST['password'])){
	$email = $_POST['email'];
	$password = $_POST['password'];

	if(empty($email)){
		echo(json_encode(array("error" => "User Email is required")));
		exit();
	} else if(empty($password)){
		echo(json_encode(array("error" => "Password is required")));
		exit();
	} else{
		$password = md5($password);
		$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
		$result = mysqli_query($conn, $sql);
		if(mysqli_num_rows($result) === 1){
			$row = mysqli_fetch_assoc($result);
			$_SESSION['id'] = $row['id'];
			$_SESSION['username'] = $row['username'];
			$_SESSION['birthday'] = $row['birthday'];
			$_SESSION['gender'] = $row['gender'];
			$_SESSION['email'] = $row['email'];
            
			session_write_close();
            echo(json_encode(array("success" => true)));
            exit();
		} else {
			echo(json_encode(array("error" => "Incorrect Data")));
			exit();
		}
	}

} else {
	echo(json_encode(array("error" => "Unknown error")));
	exit();
}
