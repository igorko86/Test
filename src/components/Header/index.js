import React from "react";

import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_container">
                    <div className="logo">logo</div>
                    <div className="text">
                        <p className="header_text">text</p>

                        <p className="header_text">text</p>
                        <p className="header_text">text</p>
                        <p className="header_text">text</p>
                        <p className="header_text">text</p>
                        <p className="header_text">text</p>
                    </div>

                    <div className="sign">
                        <a href="" className="sing_link">Sign in</a>
                        <a href="" className="sing_link">Sign up</a>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Header;