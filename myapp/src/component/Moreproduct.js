import React, { Component } from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import moreproduct1 from './images/moreproduct1.jpg'
import moreproduct2 from './images/moreproduct2.jpg'
import './Moreproduct.css'
class Moreproduct extends Component {
    render() {
        return (
            <div className="container-moreproduct">
                <Container>
                    <Row>
                        <Col lg={6}>
                            
                        <div className="content-moreproduct">
                            <div className="content-moreproduct-image">
                                <Image src={moreproduct1} fluid/>
                            </div>
                            <div className="content-moreproduct-layer">
                                <div  className="moreproduct-layercontent">
                                    <h5>light weight for great mobility</h5>
                                    <Link to="/Gallery"><button >see more</button></Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col lg={6}>
                        <div className="content-moreproduct">
                            <div className="content-moreproduct-image">
                                <Image src={moreproduct2} fluid/>   
                            </div>
                            <div className="content-moreproduct-layer">
                                <div className="moreproduct-layercontent">
                                    <h5>sale up to 50% off</h5>
                                    <Link to="/Gallery"><button >see more</button></Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Moreproduct;
