import React from "react";

// Component Imports
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
    return (
        <Navbar bg="light" expand="md" variant="light">
            <Container>
                <Navbar.Brand bsPrefix="title">Jonathan Morris</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="iOS Development" id="nav-dropdown">
                            <LinkContainer to="/trippy">
                                <NavDropdown.Item bsPrefix="">Trippy Travel App</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/web-development">
                            <Nav.Link>Web Development</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Robotics" id="nav-dropdown">
                        <LinkContainer to="/mechanical">
                            <NavDropdown.Item bsPrefix="">Mechancial</NavDropdown.Item>
                        </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;