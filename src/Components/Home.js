import React from "react";
import { ProductList } from "./ProductsList";
import {Navbar}  from '../Components/Navbar'
export const Home = (props) => {
 
  return (
    <>
    <Navbar/>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://png.pngtree.com/png-vector/20200410/ourmid/pngtree-online-shopping-concept-for-landing-page-or-e-commerce-site-png-image_2181567.jpg"
            alt="Girl in a jacket"
            width="700"
            height="700"
          />
        </div>
        <div>
          <img
            src="https://clipground.com/images/ecommerce-logo-png-5.png"
            alt="Girl in a jacket"
            width="600"
            height="600"
          />
        </div>
      </div>
      
      <ProductList/>
   



    </>
  );
};
