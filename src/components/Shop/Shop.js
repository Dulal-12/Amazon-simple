import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {

    const first15 = fakeData.slice(0,15);
    const [products , setProducts] = useState(first15);
    const [cart , setCart] = useState([]);
    const handleAddProduct = (pd)=>{

        const newCart = [...cart , pd];
        setCart(newCart);

    }

    return (
        <div className = "shop-container">
                  <div className="product-container">

                        {products.map(product=> <Product btn={true} product = {product} handleAddProduct={handleAddProduct}></Product>)}

                  </div>
                  <div className="cart-container" >

                    
                          <Cart cart ={cart}></Cart>

                  </div>
        </div>
    );
};

export default Shop;