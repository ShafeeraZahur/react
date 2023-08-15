// import React from 'react';
// import Logo from'../img/logo.png'




// function Navbarnew(props) {

//    return (
//     <nav className="navbar navbar-expand-md navbar-light">
//     <div className="container-md">
//       <a className="navbar-brand" href="#none"><img src={Logo} alt="here logo" className='img-thumbnail bg-dark img-fluid w-50'  /></a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="mynavbar">
//         <ul className="navbar-nav  text-start">
//           <li className="nav-item">
//             <a className="nav-link" href="#none">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#none">About</a>
//           </li>
//           <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            Shop
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#none">All Products</a></li>
//             <li><a className="dropdown-item" href="#none">Product Items</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#none">New Arrivals</a></li>
//           </ul>
//         </li>
              
//         </ul>
//         <form className="d-flex mt-1 ms-auto">
//           <button className="btn btn-outline-dark" type="button"><i className="fa-sharp fa-solid fa-cart-arrow-down pe-1"></i>Cart
//           <span className="badge bg-dark ms-1 rounded-circle">{props.cartValue}</span></button>
//         </form>
//       </div>
//     </div>
//   </nav>
//   );
// }

// export default Navbarnew;
// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import cartimage from '../Image/cartimage.jpg';


function NavBar(props) {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/1">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2">Popular Items</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3">New Arrivals</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Button variant="outline-dark" size="lg"> 🛒  Cart <span className="badge bg-dark ms-1 rounded-circle">{props.cartValue}</span></Button>
                                
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </Navbar>
        </>

    );
}
export default NavBar;