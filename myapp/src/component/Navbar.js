import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Navbar.css'

class NavBar extends Component {

    render() {
        return (
            <div className="navbar-container ">
                <Navbar className="nav-content">
                    <Navbar.Brand href="/Home">LAPS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse  className="justify-content-end" id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            activeKey={window.location.pathname}
                            >
                            <Nav.Link   href="/Home">Home</Nav.Link>
                            <Nav.Link   href="/AboutUs">AboutUs</Nav.Link>
                            <Nav.Link   href="/ContactUs">ContactUs</Nav.Link>
                            <NavDropdown title={<i className="fa fa-search"/>} id="navbarScrollingDropdown">
                               <input type="text" placeholder="Search...."/>
                            </NavDropdown>
                            <NavDropdown title={<i className="far fa-user"/>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/SignUp">Sign up</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/LogIn">Log in</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/Cart"><i className="fas fa-shopping-cart"/></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBar;