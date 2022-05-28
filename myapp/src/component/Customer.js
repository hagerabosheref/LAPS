import React, { Component } from 'react'
import {Container, Row, Col, Image} from "react-bootstrap"
import customer1 from './images/customer1.jpg'
import customer2 from './images/customer2.jpg'
import customer3 from './images/customer3.jpg'
import customer4 from './images/customer4.jpg'
class Customer extends Component {
    render() {
        return (
            <div className="team-container">
                <Container >
                <Row>
                    <Col><p className="header-team">what our customers says</p></Col>
                </Row>
                
                <Row className="text-center">
                    <Col className="box-container">
                        <div className="image-box">
                            <Image src={customer1} fluid/>
                        </div>
                        <div className="content-box">
                            <p className="namesofteam">John Doe</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>
                    <Col className="box-container">
                        <div className="image-box">
                            <Image src={customer2} fluid/>
                        </div>
                        <div className="content-box">
                            <p className="namesofteam">Mike Ross</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>              
                    <Col className="box-container">
                            <div className="image-box">
                                <Image src={customer3} fluid/>
                            </div>
                            <div className="content-box">
                                <p className="namesofteam">John Doe</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </Col>     
                    <Col className="box-container">
                            <div className="image-box">
                                <Image src={customer4} fluid/>
                            </div>
                            <div className="content-box">
                                <p className="namesofteam">Mike Ross</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </Col>
            </Row>
                </Container>
            </div>
        )
    }
}
export default Customer;
