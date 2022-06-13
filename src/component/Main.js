import React from 'react'
import "./Style.css";

export default function main() {
  return (
   <div>
       <div className="products">
           <div className="products_container">
               <div className="products_header">
                   <div className="products_header_title">Deals of the Day</div>
                   <div className="product_header_btn">
                       <button className="">VIEW ALL</button>
                   </div>
               </div>
               <div className="products_list">
                   <div className="product_box">
                       <div className="product_item">
                            <div className="product_img">
                                <img src="./images/product5.webp" alt=""/>
                            </div>
                            <div className="product_text">
                                <p className="name">Baby Toy</p>
                                <p className="price">Under ₹799</p>
                            </div>
                        </div>
                   </div>   
                   <div className="product_box">
                       <div className="product_item">
                            <div className="product_img">
                                <img src="./images/product1.webp" alt=""/>
                            </div>
                            <div className="product_text">
                                <p className="name">Art Supplies</p>
                                <p className="price">Under ₹799</p>
                            </div>
                        </div>
                   </div>   
                   <div className="product_box">
                       <div className="product_item">
                            <div className="product_img">
                                <img src="./images/product2.webp" alt=""/>
                            </div>
                            <div className="product_text">
                                <p className="name">Kettle</p>
                                <p className="price">Under ₹799</p>
                            </div>
                        </div>
                   </div>   
                   <div className="product_box">
                       <div className="product_item">
                            <div className="product_img">
                                <img src="./images/product3.webp" alt=""/>
                            </div>
                            <div className="product_text">
                                <p className="name">AC</p>
                                <p className="price">Under ₹799</p>
                            </div>
                        </div>
                   </div>   
                   <div className="prev btn">
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="next btn">
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
               </div>
           </div>
           <div className="products_add">
               <img src="./images/download.jpeg" alt="" />
           </div>
       </div>
  
   </div>
      )
    }
