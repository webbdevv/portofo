import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'
function Navigation() {
    return (
        <div>
            <Navbar expand="lg" bg="dark" className="navbar-dark fixed-top nav_styles">
                <Navbar.Brand href="/">Kyle Xu 2021</Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="https://github.com/webbdevv">Projects @GitHub</Nav.Link>
                        <Nav.Link href="/res.pdf">Resume</Nav.Link>
                        <Nav.Link href="/technical">Technical</Nav.Link>
                        <Nav.Link href="#travel" disabled="true">Travel???</Nav.Link>
                    </Nav>
                <Nav.Link className="text-muted" href="/contact">Contact Me</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation