import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
  if(props.quantity){
    var price = cart.reduce((initial , pd) =>pd.price*pd.quantity+ initial  ,0);
  }
  else{
    var price = cart.reduce((initial , pd) =>pd.price+ initial  ,0);
  }
    let shipping = 0;
    if(price === 0){
        shipping = 0;
    }
    else if(price > 50){
        shipping = 12.99;
    }
    else{
        shipping = 5.99;
    }
    
    return (
        <div>
           <h4>Order summary : {props.cart.length}</h4>
           <h4>Price : ${Math.round(price)}</h4>
           <h4>Shipping Cost : ${shipping}</h4>
           <h4>Total cost : ${Math.round(price+shipping)}</h4>
    <Link to = "/review"> {(props.btn)?<button className = "main-btn" onClick={ props.handlePlaceOrder }>Place Order</button>: <button className = "main-btn">Review Order</button> }</Link>
          
        </div>
    );
};

export default Cart;