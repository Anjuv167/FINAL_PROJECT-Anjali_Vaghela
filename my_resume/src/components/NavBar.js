import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar } from 'react-bootstrap';
import '../Styles/resume.css';

function NavBar() {
    
      return (
        <Navbar className="container" style={{}}>
          <Nav>
            <Nav.Link href="#introduction" style={{margin:"28px"}}>
              Introduction
            </Nav.Link>
            <Nav.Link href="#educations" style={{margin:"28px"}}>
              Education
            </Nav.Link>
            <Nav.Link href="#experiences" style={{margin:"28px"}}>
              Experience
            </Nav.Link>
            <Nav.Link href="#skills" style={{margin:"28px"}}>
              Skill
            </Nav.Link>
            <Nav.Link
            href="#contact" style={{margin:"28px"}}>
            Contact
            </Nav.Link>
        </Nav>
    </Navbar>
    );
  }

export default NavBar;