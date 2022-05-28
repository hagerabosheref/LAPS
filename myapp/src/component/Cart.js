import React, { Component } from 'react'
import {Container, Row,Col ,Image} from 'react-bootstrap';
import NavBar from './Navbar';
import Footer from './Footer';
import mycart from './images/mycart.jpg'
import './Cart.css'
import { Link } from 'react-router-dom';
class Cart extends Component {
    state={
        DataCart: window.localStorage.getItem("CartStorage") ? JSON.parse(window.localStorage.getItem("CartStorage")):[],
        TotalAll: 0
    }
    componentDidMount(){
        let TotalAll=0;
        for(var i=0; i< JSON.parse(window.localStorage.getItem("CartStorage")).length; i++){
            TotalAll +=parseInt(this.state.DataCart[i].total);
        }
        this.setState({
            TotalAll
        })
    }
    handleDeleteItem= _index =>{
        console.log("before splice",this.state.DataCart)
        this.state.DataCart.splice(_index, 1);
        console.log("after splice",this.state.DataCart)
        this.setState({
            DataCart:this.state.DataCart,
        })
        localStorage.setItem('CartStorage', JSON.stringify(this.state.DataCart))
        let TotalAll=0;
        for(var i=0; i< JSON.parse(window.localStorage.getItem("CartStorage")).length; i++){
            TotalAll +=parseInt(this.state.DataCart[i].total);
        }
        this.setState({
            TotalAll
        })
    }
    handleIncreasement= _index =>{
        console.log(_index)
        const DataCart=[...this.state.DataCart];
        DataCart[_index].count ++;
        DataCart[_index].total =DataCart[_index].count * DataCart[_index].price;
        console.log(JSON.parse(window.localStorage.getItem("CartStorage")).length)
        let TotalAll=0;
        for(var i=0; i< JSON.parse(window.localStorage.getItem("CartStorage")).length; i++){
            TotalAll +=parseInt(DataCart[i].total);
        }
        this.setState({
            DataCart,
            TotalAll
        })
        
    }
    handleDecreasement= _index =>{
        console.log(_index)
        const DataCart=[...this.state.DataCart];
        DataCart[_index].count --;
        DataCart[_index].total = DataCart[_index].count * DataCart[_index].price;
        let TotalAll=0;
        for(var i=0; i< JSON.parse(window.localStorage.getItem("CartStorage")).length; i++){
            TotalAll +=parseInt(DataCart[i].total);
        }
        if( DataCart[_index].count>=1){
            this.setState({
                DataCart,
                TotalAll
            })
        }
    }

    
    render() {
        //console.log( this.state.DataCart[0])
        //console.log(JSON.parse(localStorage.CartStorage).length)
        return(
            <React.Fragment>
                <NavBar/>
                        <Container>
                            <Row>
                                <Col lg={12} className="containerImageMycart">
                                    <div className="containerImageMycart-image">
                                        <Image src={mycart} fluid/>
                                        <div className="containerImageMycart-layer">
                                            <div className="containerImageMycart-content">
                                                <p>my cart</p> 
                                        </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="text-center details-cart">
                                <Col lg={6}><h5>products</h5></Col>
                                <Col lg={2}><h5>price</h5></Col>
                                <Col lg={2}><h5>quantity</h5></Col>
                                <Col lg={2}><h5>total</h5></Col>
                            </Row>
                            {this.state.DataCart.map((prodd,index)=>{
                                return(
                                    <div className="cart-container" key={index}>
                                    
                                        <Row className="text-center cart-content" >
                                            <Col lg={1}> <button onClick={()=> this.handleDeleteItem(index)} className="cart-content-btn-del"><i className="fas fa-times"/></button></Col>
                                            <Col lg={3}className="image-cart"><Image src={prodd.image} fluid /></Col>
                                            <Col lg={2}><p>{prodd.description}</p></Col>
                                            <Col lg={2}><p>EGP{new Intl.NumberFormat().format(prodd.price)}</p></Col>
                                            <Col lg={2}><button className="cart-content-btn" onClick={()=> this.handleDecreasement(index)} ><i className="fas fa-minus"/></button><p className="cart-content-count">{prodd.count}</p><button className="cart-content-btn" onClick={ ()=> this.handleIncreasement(index)}><i className="fas fa-plus"/></button></Col>
                                            <Col lg={2}><p>EGP{new Intl.NumberFormat().format(prodd.total)}</p></Col>
                                        </Row>
                                        </div>
                                
                                
                                    )
                                })
                        }
                        <Row>
                            <Col lg={6}>
                                <div className="container-CheckoutBox">
                                    <h3>cart totals</h3>
                                    <h5>EGP{this.state.TotalAll}</h5>
                                    <Link to="/Checkout"><button className="container-CheckoutBox-btn">proceed to checkout</button></Link>
                                </div>
                            </Col>

                        </Row>
                        </Container>
            <Footer/>
        </React.Fragment>
        )

    }
}
export default Cart;