import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'
import Items from "../components/Items/Items";

export const Shopcontext= createContext(null);
const getdefaultcart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
        return cart;
    
}
const Shopcontextprovider=(props)=>{
    const[cartItems,setCartItems]=useState(getdefaultcart());
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems)
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const gettotalcartamount=()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item));
                totalamount+=iteminfo.new_price*cartItems[item];
            }
            
        }
        return totalamount;
    }
    const gettotalcartitems=()=>{
        let totalitem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalitem+=cartItems[item];

            }
        }
        return totalitem
    }
    const contextvalue={gettotalcartitems,gettotalcartamount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default Shopcontextprovider;