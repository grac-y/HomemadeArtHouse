import React from "react";
import './navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col col-1" >
                            <Link className="logo_icon"  to="/"></Link>
                            <div className="logo_name" to="/index">HomemadeArtHouse</div>
                        </div>
                        <div className={`col col-2 ${showMenu ? "active" : ""}`}>
                            <div className="nav">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/explore">Explore</Link></li>
                                </ul>
                            </div>
                            <div className="buttons">
                                <Link to="/bookmark">Saved</Link>
                            </div>
                        </div>
                        <div className={`menu_btn ${showMenu ? "active" : ""}`} onClick={toggleMenu} >
                        <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;