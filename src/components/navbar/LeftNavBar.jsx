import React, { useState } from "react";

const LeftNavBar = () => {
    const[leftNavBarButton, setLeftNavBarButton] = useState(false)
    console.log(leftNavBarButton)
    return (
        <div>
        {!leftNavBarButton
        ?<div className= "left_nav_bar_close">
            <a href="http://google.com" className="left_navbar_item">
                <img src="img/logo1.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo2.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo3.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo4.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo5.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo6.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo7.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo8.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo9.png" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo10.png" />
            </a>
            <button 
            className= "left_nav_bar_button"  
            onClick={() =>  setLeftNavBarButton(true)}>
             {">"}
            </button>
        </div>
        :<div className="left_nav_bar_open">
        <a href="#" className="left_navbar_item">
                <img src="img/logo1.png" />
                <div className="left_navbar_item_info">
                Dashboard
                </div> 
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo2.png" className="header_navbar_item_logo" />
                <div className="left_navbar_item_info">
                Accaunt Managment 
                </div> 
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo3.png" />
                <div className="left_navbar_item_info">
                My Accaunt
                </div> 
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo4.png" />
                <div className="left_navbar_item_info">
                Market Tools
                </div>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo5.png" />
                <div className="left_navbar_item_info">
                Reports
                </div>  
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo6.png" />
                <div className="left_navbar_item_info">
                Payments
                </div> 
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo7.png" />
                <div className="left_navbar_item_info">
                Settings
                </div> 
            </a>
        <button 
            className= "left_nav_bar_button_active"  
            onClick={() => setLeftNavBarButton(false) }>
              {"<"}
            </button>
        </div>}
        
        </div>

       
    )
}

export default LeftNavBar