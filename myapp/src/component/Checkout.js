import React, { Component } from 'react'
import NavBar from './Navbar';
import Footer from './Footer';
import { Container, Row, Col ,Image} from 'react-bootstrap';
import './Checkout.css'
import checkout from './images/checkout.jpg'
class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container-checkout">
                <Container>
                    <Row>
                        <Col lg={12} className="containerImageCheckout">
                            <div className="containerImageCheckout-image" >
                                <Image src={checkout} fluid/>
                                <div className="containerImageCheckout-layer">
                                    <div className="containerImageCheckout-content">
                                        <p>check out</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="container-billing">
                            <h4>billing details</h4>
                            <form>
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                <input type="text" placeholder="Country / Region"/>
                                <input type="text" placeholder="Street Address"/>
                                <input type="text" placeholder="Town / City"/>
                                <input type="text" placeholder="Postcode / ZIP"/>
                                <input type="text" placeholder="Phone"/>
                                <input type="email" placeholder="Email Address"/>
                                <Row>
                                    <Col>
                                        <label>Direct bank transfer</label>
                                        <label>Check payments</label>
                                        <label>Cash on delivery</label>
                                    </Col>
                                    <Col>
                                        <input className="container-billing-radio" type="radio" name="payment" /> 
                                        <input className="container-billing-radio" type="radio" name="payment"/> 
                                        <input className="container-billing-radio" type="radio" name="payment"/> 
                                    </Col>
                                </Row>
                                <button className="container-billing-btn" type="submit">Place Order</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
                </div>
                
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Checkout;