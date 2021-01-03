import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
const Shop = () => {

    const first15 = fakeData.slice(0,15);
    const [products , setProducts] = useState(first15);
    const [cart , setCart] = useState([]);
    const handleAddProduct = (pd)=>{

        const newCart = [...cart , pd];
        setCart(newCart);
        const sameProduct = newCart.filter(cartEle => cartEle.key === pd.key);
        addToDatabaseCart(pd.key , sameProduct.length) ;

    }
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
        <div className = "twin-container">
                  <div className="product-container">

                        {products.map(product=>  <Product btn={true} product = {product} handleAddProduct={handleAddProduct} key={product.key}></Product>)}

                  </div>
                  <div className="cart-container" >

                    
                          <Cart cart ={cart}></Cart>

                  </div>
        </div>
    );
};

export default Shop;