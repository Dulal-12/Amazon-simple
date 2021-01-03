import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart , setCart]= useState([]);
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
    return (
        <div>
           {cart.map(product=> <ReviewItem product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)}
        </div>
    );
};

export default Review;