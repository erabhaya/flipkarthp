import React from 'react'
import "./Style.css";

export default function Header() {
  return (
    <div className="header">
            <div className="header__logo">
                <div className="logo_img">
                    <img className="logo" src="./images/flipkart-plus_logo.png" alt="logo"/>
                </div>
                <div className="logo_text">
                    <span>Explore</span>
                    <span className="logo_text_plus">Plus</span>
                    <img className="logo_text_plusimg" src="./images/plus.png" alt=""/>
                </div>
            </div>
            <div className="header__search">
                <input type="text" placeholder="Search for products,brands and more" />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="header__login">
                <button className="login_button">Login</button>
            </div>
            <div className="header__seller">
                <p className="text">Become a Saller</p>
            </div>

            <div className="header__more">
                <p className="text"> More</p>
            </div>

            <div className="header__cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="text">Cart</p>
            </div>
        </div>
  )
}
