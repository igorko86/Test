import React from "react";

import "./SideBar.css";

function UserInformation() {
    const aboutUser = ['@facebook', 'Tel Aviv, Israel', 'entgo.io', '@arielmashraki']
    return (
        <div className="sidebar__content border-bottom mt-4">
            {aboutUser.map(el => <p className="sidebar__text">{el}</p>)}
        </div>
    )
}

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="person">
                <img className="avatar" alt=""/>
                <div className="name">Name</div>
                <div className="login">a8m</div>
            </div>
            <div className="sidebar_btns d-flex">
                <button type="button" className="btn btn-light border border-gray rounded-3 mr-2 w-75">Follow
                </button>
                <button type="button" className="btn btn-light border border-gray rounded-3 w-25">...</button>
            </div>
            <UserInformation/>
            <div className='highlights-block mt-4 border-bottom'>
                <h5>Highlights</h5>
                <a href="" className='highlights__text'>Arctic Code Vault Contributor</a>
                <div className='border rounded-pill pl-2 pr-2 highlights-pro-block'>PRO</div>

            </div>

            <div>
                <h5>Organizations</h5>
            </div>
        </div>
    )
}

export default Sidebar;