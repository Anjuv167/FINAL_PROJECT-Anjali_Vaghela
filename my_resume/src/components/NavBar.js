import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar } from 'react-bootstrap';


function NavBar() {
    
      return (
        <Navbar className="container">
          <Nav>
            <Nav.Link href="#introduction" style={{margin:"25px"}}>
              Introduction
            </Nav.Link>
            <Nav.Link href="#educations" style={{margin:"25px"}}>
              Education
            </Nav.Link>
            <Nav.Link href="#experiences" style={{margin:"25px"}}>
              Experience
            </Nav.Link>
            <Nav.Link href="#skills" style={{margin:"25px"}}>
              Skill
            </Nav.Link>
            <Nav.Link
            href="#contact" style={{margin:"25px"}}>
            Contact
            </Nav.Link>
        </Nav>
    </Navbar>
    );
  }

export default NavBar;