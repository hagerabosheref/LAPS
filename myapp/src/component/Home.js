import React, { Component } from 'react'
import NavBar from './Navbar'
import Main from './Main'
import Informationaboutorder from './Informationaboutorder'
import Productinhome from './Productinhome'
import Moreproduct from './Moreproduct'
import Footer from './Footer'

 class Home extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                <NavBar/>
                <Main/>
                <Informationaboutorder/>
                <Productinhome/>
                <Moreproduct/>
                <Footer/>
                </React.Fragment>
            </div>
        )
    }
}
export default Home;