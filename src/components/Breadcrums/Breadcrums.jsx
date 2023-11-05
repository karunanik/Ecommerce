import React from "react";
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'
import all_product from "../Assets/all_product";
const Breadcrums=(props)=>{
    const {product}=props;
    return(
        <div className="breadcrums">
            HOME <img src={arrow_icon} alt="" /> Explore <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}

        </div>
    )
} 
export default Breadcrums