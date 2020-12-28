import React from "react";

import "./Header.css";
import Dropdown from "./dropdown";

const LinkText = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link text-white" href="#">{props.value}</a>
        </li>
    )
}

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-xl">
                <a className="navbar-brand text-white" href="#">Logo</a>
                <button className="navbar-toggler color-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Dropdown/>
                        </li>
                        <LinkText value={'Team'}/>
                        <LinkText value={'Enterprise'}/>
                        <li className="nav-item dropdown">
                            <Dropdown/>
                        </li>
                        <LinkText value={'Marketplace'}/>
                        <li className="nav-item dropdown">
                            <Dropdown/>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                    </form>

                    <div className="d-flex justify-content-end">
                        <a className=" btn-link text-white">Sing in</a>
                        <a className=" btn-link text-white border border-white rounded-3">Sing up</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;