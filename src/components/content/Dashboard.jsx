import React from "react";

const Dashboard = () => {
    return(
        <div className="dashboard">
           <div style={{color:'#6e6e6e', marginLeft:'80px'}}>Dashboard</div>
           <button className="dashboard_content">
            <img src="img/dashboard_logo.png"/>
            <div style={{color:'#878787', fontSize:'10px', marginLeft:'10px'}}>ADD THIS PAGE TO FAVORITES</div>
           </button>
        </div>
    )
}

export default Dashboard