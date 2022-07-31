import React, { useState } from "react";

const Navbar = () => {
    const[headerNav, setHeaderNav] = useState(false)
    console.log(headerNav)
    return (
        <div className="header_navbar">
        {headerNav
        ?<div className='header_nav_open'>
            <div className="header_nav_open_item1">
            <a href="#" className="header_navbar_item_logo" >
            <img src="img/header_logo1.png" />
            <div className="header_nav_open_item1">
                BIGWIN365 AFFILIATES
                </div> 
        </a>
        <a href="#" className="left_navbar_item">
                <img src="img/logo1.png" className="header_navbar_logo_setting" />
                <div className="header_navbar_item_info">
                Home
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo2.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Accaunt Management
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo3.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Marketing Tools
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo4.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Reports
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo5.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Payments
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo6.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Content
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo7.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Settings
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo8.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Communications
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item" />
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo9.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Favorites
                </div> 
                <img src="img/header_logo4.png"  className="header_nav_open_item"/>
            </a>
            <a href="#" className="left_navbar_item">
                <img src="img/logo10.png" className="header_navbar_logo_setting"/>
                <div className="header_navbar_item_info">
                Recently Used
                </div> 
                <img src="img/header_logo4.png" className="header_nav_open_item"/>
            </a>
            </div>
           
            
        </div>
        :null}
        
        <div className="header_navbar_left">
        <div className="header_navbar_content">
        <a href="#" className="header_navbar_logo_content" >
            <img src="img/header_logo1.png" className="header_navbar_logo"/>
        </a>
        <button 
        style={{padding: '0',
        border: 'none',
        font: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        marginLeft:'200px'}} onClick={() => headerNav ? setHeaderNav(false): setHeaderNav(true) }>
        <img src="img/header_logo5.png" />
        </button>
            
      

        </div>
        
       
       
        </div>
        <div className="header_navbar_right">
        <a href="#" className="header_navbar_right_item">
            <img src="img/header_logo2.png" height={60} />
        </a>
        <a href="#" style={{marginRight:'10px'}}>
            <img src="img/header_logo3.png" />
        </a>
        <div style={{fontSize:'13px', marginRight:'30px'} }>
         <div style={{color:'#636363'}}>Hello, Max!</div>
         <div style={{color:'#989898'}}>Last login:Thu Mar 20 2014</div>
        </div>
        <a href="#" className="header_navbar_right_item">
            <img src="img/header_logo4.png" />
        </a>
        </div>
        </div>
    )
}

export default Navbar;