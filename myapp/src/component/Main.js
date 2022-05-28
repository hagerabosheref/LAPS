import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import main1 from './images/main1.jpg'
import main2 from './images/main2.jpg'
import main3 from './images/main3.jpg'
import './Main.css'

//controls={false}
class Main extends Component {
    render() {
        return (
            <div className="main-container" >
                <Carousel  fade={true} className="main-content">
                    <Carousel.Item interval={2000} className="Item">
                        <div className="image"> 
                        <img
                        className="d-block w-100"
                        src={main1}
                        alt="First slide"
                        />
                        </div>
                        <Carousel.Caption className="Caption"> 
                        <h3>It’s time for a laptop refresh</h3>
                        <p>Takes your creativities to the next level.</p>
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={2000} className="Item">
                        <div className="image">
                        <img
                        className="d-block w-100"
                        src={main2}
                        alt="Second slide"
                        />
                        </div>                      
                        <Carousel.Caption className="Caption">
                        <h3>Only the best laptops</h3>
                        <p>Struggle with your job, not with your laptop.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className="Item">
                        <div className="image"> 
                        <img
                        className="d-block w-100"
                        src={main3}
                        alt="Third slide"
                        />
                        </div>  
                        <Carousel.Caption className="Caption">
                        <h3>Make your laptop stand out</h3>
                        <p>Stop struggling with operating your old system. Switch to laptops.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Main;
