import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <div>
            <Navbar expand="lg" bg="dark" className="navbar-dark fixed-top">
                <Navbar.Brand href="#home">Kyle Xu 2021</Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Projects @GitHub</Nav.Link>
                        <Nav.Link href="#res">Resume</Nav.Link>
                        <Nav.Link href="#travel">Travel???</Nav.Link>
                    </Nav>
                <Nav.Link className="text-muted" href="#contact">Contact Me</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation