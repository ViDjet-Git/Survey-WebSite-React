import "./css/Create.css"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Table from 'react-bootstrap/Table';

function Create() {
    return(
    <div className="main-content mx-4 border border-top-0 border-dark rounded-bottom py-2 px-3">
		<div className="mx-4">
			<div className="d-flex justify-content-center mb-3 mt-2">
				<h2>
					Survey Creating
				</h2>
			</div>
			<div className="mb-4">
				<InputGroup className="mb-4 fs-xs">
  					<InputGroup.Text id="enter-name" className="input-group-text w-15"><h5 className="mb-0 fs-sm">Enter Name</h5></InputGroup.Text>
  					<Form.Control id="name" placeholder="Input name of vote here..." aria-describedby="enter-name"></Form.Control>
				</InputGroup>
				<InputGroup className="mb-4 fs-xs">
  					<InputGroup.Text className="input-group-text w-15"><h5 className="mb-0 fs-sm">Enter Description</h5></InputGroup.Text>
  					<Form.Control as="textarea" id="description" aria-label="With textarea" placeholder="Describe survey here..."></Form.Control>
				</InputGroup>
			</div>
			<Table className="fs-sm mb-0">
				<thead>
					<tr>
      					<th scope="col">#</th>
      					<th scope="col" className="text-center">Variants</th>
    				</tr>
				</thead>
  				<tbody id="mainbody">
    				<tr id="1">
      					<th scope="row">1</th>
      					<td className="text-center">
      						<Form.Control as="textarea" id="var1" className="fs-sm" aria-label="With textarea" placeholder="Input variant here..."></Form.Control>
      					</td>
    				</tr>
    				<tr id="2">
      					<th scope="row">2</th>
      					<td className="text-center">
      						<Form.Control as="textarea" id="var2" className="fs-sm" aria-label="With textarea" placeholder="Input variant here..."></Form.Control>
      					</td>
    				</tr>
    				<tr className="to-do">
      					<td colspan="3">
      						<Button id="add" variant="success" className="d-flex mx-auto px-2">
      							<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-plus-lg mt-1 mr-1" viewBox="0 0 16 16">
  								<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
								</svg>
      							<div>Add</div>
      						</Button>
      					</td>
    				</tr>
  				</tbody>
			</Table>
			<hr className="border mt-0"></hr>
			<Button id="create" variant="success" className="mb-2">Create</Button>
		</div>
	</div>
    );
}

export default Create;