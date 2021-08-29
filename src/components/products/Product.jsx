import React from 'react';
import { Link } from 'react-router-dom';


function Product(props) {
    return (
        <div className="container mt-5">
            <div className="card border border-dark">
              <div className="card-heard bg-dark">
                 <div className="row">
                    <div className="col-9">
                       <h3 className="text-left p-2  text-white">Produits ( Total | {/* {products.length} */}) </h3>
                    </div>
                    <div className="col">
                      <Link to='/products/create' className="btn btn-primary mt-2"> Ajouter un produit </Link>
                    </div>
                </div>
                </div>
                <div className="card-body p-0">
             {/*    { products.length === 0 ? 
                <div class="d-flex flex-column p-5 w-50 text-center  mx-auto">
                  <h5>Aucun produit ajouté pour le moment</h5>
                  <Link to='products/create' class="w-50 mx-auto btn-lg btn btn-dark ">Ajouter un produit</Link>
                </div> :  */}  
                <div class="table-responsive">
                <table id="products" class="rounded-0 table bg-white table-hover w-100">
                   <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                   </thead>
                    <tbody> 
                       {/*  {products.map(product => <ProductItem key={product.id} handleDelete={handleDelete} product={product} />)} */}
                    </tbody>
                </table>
                </div>
              {/*  } */}
               </div>
            </div>
        </div>
    );
}

export default Product;