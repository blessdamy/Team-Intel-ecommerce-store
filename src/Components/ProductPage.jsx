import MainProduct from "../Assets/Diamond stud.svg"
import Currency from "../Assets/Currency.svg"
import Price from "../Assets/Price.svg"
import Shadow from "../Assets/shadow.svg"
import Star from "../Assets/Star.svg"
import Cart from "../Assets/Cart.svg"
import { Routes, Route, Link } from "react-router-dom";

import React, { useState } from 'react';


function ProductPage(){
    const [count, setCount] = useState(0);
    if(count<0) {
        setCount(0);
    }
    
    
    return(
        
        <div className=" w-[1272px]  h-[1911px]  mx-auto mt-[226px] mb-[401px] ">

            <div className="w-full h-[533px] bg-slate-100 rounded-md mb-[121px]">
               <div className=" pt-[35px] pl-[52px] flex flex-co mb-4">
                <aside className= "w-[288px] h-[282px] bg-white rounded-md ">
                <img src = {MainProduct} alt="MainProduct" className="pt-[17px] "  />
                <img src = {Shadow} alt="Shadow" className="pl-14 "/>
                </aside>
                <div className="w-[774px] pl-[11px] mt-[16px]"> 
                    <h1 className="font-Roboto text-4xl text-left w-[272px] h-[45px] mb-[11px]">Diamond stud</h1>
                    <ul className="flex mb-5 font-Inter text-base">
                        <li className="flex pr-5"><img src={Star} alt="star"/>4.5 Ratings</li>
                        <li className="flex pr-5">100+Reviews</li>
                        <li >150+Sold</li>
                    </ul>
                   <div className="flex  mb-5">
                        <img src ={Currency} alt = "currency"/>
                        <img src = {Price} alt= "price"/>
                    </div>
                    <p className="text-left font-Inter text-xl ">It is a high class quality diamond stud that makes you stand out with pride and
                    style. This studs is a plus to your wardrobe and it represents simplicity. It is made
                    from genuine diamond stone and other unique materials.</p>
                </div>

              </div>
        
                <div className="flex bg-slate-200 w-28 justify-evenly h-11 rounded-md ml-[413px] mb-6 items-center">
                <button onClick={() => setCount(count - 1)}>
                    -
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>
                +
                </button>
              </div>

                <div className="flex">
                    <Link to="./PaymentPage.jsx">
                      <button className="w-40 h-[73px] bg-custom-green rounded-lg font-Inter text-xl text-white ml-[62px] mr-[46px] ">
                     Order Now
                       </button>
                    </Link>

               <Link to="./PaymentPage.jsx">
               <button className="flex w-[180px] h-[73px] border border-custom-green rounded-lg items-center place-content-center">
               <img src={Cart} alt="cart" className= "pr-2.5"  /> Add to Cart
                </button>
               </Link>
            
                </div> 

           </div>
           <div className="w-full h-[460px] bg-slate-100 rounded-md mb-[103px] pl-[91px]">
            <h1 className= "pt-[51px] text-left font-Inter text-4xl">Products you may like</h1>
           </div>
           <div className="w-full h-[442px] bg-slate-100 rounded-md mb-[249] pl-[91px]">
            <h1 className= "pt-[51px] text-left font-Inter text-4xl">Other jelwelries</h1>
           </div>
        </div>
    )
}

export default ProductPage