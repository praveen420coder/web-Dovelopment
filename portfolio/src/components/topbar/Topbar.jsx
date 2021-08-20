import React from 'react'
import {Person,Mail} from "@material-ui/icons";
import "./topbar.scss"


function Topbar({menuOpen,setMenuOpen}) {

   
    return (

        <div  className={"topbar " + (menuOpen && "active")} id="topbar" >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">praveen.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 7023972612</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>sutharpks2658003@gamil.com</span>
                        
                    </div>
                    
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span class="line1"></span>
                        <span class="line2"></span>
                        <span class="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
