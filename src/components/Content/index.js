import React, {useEffect, useState} from "react";

import SelectItem from '../SelectItem';
import Sidebar from '../SideBar';

import "./Content.css";

const TopicBtns = () => {
    const topics = ['go', 'expect', 'bdd', 'assert'];

    return (
        <div className="center-block__btns d-flex">
            {topics.map(el => {
                return (
                    <button type="button"
                            className="btn btn-light rounded-pill topic-btn d-flex align-items-center justify-content-center">
                        {el}</button>
                )
            })
            }
        </div>
    )
}

function Content() {
    const [languages, setLanguages] = useState([]);
    const [showSelect, setShowSelect] = useState(false);
    const [nameLanguage, setNameLanguage] = useState("All");
    const [activeIndexElement, setActiveIndexElement] = useState(null);
    const BTN_LANGUAGE = 'language';

    const handleClick = (e) => {
        if (e.target.name === BTN_LANGUAGE) {
            setShowSelect(prevState => !prevState);
        } else {
            setShowSelect(false)
        }
        ;
    };

    useEffect(() => {
        fetch("https://api.github.com/users/a8m/repos")
            .then(response => response.json())
            .then(json => {
                setLanguages(filterRepetitiveLanguageNames(json));
            });

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {

    }, []);


    const filterRepetitiveLanguageNames = (items) => {
        const languagesName = [];

        items.forEach((item) => {
            if (item.language && !(languagesName.includes(item.language))) {
                languagesName.push(item.language);
            }
        });

        return languagesName;
    }
    return (
        <main className="container-xl main">
            <Sidebar/>
            <div className="content">
                <ul className="menu__list border-bottom">
                    <li className="menu__item">Overview</li>
                    <li className="menu__item active">Repositories <span className='menu__item-span'>93</span></li>
                    <li className="menu__item">Projects</li>
                    <li className="menu__item">Packages</li>
                </ul>

                <div className="search-block">
                    <input className="form-control flex-auto" type="search" placeholder="Search"
                           aria-label="Search"
                           value="exp"/>

                    <div className='search-block__btns'>
                        <button className="btn btn-light border">
                            Type: all
                        </button>
                        <div>
                            <button className="btn btn-light border" name={BTN_LANGUAGE}>
                                {`Languages: ${nameLanguage}`}
                            </button>
                            {showSelect && <SelectItem languages={languages} setNameLanguage={setNameLanguage}
                                                       setActiveIndexElement={setActiveIndexElement}
                                                       activeElement={activeIndexElement}/>}
                        </div>
                    </div>
                </div>

                <div className="border-top mt-3 d-flex justify-content-between pb-3 pt-3">
                    <p className="mb-0">1 result for repositories matching exp</p>
                    <div>
                        <a href="#" className="d-flex align-items-center text-decoration-none clear-filter__item">
                            <div
                                className="btn btn-secondary btn-clean d-flex align-items-center
                                justify-content-center mr-2 clear-filter__btn">x
                            </div>
                            Clear filter
                        </a>
                    </div>
                </div>

                <div className="center-block border-3 border-bottom border-top">
                    <a href="" className="center-block__link">expect</a>
                    <p>Minimalistic BDD-style assertions for Go (inspired by expect.js)</p>
                    <TopicBtns/>
                </div>
            </div>
        </main>
    )
}

export default Content;