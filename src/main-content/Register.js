import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import { useState } from "react";

function Register() {
	const [result, setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
    
    return(
    <div className="main-content">
		<form action="http://localhost:8000/server.php" method="post" className="fixed-lg container border rounded mt-5 p-5 bg-light sm-top" 
        onSubmit={(event) => handleSubmit(event)}>
			<h1 className="text-center mb-4">Registration</h1>
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
			<Button variant="secondary" id="sign" onclick="">Sign In</Button>
		</form>
		<h5>{result}</h5>
	</div>
    );
}

export default Register;