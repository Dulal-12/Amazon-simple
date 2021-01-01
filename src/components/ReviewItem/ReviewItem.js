import React from 'react';

const ReviewItem = (props) => {
    const {name , img , quantity} = props.product;
    return (
        <div className="product">
           <div >
               <img src={img} alt=""/>
           </div>
           <div className="product-details">
               <h5>{name}</h5>
               <p><small>Quantity : {quantity}</small></p>
               <button className = "main-btn">Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;