import React from "react";

const Dropdown = () => {
    return (
        <>
            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item text-white" href="#">Action</a></li>
                <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
            </ul>
        </>
    )
}

export default Dropdown;