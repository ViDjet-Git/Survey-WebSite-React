import "./css/Create.css"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import $ from "jquery"

const initialColumns = [
(<tr id="1" key={1}>
	<th scope="row">1</th>
	<td className="text-center">
		<Form.Control name="var1" as="textarea" className="fs-sm" aria-label="With textarea" placeholder="Input variant here..."></Form.Control>
	</td>
</tr>),
(<tr id="2" key={2}>
    <th scope="row">2</th>
    <td className="text-center">
      		<Form.Control name="var2" as="textarea" className="fs-sm" aria-label="With textarea" placeholder="Input variant here..."></Form.Control>
    </td>
</tr>)];

function Create() {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [columns, setColumns] = useState(initialColumns);

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

	const addColumn = () => {
		let index = columns.length;
		index++;
		const prevCols = [...columns];
		prevCols.push(
			<tr id={index} key={index}>
    			<th scope="row">{index}</th>
    			<td className="text-center">
      				<Form.Control name={"var" + index} as="textarea" className="fs-sm" aria-label="With textarea" placeholder="Input variant here..."></Form.Control>
    			</td>
			</tr>
		);
		setColumns(prevCols);
	};

	const deleteColumn = () => {
		const prevCols = [...columns];
		prevCols.pop();
		setColumns(prevCols);
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
			xhrFields: {
				withCredentials: true
			},
            success(data) {
                ResultData(data);
            },
        });
    };

    return(
    <div className="main-content mx-4 border border-top-0 border-dark rounded-bottom py-2 px-3">
		<Form action="http://localhost:8000/create_survey.php" method="post" 
        onSubmit={(event) => handleSubmit(event)} className="mx-4">
			<div className="d-flex justify-content-center mb-3 mt-2">
				<h2>
					Survey Creating
				</h2>
			</div>
			{error ? <p class="err py-1 mb-4 bg-danger text-center text-white h5">{error}</p> : false}
			{success ? <p class="err py-1 mb-4 bg-success text-center text-white h5">{success}</p> : false}
			<div className="mb-4">
				<InputGroup className="mb-4 fs-xs">
  					<InputGroup.Text id="enter-name" className="input-group-text w-15"><h5 className="mb-0 fs-sm">Enter Name</h5></InputGroup.Text>
  					<Form.Control name="s_name" id="name" placeholder="Input name of vote here..." aria-describedby="enter-name"></Form.Control>
				</InputGroup>
				<InputGroup className="mb-4 fs-xs">
  					<InputGroup.Text className="input-group-text w-15"><h5 className="mb-0 fs-sm">Enter Description</h5></InputGroup.Text>
  					<Form.Control as="textarea" name="s_description" aria-label="With textarea" placeholder="Describe survey here..."></Form.Control>
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
    				{columns}
    				<tr className="to-do">
      					<td colSpan="2" className="text-center">
      						<Button id="add" variant="success" className="px-2 mr-5" onClick={addColumn}>
      							<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-plus-lg mb-1 mr-1" viewBox="0 0 16 16">
  								<path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
								</svg>
      							<span>Add</span>
      						</Button>
							{columns.length >= 3 ?
							<Button id="add" variant="success" className="px-2" onClick={deleteColumn}>
							<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-dash mb-1 mr-1" viewBox="0 0 16 16">
  								<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
							</svg>
      							<span>Delete</span>
      						</Button>
							:
							false}
      					</td>
    				</tr>
  				</tbody>
			</Table>
			<hr className="border mt-0"></hr>
			<Button type="submit" variant="success" className="mb-2">Create</Button>
		</Form>
	</div>
    );
}

export default Create;