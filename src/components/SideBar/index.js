import React from "react";

import "./SideBar.css";

function Sidebar() {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="person">
                    <img className="avatar" alt=""/>
                    <div className="name">Name</div>
                    <div className="login">a8m</div>
                </div>
                <div className="sidebar_btns">
                    <button className="btn btn_follow">follow</button>
                    <button className="btn">...</button>
                </div>
                <div className="sidebar__content">
                    <p className="sidebar__text">text</p>
                    <p className="sidebar__text">text</p>
                    <p className="sidebar__text">text</p>
                    <p className="sidebar__text">text</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;