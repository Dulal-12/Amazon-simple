import React from 'react';

const ReviewItem = (props) => {
    const {name , img , quantity, key} = props.product;
    return (
        <div className="product">
           <div >
               <img src={img} alt=""/>
           </div>
           <div className="product-details">
               <h5>{name}</h5>
               <p><small>Quantity : {quantity}</small></p>
               <button onClick={()=> props.handleRemoveProduct(key)} className = "main-btn">Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;