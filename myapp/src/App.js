import { Route ,Switch ,Redirect} from 'react-router-dom'
import Home from './component/Home';
import Aboutus from './component/Aboutus'
import Contactus from './component/Contactus';
import SignUp from './component/Signup';
import Login from './component/Login';
import Gallery from './component/Gallery';
import Cart from './component/Cart';
import Checkout from './component/Checkout'
//import './App.css';

function App() {
  
  return (
     
     <Switch>
      <Route path='/Home' component={Home}/>
      <Route path='/AboutUs' component={Aboutus}/>
      <Route path='/ContactUs' component={Contactus}/>
      <Route path='/SignUp' component={SignUp}/>
      <Route path='/LogIn' component={Login}/>
      <Route path="/Gallery" component={Gallery}/>
      <Route path="/Cart" component={Cart}/>
      <Route path="/Checkout" component={Checkout}/>
      <Redirect from="/" to="/Home"/>
     </Switch>
  );
}

export default App;
