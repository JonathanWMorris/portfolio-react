import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function Navigation() {
    return (
        <Navbar bg="light" expand="md" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand bsPrefix="title">Jonathan Morris</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trippy">
                            <Nav.Link>Trippy</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;