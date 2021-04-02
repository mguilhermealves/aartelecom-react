import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { 
    Link,
    withRouter
} from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.jpg"
                        width="80"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink as={Link} to="/">Home</NavLink>
                        <NavLink as={Link} to="/quem-somos">Quem Somos</NavLink>
                        <NavLink as={Link} to="/manual">Manual</NavLink>
                        <NavLink as={Link} to="/contato">Contato</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Menu);