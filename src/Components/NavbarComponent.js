import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoIcon from '../assests/logoIcon.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#161d86', boxShadow: '0 0 20px 0 skyblue' }}>
            <Container>
                <Navbar.Brand className='box-shadow' style={{ padding: '0' }}>
                    <Nav.Link as={NavLink} to='/' >
                        <img
                            src={logoIcon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            style={{ borderRadius: '10px' }}
                        />
                        {" "}
                        PhotosApp
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='box-shadow' />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/' className='box-shadow' >Photos</Nav.Link>
                        <Nav.Link as={NavLink} to='/about' className='box-shadow' >About Us</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact' className='box-shadow' >Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to='/signup' className='box-shadow' >Sign Up</Nav.Link>
                        <Nav.Link as={NavLink} to='/login' className='box-shadow' >Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent