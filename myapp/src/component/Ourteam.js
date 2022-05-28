import React, { Component } from 'react'
import {Container, Row, Col, Image,Navbar,Nav} from "react-bootstrap"
import imageteam1 from './images/image-team1.jpg'
import imageteam2 from './images/image-team2.jpg'
import imageteam3 from './images/image-team3.jpg'
import imageteam4 from './images/image-team4.jpg'
import './Ourteam.css'
class Ourteam extends Component {
    render() {
        return (
            <div className="team-container">
                <Container >
                <Row>
                    <Col><p className="header-team">Our Team</p></Col>
                </Row>
                
                <Row className="text-center">
                    <Col className="box-container">
                        <div className="content-box">
                            <p className="namesofteam">John Doe</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Navbar>
                                <Nav >
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-twitter"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-instagram"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-facebook-f"/></Nav.Link>  
                                </Nav>
                           </Navbar>
                        </div>
                        <div className="image-box">
                            <Image src={imageteam1} fluid/>
                        </div>
                    </Col>
                    <Col className="box-container">
                        <div className="image-box">
                            <Image src={imageteam2} fluid/>
                        </div>
                        <div className="content-box">
                            <p className="namesofteam">Mike Ross</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Navbar>
                                <Nav >
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-twitter"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-instagram"/></Nav.Link>  
                                    <Nav.Link className="team-links"  href="/AboutUs"><i className="fab fa-facebook-f"/></Nav.Link>  
                                </Nav>
                           </Navbar>
                        </div>
                    </Col>              
                    <Col className="box-container">

                        <div className="content-box">
                            <p className="namesofteam">John Doe</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Navbar>
                                <Nav >
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-twitter"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-instagram"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-facebook-f"/></Nav.Link>  
                                </Nav>
                           </Navbar>
                        </div>
                        <div className="image-box">
                        <Image src={imageteam3} fluid/>
                        </div>
                    </Col>     
                    <Col className="box-container">
                        <div className="image-box">
                        <Image src={imageteam4} fluid/>
                        </div>
                        <div className="content-box">
                            <p className="namesofteam">Mike Ross</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Navbar>
                                <Nav >
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-twitter"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-instagram"/></Nav.Link>  
                                    <Nav.Link className="team-links" href="/AboutUs"><i className="fab fa-facebook-f"/></Nav.Link>  
                                </Nav>
                           </Navbar>
                        </div>
                    </Col>
            </Row>
                </Container>
            </div>
        )
    }
}
export default Ourteam;