import React, { Component } from 'react'
import NavBar from './Navbar'
import About from './images/About.jpg'
import './Aboutus.css'
import Customer from './Customer'
import Ourteam from './Ourteam'
import Footer from './Footer'
import { Container,Row,Col,Image } from 'react-bootstrap'

class Aboutus extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <NavBar/>
                    
                    <Container className="about-content" >
                        <Row>
                        <Col lg={6}>
                            <div className="about-image">
                            <Image src={About} fluid/>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div>
                                <h4>welcome to laps </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </Col>
                        </Row>
                        <Row className="about-content-row2">
                            <Col lg={3}>
                                <h4>7</h4>
                                <h6>years experience</h6>
                            </Col>
                            <Col lg={3}>
                                <h4>1.690</h4>
                                <h6>happy customers</h6>
                            </Col>
                            <Col lg={3}>
                                <h4>1.318</h4>
                                <h6>completed order</h6>
                            </Col>
                            <Col lg={3}>
                                <h4>12</h4>
                                <h6>honors and awards</h6>
                            </Col>
                        </Row>
                    </Container>


                    <Customer/>
                    <Ourteam/>
                    <Footer/>
               </React.Fragment>
            </div>
        )
    }
}
export default  Aboutus;
