<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-COntrol-Allow-Methods: POST");
header("Access-COntrol-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if(isset($_COOKIE['PHPSESSID'])) {
	session_id($_COOKIE['PHPSESSID']);
    session_start();
	if(!isset($_SESSION['id'])){ 
		echo(json_encode(array("error" => "Register please")));
		exit();
	}

    include "db_connect.php";

    if(isset($_POST['s_name']) && isset($_POST['s_description']) && isset($_POST['var1']) && 
	isset($_POST['var2'])){
	
	    $s_name = $_POST['s_name'];
	    $s_desc = $_POST['s_description'];
        $vars = [];
        $way = 'var';
        $index = 1;
        do{
            array_push($vars, $_POST[$way.strval($index)]);
            $index++;
        }while(isset($_POST[$way.strval($index)]));

        if(empty($s_name)) {
            echo(json_encode(array("error" => "Survey Name empty")));
            exit();
        } else if(empty($s_desc)){
            echo(json_encode(array("error" => "Description empty")));
            exit();
        } else if(empty($vars[0])){
            echo(json_encode(array("error" => "Enter first variant")));
            exit();
        } else if(empty($vars[1])){
            echo(json_encode(array("error" => "Enter second variant")));
            exit();
        } else{
            $sql = "SELECT * FROM surveys WHERE survey_name='$s_name'";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0){
                echo(json_encode(array("error" => "Survey Name already exist")));
                exit();
            } else{
                //adding New survey to surveys table
                $sql_input = "INSERT INTO surveys(survey_name, survey_description) VALUES('$s_name', '$s_desc')";
                $res = mysqli_query($conn, $sql_input);
                if($res){
                    //finding id of created survey
                    $sql_survey_id = "SELECT survey_id FROM surveys WHERE survey_name='$s_name'";
                    $res_id = mysqli_query($conn, $sql_survey_id);
                    $survey_id = mysqli_fetch_row($res_id)[0] ?? false;
                    if(!$survey_id){
                        echo(json_encode(array("error" => "Unknown Error getting survey id")));
                        exit();
                    }
                    //adding variants to surveys_variants table
                    foreach($vars as $variant){
                        $sql_input_var = "INSERT INTO surveys_variants(survey_id, variants) VALUES('$survey_id', '$variant')";
                        $res_var = mysqli_query($conn, $sql_input_var);
                        if(!$res_var){
                            echo(json_encode(array("error" => "Unknown Error while adding variants")));
                            exit();
                        }
                    }
                    //adding survey_id and user_id to users_surveys table
                    $user_id = $_SESSION['id'];
                    $sql_input_user_survey = "INSERT INTO users_surveys(user_id, survey_id) VALUES('$user_id', '$survey_id')";
                    $res_input_user_survey = mysqli_query($conn, $sql_input_user_survey);
                    if($res_input_user_survey) {
                        echo(json_encode(array("success" => "Survey Created")));
                        exit();
                    } else {
                        echo(json_encode(array("error" => "Unknown Error adding user and survey to users_surveys table")));
                        exit();
                    }
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

} else {
    echo(json_encode(array("error" => "Register please")));
	exit();
}

?>