import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import $ from "jquery"
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

function SignIn() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    let alertMS = false;
    console.log("LOGIN : " + searchParams);
    if(searchParams == "login=true"){
        console.log("LOGIN NA MESTE");
        alertMS = true;
    } else {
        alertMS = false;
    }

    function ResultData(data) {
		var myData = JSON.parse(data);
		if(myData.error){
			setError(myData.error);
		} else if(myData.success) {
            setError("SUCCESS");
            navigate("/");
        }
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            xhrFields: {
                withCredentials: true
            },
            data: form.serialize(),
            success(data) {
                ResultData(data);
            },
        });
    };

    return(
    <div className="main-content">
        {alertMS ? <Alert variant="danger" className="text-center">
        Please <b>Sign In</b> to open your <b>Profile</b> page</Alert>
        :
        false}
		<Form action="http://localhost:8000/login.php" method="post" onSubmit={(event) => handleSubmit(event)}>
			<Container className="fixed-lg border rounded mt-5 p-5 bg-light sm-top">
            <h1 className="text-center mb-4">Sign In</h1>
            {error ? <p class="err mx-5 py-1 mb-4 bg-danger text-center text-white h5">{error}</p> : false}
			<div className="Email-Address ml-5 mr-5 mb-4">
				<div className="mb-1 ">Email Address</div>
				<div className="form-floating">
  					<Form.Control type="email" name="email" placeholder="Name@example.com"/>
				</div>
			</div>

			<div className="Password ml-5 mr-5 mb-4">
				<div className="mb-1 ">Password</div>
				<div className="form-floating">
  					<Form.Control type="password" name="password" placeholder="Password"/>
				</div>
			</div>

			<Button variant="success" type="submit" id="signin" className="ml-5 mr-2">Sign In</Button>
			<Link to={'/register'}><Button variant="secondary">Register</Button></Link>
            </Container>
        </Form>
	</div>
    );
}

export default SignIn;