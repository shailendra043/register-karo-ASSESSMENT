// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/logo.png"

// const Header = () => {
//   return (
//     <Navbar bg="white" expand="lg" className="shadow-sm sticky-top text-dark">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand href="#">
//           <img
//             src={logo}
//             alt="Register Karo"
//             height="40"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         {/* Navbar Toggle */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto text-dark">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#services">Our Services</Nav.Link>
//             <Nav.Link href="#blog">Blog</Nav.Link>
//             <Nav.Link href="#contact">Contact Us</Nav.Link>
//             <Nav.Link href="#about">About Us</Nav.Link>
//             <Nav.Link
//               href="#talk"
//               className="btn-talk text-white ms-3 px-3"
//             >
//               Talk An Expert
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top text-dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Register Karo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-dark">
            <Nav.Link href="#home">Home</Nav.Link>

            {/* Dropdown for Our Services */}
            <NavDropdown title="Our Services" id="services-dropdown">
              <NavDropdown.Item href="#annual-compliance">
                Annual Compliance
              </NavDropdown.Item>
              <NavDropdown.Item href="#payroll-services">
                Payroll Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#company-formation">
                Company Formation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tax-filings">Tax Filings</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>

            {/* Search Icon */}
            <Form className="d-flex align-items-center me-3">
              <FaSearch style={{ cursor: "pointer", marginRight: "8px" }} />
            </Form>

            {/* Talk An Expert Button */}
            <Nav.Link
              href="#talk"
              className="btn btn-talk text-white ms-3 px-3"
            >
              Talk An Expert
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

