import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import headers from '../../Api';
import ProductItem from './ProductItem';
import { toast } from 'react-toastify';



function Product(props) {

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(false)

   const getAllProduct = async () => {
     setLoading(true)
     try {
          await axios
          .get('https://api-product-laafi.herokuapp.com/api/v1/products',headers)
          .then(res => {
            setProducts(res.data.products)
          })
          setLoading(false)
     } catch ({error}) {
       console.log(error);
     }
   }

   useEffect(  () => {
          getAllProduct()
   }, [])


   const handleDelete = id => {
    if(window.confirm('Voulez vous vraiment supprimer ce produit ? oui ou Non ?')){
        axios.delete(`https://api-product-laafi.herokuapp.com/api/v1/products/${id}`, headers).then( res => {
            setProducts([...products].filter(i => i.id !== id))
            toast.success('Ce produit a été supprimé avec success')
        })
        .catch(error  =>console.log(error) )   
    }
  }

    return (
 /*      products.length ?  (
        <div class="d-flex flex-column p-5 w-50 text-center  mx-auto">
          <h5>Aucun produit ajouté pour le moment</h5>
          <Link to='products/add' class="w-50 mx-auto btn-lg btn btn-dark ">Ajouter un produit</Link>
        </div>) */
        <div className="container mt-5 mb-5">
            <div className="card border border-dark">
              <div className="card-heard bg-dark">
                 <div className="row">
                    <div className="col-9">
                       <h3 className="text-left p-2  text-white">Produits ( Total | {products.length} ) </h3>
                    </div>
                    <div className="col">
                      <Link to='/products/add' className="btn btn-primary mt-2"> Ajouter un produit </Link>
                    </div>
                </div>
                </div>
                <div className="card-body p-0">
             
                {
                !loading ?
                <div className="table-responsive">
                <table id="products" class="rounded-0 mb-5 table table-striped bg-white table-hover w-100">
                   <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                   </thead>
                    <tbody> 
                       { products.map(product => <ProductItem key={product.id} handleDelete={handleDelete}  product={product} />) }
                    </tbody>
                </table>
                </div> 
                    : 
                   <div className="spinner-border"></div>
                  }
               </div>
            </div>
        </div>
    );
}

export default Product;