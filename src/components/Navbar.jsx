import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to='/'> <span className="navbar-brand"> Truggle product</span>  </Link>
           <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                       <NavLink className="nav-link" to='/products/add'>Ajouter un produit</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link" to='/products'>Produits</NavLink>
                   </li>
               </ul>
       </div>
   </nav>
    );
}

export default Navbar;