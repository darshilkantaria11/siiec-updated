import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navigation.css"

const Navigation = () => {
    return (
        <>
            <div className="contnavigation">

                <input type="checkbox" id="active"/>
                    <label htmlFor="active" className="menu-btn"><i class="fas fa-bars"></i></label>
                    <div class="wrapper">
                        <ul>
                            <li><NavLink className="navicon" to="/">Home</NavLink></li>
                            <li><NavLink className="navicon" to="/about">About</NavLink></li>
                            <li><NavLink className="navicon" to="/event">Events</NavLink></li>
                            <li><NavLink className="navicon" to="/partner">Partners</NavLink></li>
                            <li><NavLink className="navicon" to="/cources">Courses</NavLink></li>
                        </ul>
                    </div>
                    
            </div>
        </>
    );
}

export default Navigation;