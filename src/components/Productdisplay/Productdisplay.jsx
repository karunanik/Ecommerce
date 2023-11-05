import React, { useContext } from "react";
import './Productdisplay.css';
import staricon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import { Shopcontext } from "../../context/Shopcontext";
const Productdisplay=(props)=>{
    const {product}=props;
    const  {addToCart}=useContext(Shopcontext)
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-imglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="productdisplay-img">
                <img src={product.image} className="productdisplaymain-img" alt="" />
                </div>
            </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplayright-star">
                <img src={staricon} alt="" />
                <img src={staricon} alt="" />
                <img src={staricon} alt="" />
                <img src={star_dull} alt="" />
                <img src={star_dull} alt="" />
                <p>122</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A light weight, usually knitted,pullover shirt, close fitting and witha round neckline and short sleeves, worn as an undershirt or outer over garment. 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Women , T-shirt , Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Modern Latest</p>

        </div>
        </div>
    )
}
export default Productdisplay