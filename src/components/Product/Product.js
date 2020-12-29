import React from 'react';
import './Product.css';
const Product = (props) => {

  const { img, name, seller, price, stock } = props.product;


  return (
    <div className="product">
      <div>
             <img src={img} alt="" />
      </div>

      <div className="product-details">
            <h4>  {name}</h4>
            <p><small>By : {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock. Guys! Order-soon</small></p>
            <button className = "main-btn" onClick = {()=>props.handleAddProduct(props.product)}>Add to Cart</button>
      </div>


    </div>
  );
};

export default Product;