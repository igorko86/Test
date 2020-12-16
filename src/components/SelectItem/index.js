import React, { useEffect, useState } from "react";

import "./SelectItem.css";

function SelectItem({languages, setNameLanguage, activeElement, setActiveIndexElement}) {
    const clickHandler = (e) => {
        const { index } = e.target.dataset;

        setNameLanguage(findItemByIndex(+index));
        setActiveIndexElement(+index);
    }

    const findItemByIndex = (index) => languages.find((_, i) => i === index);

    return (
        <div className="select-block">
            <ul className="select-block__list">
                {languages.map((language, index) => {
                    const activeClassName = activeElement === index ? "active_li" : '';

                    return (
                        <li key={Date.now() + index} className="select-block__item" data-index={index}
                            onClick={clickHandler}>{language}
                            {activeClassName && <span className={activeClassName}>&#10003;</span>}
                        </li>)
                })
                }
            </ul>
        </div>
    )
}

export default SelectItem;