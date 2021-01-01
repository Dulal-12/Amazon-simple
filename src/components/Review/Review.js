import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
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
    return (
        <div>
           {cart.map(product=> <ReviewItem product={product}></ReviewItem>)}
        </div>
    );
};

export default Review;