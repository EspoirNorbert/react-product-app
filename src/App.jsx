import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './components/products/Product'
import SingleProduct from './components/products/SingleProduct'
import AddProduct from './components/products/AddProduct'
import EditProduct from './components/products/EditProduct'
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
     <Router>
       <Navbar />
         <Switch>
             <Route exact path={'/'} component={Home} />
             <Route exact path='/products' component={Product} />
             <Route exact path='/products/add' component={AddProduct} />
             <Route exact path='/products/:id' component={SingleProduct} />
             <Route exact path='/products/edit/:id' component={EditProduct} /> 
             <Route component={NotFound} />
         </Switch>
         <ToastContainer position='bottom-right' />
     </Router>
  );
}

export default App;
