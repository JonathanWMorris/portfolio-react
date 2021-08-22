import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

function Navigation() {
    return (
        <Navbar bg="light" expand="md" variant="light">
            <Container>
                <Navbar.Brand href="/" bsPrefix="title">Jonathan Morris</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/trippy">Trippy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;