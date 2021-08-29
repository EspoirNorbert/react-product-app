import './App.css';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom'
import Home from './pages/Home'
import Product from './components/products/Product'
import SingleProduct from './components/products/SingleProduct'
import AddProduct from './components/products/AddProduct'
import EditProduct from './components/products/EditProduct'
import Navbar from './components/Navbar';

function App() {
  return (
     <Router>
       <Navbar />
         <Switch>
             <Route exact path={'/'} component={Home} />
             <Route exact path='/products' component={Product} />
             <Route path='/products/:id' component={SingleProduct} />
             <Route path='/products/add' component={AddProduct} />
             <Route path='/product/edit/:id' component={EditProduct} /> 
         </Switch>
     </Router>
  );
}

export default App;
