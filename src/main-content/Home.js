import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function Home() {
    return(
        <div class="main-content mx-4 border border-top-0 border-dark rounded-bottom py-2 px-3">
		    <div class="mx-4">
			<h2 class="text-center mb-3 mt-2">
				Active Survey
			</h2>
			<Table hover className="fs-xs">
				<thead>
					<tr class="text-center">
      					<th scope="col">Name</th>
      					<th scope="col">Description</th>
      					<th scope="col"></th>
    				</tr>
				</thead>
  				<tbody id="main">
    				<tr>
      					<th scope="row">Name of the sculpture in the central park</th>
      					<td>Discription Discription DiscriptionDi scriptio DiscriptionDiscrip tionDiscr iptionD iscript ionDiscr iptionDiscri ptionDiscriptio nDiscriptionDiscriptio nDiscription</td>
      					<td class="text-center pt-3">
      						<Button variant="success" className="mx-0" onclick="location.href='vote.php'">
      							Vote
      						</Button>
      					</td>
    				</tr>
    				<tr>
      					<th scope="row">Street name</th>
      					<td>Change street name from Tutunika in Vinnitsa</td>
      					<td class="text-center pt-3">
      						<Button variant="success" class="mx-0" onclick="location.href='vote.php'">
      							Vote
      						</Button>
      					</td>
    				</tr>
    				<tr>
      					<th scope="row">Change metro name</th>
      					<td>Change metro name (Kyiv, Polytech street)</td>
      					<td class="text-center pt-3">
      						<Button variant="success" class="mx-0" onclick="location.href='vote.php'">
      							Vote
      						</Button>
      					</td>
    				</tr>
  				</tbody>
			</Table>
		    </div>
	    </div>
    )
}

export default Home;