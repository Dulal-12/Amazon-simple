import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let price = cart.reduce((initial , pd) => pd.price + initial  ,0);
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
           <h4>Total cost : ${price+shipping}</h4>
        </div>
    );
};

export default Cart;