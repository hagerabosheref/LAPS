import React, { Component } from 'react'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Container>
                    <Row className="text-center">
                        <Col lg={12} className="footer-logo">LAPS</Col>
                        <Col lg={12} className="footer-col2">
                        <h6>subscribe now</h6>
                        <h4>get our updates always fast</h4>
                        <h6>your personal data will always be safe</h6>
                        <div className="footer-col2-data" >
                            <form>
                                <input type="text" placeholder="Your email address"/>
                                <button type="submit">
                                    <i className="fas fa-chevron-right"/>
                                </button>
                            </form>
                        </div>
                        </Col>
                        <Col lg={12}>
                        <Navbar>
                            <Nav className="footer-links-content" >
                                <Nav.Link className="footer-links" href="/Home"><i className="fab fa-twitter"/></Nav.Link>  
                                <Nav.Link className="footer-links" href="/Home"><i className="fab fa-instagram"/></Nav.Link>  
                                <Nav.Link  className="footer-links" href="/Home"><i className="fab fa-facebook-f"/></Nav.Link>  
                           </Nav>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Footer;