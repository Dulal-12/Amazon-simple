import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager';
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

    return (
        <div className = "shop-container">
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