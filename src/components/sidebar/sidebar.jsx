import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";

function Sidebar() {
    return (
        <><div className="sidebar">
           <Link to="/">
           <div className="sec1">
                
                <FaSpotify className="app-logo" />
                

                <h1 className="app-title">Musify</h1>
            </div>
            
           </Link>
           
            

            <div className="sec2">
                <h1 className="app-title">Languages</h1>
                <div className="cate-1">
                    <img src="./src/assets/tamil-logo.jpeg" alt="" className="loveimg" />
                    <p className="lovetxt">Tamil</p>
                </div>
                <div className="cate-1">
                    <img src="./src/assets/english.jpg" alt="" className="loveimg" />
                    <p className="lovetxt">English</p>
                </div>
                <div className="cate-1">
                    <img src="./src/assets/malayalam.jpg" alt="" className="loveimg" />
                    <p className="lovetxt">Malayalam</p>

                </div>

                
            </div>

        </div>
            
        </>
    )
}

export default Sidebar