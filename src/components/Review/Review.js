import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, addToDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import lastImage from '../../images/giphy.gif';
const Review = () => {

    const [cart , setCart]= useState([]);
    const [orderPlace , setOrderPlace]= useState(false);
    useEffect(()=>{
      const savedCart =   getDatabaseCart();
      const productKeys = Object.keys(savedCart);
    // console.log(productKeys);
    const cartProduct = productKeys.map(key=>{
             const product = fakeData.find(data=> data.key === key);
             product.quantity  = savedCart[key];
             return product;
    })
   setCart(cartProduct);
     
    },[])

    const handleRemoveProduct = (productKey)=>{
          //console.log('remove cliked hoice' , productKey);
          const newCart = cart.filter((pd) => pd.key !== productKey);
          setCart(newCart);
          removeFromDatabaseCart(productKey);
    }

    const handlePlaceOrder = ()=>{
      setOrderPlace(true);
      setCart([]);
      processOrder();
    }
    return (
        <div className="twin-container">
                    <div className="product-container">
                            {cart.map(product=> <ReviewItem product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)}
                            {(orderPlace) ? <img src={lastImage} alt=""/> : null}
                     </div>
                  
           <div className="cart-container" >

                    <Cart quantity={true} btn ={true}cart ={cart}  handlePlaceOrder ={ handlePlaceOrder }></Cart>
 
            </div>
        </div>
    );
};

export default Review;