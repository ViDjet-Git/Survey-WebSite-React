import "./css/Vote.css"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import { FormCheck } from "react-bootstrap";

function Vote() {
    return(
    <div className="main-content mx-4 border border-top-0 border-dark rounded-bottom py-2 px-3">
		<div className="mx-4">
			<div className="d-flex justify-content-center">
				<h2 className="mb-0 mt-2" id="name">
					Survey Name
				</h2>
			</div>
			<hr></hr>
			<div>
				<h4>Description</h4>
				<p id="description" className="description-vote fs-sm">
					Descrip tionDe scriptionDescript ionDescriptionDescriptionDe scriptio nDescripti o nDescript ionDescr iptionDe  criptionDescr ipti onDescriptio nDescr iptionDescriptio n Descr iptio nDescription DescriptionDescri ptio nDescri tionDes riptio Descrip tionD esc ription
				</p>
			</div>
			<hr></hr>
			<div>
				<h4 className="mb-3 mt-5">Choose the option that seems best to you</h4>
				<Table hover className="fs-sm mb-0">
				<thead>
					<tr>
      					<th scope="col">#</th>
      					<th scope="col" className="text-center">Variants</th>
      					<th scope="col"></th>
    				</tr>
				</thead>
  				<tbody>
    				<tr>
      					<th scope="row">1</th>
      					<td className="text-center var">Var1</td>
      					<td className="text-center">
      						<Form.Check className="rd-size" type="radio" name="Radios" id="Radios1" value="option1"></Form.Check>
      					</td>
    				</tr>
    				<tr>
      					<th scope="row">2</th>
      					<td className="text-center var">Var2</td>
      					<td className="text-center">
      						<Form.Check className="rd-size" type="radio" name="Radios" id="Radios2" value="option1"></Form.Check>
      					</td>
    				</tr>
  				</tbody>
				</Table>
			<hr className="border mb-4 mt-0"></hr>
			</div>
			<Button variant="success" className="mb-3" onclick="">Confirm Vote</Button>
		</div>
	</div>
    );
}

export default Vote;