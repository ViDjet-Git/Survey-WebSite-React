import { useState } from "react";
import Table from "react-bootstrap/Table"
import { useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';

function Profile(props) {
	const [username, setUsername] = useState("error");
	const [email, setEmail] = useState("error");
	const [gender, setGender] = useState("error");
	const [birthday, setBirthday] = useState("error");

	let log = props.loged['log'];
	let navigate = useNavigate();
	let location = useLocation();

  	React.useEffect(() => {
		if(log) {
			setProfileInfo();
		} else {
			navigate("/sign_in?login=true");
		}
  	}, [location]);

	function setProfileInfo() {
		setUsername(props.getInfo("username"));
		setEmail(props.getInfo("email"));
		setGender(props.getInfo("gender"));
		setBirthday(props.getInfo("birthday"));
	}

    return(
	<div className="main-content mx-4 border border-top-0 border-dark rounded-bottom py-2 px-3">
		<div className="mx-4">
			<h2 className="text-center mb-3 mt-2">
				Profile
			</h2>
			<Table hover className="fs-sm">
  				<tbody>
    				<tr>
      				<th scope="row">UserName:</th>
      				<td id="nickname">{username}</td>
    				</tr>
    				<tr>
      				<th scope="row">Email:</th>
      				<td id="email">{email}</td>
    				</tr>
    				<tr>
      				<th scope="row">Gender</th>
      				<td id="gender">{gender}</td>
    				</tr>
    				<tr>
      				<th scope="row">Birthday</th>
      				<td id="birthday">{birthday}</td>
    				</tr>
  				</tbody>
			</Table>
		</div>
	</div>
    );
}

export default Profile;