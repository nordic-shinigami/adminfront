import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; position: "sticky" ; height :30px }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1em;
    margin-left : 40em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;

export const Footer = () => (
  <Styles>
    <Navbar expand="lg" >
      <Navbar.Brand href="http://www.iiitm.ac.in/index.php/" target="_blank">ABV-IIITM © {new Date().getFullYear}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="#">SignOut</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)