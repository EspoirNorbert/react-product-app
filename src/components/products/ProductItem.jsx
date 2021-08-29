import React from 'react';
import { Link } from "react-router-dom";

function ProductItem({ product, handleDelete }) {
    return (
         <tr>
           <td>{ product.id } </td>
           <td>
              <img src={product.image_url == null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMaGF8lf7RbiZBnbqQW63hI-WTHPBI768Og&usqp=CAU' : product.image_url} className='img-fluid rounded-circle border border-dark' width='50' height='50' alt={ product.name} /> {product.name}    
           </td>
           <td>{product.price} FCFA</td>
           <td>
            <div className="d-flex justify-content-center mt-0"> 
                <Link className="btn btn-info mr-2 productToDetail" to= {`/products/${product.id}`}  name="detail" >  
                    <i className="fa fa-edit"></i>
                </Link>
                <Link className="btn btn-warning mr-2 productToUpdate"   to= {`/products/edit/${product.id}`}>     
                   <i className="fa fa-edit"></i>
                </Link>
                <div onClick={ () => handleDelete(product.id) } className="btn btn-danger mr-2 productToDelete" >  
                   <i className="fa fa-trash"></i>
                </div>
            </div>
        </td>
      </tr>
    );
}

export default ProductItem;