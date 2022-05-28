import React, { Component } from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap';
import './Contactus.css'
class Contactus extends Component {
    render() {
        return (

                <React.Fragment>
                <NavBar/>
                <div className="contactus-container">
                <Container>
                    <Row>
                        <Col lg={9} >
                            <div className="contactus-container-col1">
                                <form name=" contact" action="POST">
                                    <h4>contact us</h4>
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>     
                                    <input type="text" placeholder="Subject"/>
                                    <textarea placeholder="Feedback"></textarea>
                                    <input  className="contactus-container-col1-btn" type="submit" value = "Send"/>
                                </form> 
                             </div>
                        </Col>
                        <Col lg={3} >
                            <div className="contactus-container-col2">
                            <h5><i className="fas fa-map-marker-alt"/> &nbsp; company address</h5>
                            <p>Demietta, Cairo </p>
                            <h5><i class="fas fa-phone-alt"/> &nbsp; call us</h5>
                            <p>+20 010564723415614</p>
                            <h5> <i className="fas fa-envelope"/> &nbsp; email us</h5>
                            <p>example@mail.com</p>
                            <h5><i class="fas fa-headset"/> &nbsp; customer support</h5>
                            <p>info@support.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                <Footer/>
                </React.Fragment>

        )
    }
}
export default Contactus;