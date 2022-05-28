import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./Informationaboutorder.css"
class Informationaboutorder extends Component {
    render() {
        return (
            <div className="container-information">
                <Container className="content-information">
                    <Row className="text-center">
                        <Col lg={3} className="content-information-cols">
                            <div>
                                <i className="fas fa-shopping-cart"/>
                                <h6>order online</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                        <Col lg={3} className="content-information-cols">
                            <div>
                            <i className="fas fa-shipping-fast"/>
                                <h6>free shipping</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                        <Col lg={3} className="content-information-cols">
                            <div>
                                <i className="fas fa-award"/>
                                <h6>best quality products</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <i className="fas fa-undo-alt"/>
                                <h6>30 days return</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Informationaboutorder;