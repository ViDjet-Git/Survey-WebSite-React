function Vote() {
    return(
    <div class="main-content mx-4 border border-top-0 border-dark rounded-bottom py-2 px-3">
		<div class="mx-4">
			<div class="d-flex justify-content-center">
				<h2 class="mb-0 mt-2" id="name">
					Survey Name
				</h2>
			</div>
			<hr></hr>
			<div>
				<h4>Description</h4>
				<p id="description" class="description-vote fs-sm">
					Descrip tionDe scriptionDescript ionDescriptionDescriptionDe scriptio nDescripti o nDescript ionDescr iptionDe  criptionDescr ipti onDescriptio nDescr iptionDescriptio n Descr iptio nDescription DescriptionDescri ptio nDescri tionDes riptio Descrip tionD esc ription
				</p>
			</div>
			<hr></hr>
			<div>
				<h4 class="mb-3 mt-5">Choose the option that seems best to you</h4>
				<table class="table table-hover fs-sm mb-0">
				<thead>
					<tr>
      					<th scope="col">#</th>
      					<th scope="col" class="text-center">Variants</th>
      					<th scope="col"></th>
    				</tr>
				</thead>
  				<tbody>
    				<tr>
      					<th scope="row">1</th>
      					<td class="text-center var">Var1</td>
      					<td class="text-center">
      						<input class="form-check-input rd-size" type="radio" name="Radios" id="Radios1" value="option1"></input>
      					</td>
    				</tr>
    				<tr>
      					<th scope="row">2</th>
      					<td class="text-center var">Var2</td>
      					<td class="text-center">
      						<input class="form-check-input rd-size" type="radio" name="Radios" id="Radios2" value="option1"></input>
      					</td>
    				</tr>
  				</tbody>
				</table>
			<hr class="border mb-4 mt-0"></hr>
			</div>
			<button type="button" class="btn btn-success mb-3" onclick="location.href='home.php'">Confirm Vote</button>
		</div>
	</div>
    );
}

export default Vote;