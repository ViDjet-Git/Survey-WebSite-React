import './NavBar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { event } from 'jquery'

function NavBar() {
    const [expanded, setExpanded] = useState(false);

	const delay = ms => new Promise(
		resolve => setTimeout(resolve, ms)
	);

	return(
        <Navbar expanded={expanded} expand="lg" sticky="top" bg="dark" className="mx-4 rounded-top py-0 mt-3 sm-top">
  		<Container fluid>
    		<NavbarBrand className="d-flex ml-2 mr-0 py-2">
				<Link to={'/'} className="home d-flex text-decoration-none">
    			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard2-check-fill text-light mt-1 d-none d-lg-block" viewBox="0 0 16 16">
  				<path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  				<path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
				</svg>
    			<div className="text-light h3 fs-lg text-decoration-none">Home</div>
				</Link>
			</NavbarBrand>
    		<Nav className="d-lg-none">
  			<NavbarBrand className="d-flex create" href="create.php">
    			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard2-plus-fill text-success mx-1 fs-lg" viewBox="0 0 16 16">
  				<path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  				<path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"/>
				</svg>
    		</NavbarBrand>
  			</Nav>
    		<Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} 
			onBlur={async event => {await delay(300); setExpanded(false);}}
			aria-controls="navbarSupportedContent" id="myToggle" className="toggle border border-0">
      			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-filter-right text-light" viewBox="0 0 16 16">
  				<path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
				</svg>
    		</Navbar.Toggle>
    		<Navbar.Collapse id="navbarSupportedContent">
      			<Nav className="me-auto mb-2 mb-lg-0">
          			<Link onClick={() => setExpanded(false)} className="text-light h4 mt-1 ml-3 text-decoration-none" to="/profile">Profile</Link>
					<Link onClick={() => setExpanded(false)} className="text-light h4 mt-1 ml-3 text-decoration-none" to="/info">Info</Link>
          			<Link onClick={() => setExpanded(false)} className="sign-in-btn text-success h4 mt-1 ml-3 text-decoration-none" to="/sign">Sign In</Link>
      			</Nav>
  			</Navbar.Collapse>
    	</Container>
  		<Nav className="d-none d-lg-block">
  			<Navbar.Brand className="d-flex create" href="create.php">
    			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clipboard2-plus-fill text-success mt-1 mx-1" viewBox="0 0 16 16">
  				<path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  				<path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"/>
				</svg>
    			<div className="text-light h4">Create survey</div>
    		</Navbar.Brand>
  		</Nav>
	</Navbar>
    )
}

 export default NavBar;