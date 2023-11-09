import React from "react";
import './style.css'

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm">
                <div class="container navbar-header">
                    <div class="logo"></div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="offcanvas offcanvas-end sidebar" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="navbar-nav ms-auto nav-link">
                            <a href="#Services">Our Services</a>
                            <a href="#WhyUs">Why Us</a>
                            <a href="#Testimonial">Testimonial</a>
                            <a href="#FAQ">FAQ</a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation

// import React from "react";
// import './style.css'
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// const Navigation = () => {
//     return (
//         <Navbar expand="sm" className="bg-body-tertiary mb-3">
//         <Container fluid>
//           <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//           <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
//           <Navbar.Offcanvas
//             id="offcanvasNavbar-expand-sm"
//             aria-labelledby="offcanvasNavbarLabel-expand-sm"
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link href="#action1">Home</Nav.Link>
//                 <Nav.Link href="#action2">Link</Nav.Link>
//                 <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand-sm">
//                   <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                   <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     )
// }

// export default Navigation