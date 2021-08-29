import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import headers from '../../Api';
import axios from 'axios';
import { toast } from 'react-toastify';

function SingleProduct() {

    let {id} = useParams();

    const [ product, setProduct ]  = useState({});

   useEffect(  () => {
    axios
    .get(`https://api-product-laafi.herokuapp.com/api/v1/products/${id}`,headers)
    .then(response => response.data.product)
    .then(product  =>  setProduct(product) )
    .catch( error => {
        console.log(error);
        toast.error("Imposible de recuperer le produit concerné");
    } )
   }, [])

    return (
        <div className="container mt-5">
           <div className="jumbotron">
            <h1 className=""> {product.name} </h1>
            <p className="lead">Created At : ... | Created By : ...</p>
            <hr className="my-4" />
             <div className="row">
                 <div className="col-lg col-md-6">
                 <img 
                   src={product.photo == null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMaGF8lf7RbiZBnbqQW63hI-WTHPBI768Og&usqp=CAU' : product.photo} className='img-fluid rounded-circle border border-success' width='100' height='100' 
                   alt={ product.name} 
                    />
                 </div>
                 <div className="col-lg-9 col-md-6">
                 <p>{product.content} </p>
                 <hr />
                 <p> <strong> {product.price} FCFA </strong> </p>
                </div>
             </div>
            </div>
        </div>
    );
}

export default SingleProduct;