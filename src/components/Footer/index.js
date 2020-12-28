import React from "react";

import "./Footer.css";

function Footer_nav() {
    const nav = ['© 2020 GitHub, Inc.', 'Terms', 'Privacy', 'Security',
        'Status', 'Help', 'LOGO', 'Contact GitHub',
        'Pricing', 'API', 'Training', 'Blog', 'About']

    return (
        <div className='footer__nav'>
            {nav.map((el, index) => index ? <a href="#">{el}</a> : <p>{el}</p>)}
        </div>
    )
}

function Footer() {
    return (
        <div className="container-xl">
            <footer className="footer">
                <Footer_nav/>
            </footer>
        </div>
    )
}

export default Footer;