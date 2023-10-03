<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-COntrol-Allow-Methods: POST");
header("Access-COntrol-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if(isset($_COOKIE['PHPSESSID'])) {
	session_id($_COOKIE['PHPSESSID']);
    session_start();
	if(isset($_SESSION['id'])){ 
		echo(json_encode(array("error" => "Already signed in")));
		exit();
	}
}

include "db_connect.php";

if(isset($_POST['email']) && isset($_POST['username']) && isset($_POST['birthday']) && 
	isset($_POST['gender']) && isset($_POST['password']) && isset($_POST['re_password'])){
	
	$address = $_POST['email'];
	$pass = $_POST['password'];
	$username = $_POST['username'];
	$birthday = $_POST['birthday'];
	$gender = $_POST['gender'];
	$re_pass = $_POST['re_password'];

	
	if(empty($address)) {
		echo(json_encode(array("error" => "Email empty")));
		exit();
	} else if(empty($username)){
		echo(json_encode(array("error" => "Username empty")));
		exit();
	} else if(empty($birthday)){
		echo(json_encode(array("error" => "Birthday empty")));
		exit();
	} else if(empty($gender) || $gender === 'Your Gender'){
		echo(json_encode(array("error" => "Gender empty")));
		exit();
	} else if(empty($pass)){
		echo(json_encode(array("error" => "Password empty")));
		exit();
	} else if($re_pass != $pass){
		echo(json_encode(array("error" => "Incorrect password repeat")));
		exit();
	} else{
		$pass = md5($pass);
		$sql = "SELECT * FROM users WHERE email='$address'";
		$result = mysqli_query($conn, $sql);
		if(mysqli_num_rows($result) > 0){
			echo(json_encode(array("error" => "Email already exist")));
			exit();
		}
		$sql = "SELECT * FROM users WHERE username='$username'";
		$result = mysqli_query($conn, $sql);
		if(mysqli_num_rows($result) > 0){
			echo(json_encode(array("error" => "Username already exist")));
			exit();
		} else{
			$sql_input = "INSERT INTO users(username, password, birthday, gender, email) VALUES('$username', '$pass', '$birthday', '$gender', '$address')";
			$res = mysqli_query($conn, $sql_input);
			if($res){
				echo(json_encode(array("success" => "Your account has been created")));
				exit();
			}
			else{
				echo(json_encode(array("error" => "Unknown Error")));
				exit();
			}
		}
	}
} else {
	echo(json_encode(array("error" => "Unknown Error")));
	exit();
}

?>