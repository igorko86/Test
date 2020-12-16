import React, { useEffect, useState } from "react";

import SelectItem from '../SelectItem';
import Sidebar from '../SideBar';

import "./Content.css";

function Content() {
    const [languages, setLanguages] = useState([]);
    const [showSelect, setShowSelect] = useState(false);
    const [nameLanguage, setNameLanguage] = useState("All");
    const [activeIndexElement, setActiveIndexElement] = useState(null);

    const handleClick = (e) => {
        setShowSelect(prevState => !prevState);
    };

    useEffect(() => {
        fetch("https://api.github.com/users/a8m/repos")
            .then(response => response.json())
            .then(json => {
                setLanguages(filterRepetitiveLanguageNames(json));
            })
    }, []);

    const filterRepetitiveLanguageNames = (items) => {
        const languagesName = [];

        items.forEach((item) => {
            if(item.language && !(languagesName.includes(item.language))) {
                languagesName.push(item.language);
            }
        });

        return languagesName;
    }
    return (
        <main className="container main">
            <Sidebar />
            <div className="content">
                <ul className="menu_list">
                    <li className="menu_item">text</li>
                    <li className="menu_item active">text <span>93</span></li>
                    <li className="menu_item">text</li>
                    <li className="menu_item">text</li>
                </ul>
                <div className="top-block">
                    <h2>text</h2>
                    <p>text</p>
                    <button>button</button>
                </div>
                <div className="search-block">
                    <input type="text" value="exp" className="search-block__input"/>
                    <button className="btn btn-success" onClick={handleClick}>
                        Type: all
                    </button>
                    <div>
                        <button className="btn btn-success" onClick={handleClick}>
                            {`Languages: ${nameLanguage}`}
                        </button>
                        {showSelect && <SelectItem languages={languages} setNameLanguage={setNameLanguage} setActiveIndexElement={setActiveIndexElement} activeElement={activeIndexElement}/>}
                    </div>

                </div>
                <div className="center-block">
                    <a href="" className="center-block__link">link</a>
                    <div className="">
                        <p>text</p>
                    </div>
                    <div className="center-block__btns">
                        <button>button</button>
                        <button>button</button>
                        <button>button</button>
                        <button>button</button>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default Content;