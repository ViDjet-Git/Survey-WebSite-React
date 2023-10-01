import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom'
import $ from "jquery"
import { useState } from "react";
import "./css/Register.css"

function Register() {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	function ResultData(data) {
		var myData = JSON.parse(data);
		if(myData.error){
			setError(myData.error);
			setSuccess("");
		} else if(myData.success){
			setSuccess(myData.success);
			setError("");
		}
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                ResultData(data);
            },
        });
    };
    
    return(
    <div className="main-content">
		<Form action="http://localhost:8000/register.php" method="post" 
        onSubmit={(event) => handleSubmit(event)}>
			<Container className="fixed-lg border rounded mt-5 p-5 bg-light sm-top">
			<h1 className="text-center mb-4">Registration</h1>
			{error ? <p class="err mx-5 py-1 mb-4 bg-danger text-center text-white h5">{error}</p> : false}
			{success ? <p class="err mx-5 py-1 mb-4 bg-success text-center text-white h5">{success}</p> : false}
			<div className="Email Address ml-5 mr-5 mb-4">
				<div className="mb-1 ">Email Address</div>
				<div className="form-floating">
  					<Form.Control name="email" type="email" placeholder="name@example.com"/>
				</div>
			</div>

			<div className="UserName ml-5 mr-5 mb-4">
				<div className="mb-1 ">UserName</div>
				<div className="form-floating">
  					<Form.Control name="username" type="text" placeholder="Username"/>
				</div>
			</div>

			<div className="Birthday/Gender row px-5">
				<div className="Birthday mb-4 col-sm-12 col-md-6">
					<div className="mb-1">Date of Birth</div>
					<div className="form-floating">
  						<Form.Control name="birthday" type="date" className="py-1" placeholder="birthday"/>
					</div>
				</div>

				<div className="Gender mb-4 col-sm-12 col-md-6">
  					<div className="mb-1">Gender</div>
  					<Form.Select name="gender" className="form-control">
    					<option>Your Gender</option>
    					<option>Male</option>
    					<option>Female</option>
    					<option>Other</option>
  					</Form.Select>
				</div>
			</div>

			<div className="Password ml-5 mr-5 mb-4">
				<div className="mb-1 ">Password</div>
				<div className="form-floating">
  					<Form.Control name="password" type="password" placeholder="Password"/>
				</div>
			</div>

			<div className="Repeat Password ml-5 mr-5 mb-4">
				<div className="mb-1 ">Repeat Password</div>
				<div className="form-floating">
  					<Form.Control name="re_password" type="password" placeholder="Password"/>
				</div>
			</div>

			<Button variant="success" id="reg" type="submit" className="ml-5 mr-2">Register</Button>
			<Link to={'/sign_in'}><Button variant="secondary" id="sign">Sign In</Button></Link>
			</Container>
		</Form>
	</div>
    );
}

export default Register;