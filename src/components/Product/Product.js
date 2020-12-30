import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {

  const { img, name, seller, price, stock,key } = props.product;


  return (
    <div className="product">
      <div>
             <img src={img} alt="" />
      </div>

      <div className="product-details">
            <h4> <Link to = {"/product/"+key}>{name}</Link></h4>
            <p><small>By : {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock. Guys! Order-soon</small></p>
            {props.btn&&<button className = "main-btn" onClick = {()=>props.handleAddProduct(props.product)}>Add to Cart</button>}
      </div>


    </div>
  );
};

export default Product;