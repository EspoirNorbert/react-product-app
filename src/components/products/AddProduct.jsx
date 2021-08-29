import React from 'react';

function AddProduct(props) {
    return (
        <div className="container">
             <form className="was-validated mt-5 bg-white mx-auto shadow-sm mb-5 w-70 border border-dark rounded-lg">
             <h3 className="bg-dark text-center p-2 text-white">Ajouter un nouveau produit</h3>  
             <div className="container">
                  <div className="form-group">
                      <label HtmlFor="name">Name</label>
                      <input type="text" 
                      required 
                      name="name"
                      placeholder="Enter name of product"  className="form-control" />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div> 
              </div>
              <div className="row">
                  <div className="col-md">
                      <div className="form-group">
                          <label HtmlFor="description">Description</label>
                          <textarea  
                          required  
                          name="content" 
                          placeholder="give some descritpion" className="form-control" cols="0" rows="0" >
                          </textarea>
                          <div className="valid-feedback">Valid.</div>
                          <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                          <label HtmlFor="description">Quantity</label>
                          <input type="number" min="0" 
                          required
                          name="quantity" 
                           placeholder="Enter price" className="form-control" />
                          <div className="valid-feedback">Valid.</div>
                          <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group">
                          <label HtmlFor="description">Price</label>
                          <input type="number" min="0" 
                          required 
                          name="price"  
                          placeholder="Enter price " className="form-control" />
                          <div className="valid-feedback">Valid.</div>
                          <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                  </div>
              </div>
              <hr />
              <div className="d-flex justify-content-center">
                 <button class="btn btn-dark btn-block m-2 w-50" id="bsubmit" name="bajout" type="submit"> Ajouter </button>
              </div>
              </div>
          </form>
        </div>
    );
}

export default AddProduct;