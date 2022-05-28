import React, { Component } from 'react'
import {Container,Col, Row, Image,Modal,Button} from 'react-bootstrap'
import axios from 'axios';
import './Productinhome.css'
//
class Productinhome extends Component {
    state={
        products:[],
        show:false,
        indexvalue: 0,
        cartvalue: 1,
        ArrStorage:[]
    }
    componentDidMount(){
        axios.get("http://localhost:4000/data")
        .then(res=>{
            console.log(res)
            console.log(res.data)
            console.log(res.data[0].description.split(",")[0])
            this.setState({
                products: res.data
           })
       })
       localStorage.setItem("CartStorage",JSON.stringify(this.state.ArrStorage) )
   }
   handleModal = (index)=>{
       this.setState({
        show:!this.state.show,
        indexvalue:index,
        cartvalue: 1
       })
   }
   handleIncreasement = ()=>{
       this.setState({
        cartvalue: this.state.cartvalue + 1
       })
   }
   handledecreasement = ()=>{
       if(this.state.cartvalue===1){
        this.setState({
            cartvalue: 1
        })
       }else{
            this.setState({
            cartvalue: this.state.cartvalue - 1
        })
       }
    }

    handleStorage=(_index)=>{

        this.state.products.map((p,index)=>{
            if(parseInt(p.id) === _index+1){
               this.setState({
                ArrStorage: [...this.state.ArrStorage,p]
               })
            }

        })
        console.log(this.state.ArrStorage)
        localStorage.setItem("CartStorage",JSON.stringify(this.state.ArrStorage) )
    }


        render() {
        return (
            <div className="productinhome-container">
                <Modal size="lg"aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={()=> this.handleModal()}>
                    
                    <Modal.Body className="modal-body">
                       
                        {this.state.products.map((prod,index) =>{
                            if(parseInt(prod.id) === this.state.indexvalue+1 ){
                                return(
                                    <div key={index}>
                                        <Row>
                                            <Col lg={6} className="Modal-col1"><Image className="Modal-image"  src={prod.image} fluid/></Col>
                                            <Col lg={6} className="Modal-col2">
                                                    <h5 className="Modal-col2-header">{prod.description}</h5>
                                                    <h6 className="Modal-col2-price">EGP{new Intl.NumberFormat().format(prod.price)}</h6>
                                                <Row>
                                                    <Col>
                                                        <p  className="Modal-col2-desc">Graphics Card Brand</p>
                                                        <p>{prod["Graphics Card Brand"]}</p>
                                                    </Col>
                                                    <Col>
                                                        <p className="Modal-col2-desc">Hard Disk Capacity</p>
                                                        <p>{prod["Hard Disk Capacity"]}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                    <p className="Modal-col2-desc">Operating System</p>
                                                    <p>{prod["Operating System"]}</p>
                                                    </Col>
                                                    <Col>
                                                    <p className="Modal-col2-desc">RAM Capacity</p>
                                                    <p>{prod["RAM Capacity"]}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                    <p className="Modal-col2-desc">Screen Size</p>
                                                    <p>{prod["Screen Size"]}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Button className="Modal-col2-btn" onClick={()=> this.handledecreasement()}><i className="fas fa-minus"/></Button>
                                                        <p className="Modal-col2-cartvalue">{this.state.cartvalue}</p>
                                                        <Button className="Modal-col2-btn" onClick={()=> this.handleIncreasement()}><i className="fas fa-plus"/></Button>
                                                        <Button onClick={()=> this.handleStorage(index)} className="Modal-col2-btn">Add to card</Button>
                                                    </Col>

                                                </Row>
                                            </Col>
                                        </Row>
                                    
                                    </div>
                                )
                            }
                        })}
                    </Modal.Body>
                </Modal>


                
                <Container>
                    <Row>
                        <Col lg ={12}>
                               <p className="title-productinhome">browse our items</p> 
                        </Col>
                    </Row>
                    <Row>
                    {this.state.products.map((product,index) => {
                            if(index < 12){
                                return(
                                <Col lg={3} key={index}>
                                    <div className="image-productinhome">
                                        <Image src={product.image} fluid/>
                                        <div className="layer-content">
                                            <div className="layer-content-icon">
                                                <Button onClick={()=> this.handleModal(index)}><i className="fas fa-eye"/></Button>
                                                <Button><i className="far fa-heart"/></Button>
                                                <Button onClick={()=> this.handleStorage(index)}><i className="fas fa-shopping-cart"/></Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc-productinhome">
                                        <h6 className="desc-productinhome-name" >{product.description.split(",")[0]}</h6>
                                        <h6 className="desc-productinhome-price">EGP{new Intl.NumberFormat().format(product.price)}</h6>
                                    </div>
                                </Col>
                                )
                            }
                        })
                    }
                        
                    
                    </Row> 
                </Container>
            </div>
        )
    }
}
export default Productinhome ;