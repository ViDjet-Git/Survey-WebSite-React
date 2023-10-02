<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if(isset($_COOKIE['PHPSESSID'])){
    session_id($_COOKIE['PHPSESSID']);
    session_start();

    setcookie('PHPSESSID', '', -3600, '/cv');
    session_unset();
    session_destroy();
}
session_write_close();
?>