import Table from "react-bootstrap/Table"

function Profile() {
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
      				<td id="nickname">Nickname</td>
    				</tr>
    				<tr>
      				<th scope="row">Email:</th>
      				<td id="email">name@example.com</td>
    				</tr>
    				<tr>
      				<th scope="row">Gender</th>
      				<td id="gender">Male/Female/Other</td>
    				</tr>
    				<tr>
      				<th scope="row">Birthday</th>
      				<td id="birthday">00.00.0000</td>
    				</tr>
  				</tbody>
			</Table>
		</div>
	</div>
    );
}

export default Profile;