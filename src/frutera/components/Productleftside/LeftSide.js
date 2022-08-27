import React from 'react';
import {useState} from 'react'
import './leftside.scss'



export default function LeftSide() {

    const [isActive0, setActive0] = useState(false);
    const [isActive1, setActive1] = useState(true);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);
    const [isActive5, setActive5] = useState(false);
    const [isActive6, setActive6] = useState(false);

    const toggleClass0 = () => {
        setActive0(!isActive0);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
    }
    const toggleClass1 = () => {
        setActive1(!isActive1);
        setActive0(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
    }
    const toggleClass2 = () => {
        setActive2(!isActive2);
        setActive1(false);
        setActive0(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
    }
    const toggleClass3 = () => {
        setActive3(!isActive3);
        setActive1(false);
        setActive2(false);
        setActive0(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
    }
    const toggleClass4 = () => {
        setActive4(!isActive4);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive0(false);
        setActive5(false);
        setActive6(false);
    }
    const toggleClass5 = () => {
        setActive5(!isActive5);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive0(false);
        setActive6(false);
    }
    const toggleClass6 = () => {
        setActive6(!isActive6);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive0(false);
    }



    return (
        // <div className="page">
            <div className="leftSide">
                <ul className="selection">
                    <li className={isActive0 ? "liActive" : null} onClick={toggleClass0}>Featured</li>
                    <li className={isActive1 ? "liActive" : null} onClick={toggleClass1}>Dried Black Plums</li>
                    <li className={isActive2 ? "liActive" : null} onClick={toggleClass2}>Dried Apples</li>
                    <li className={isActive3 ? "liActive" : null} onClick={toggleClass3}>Dried Pears</li>
                    <li className={isActive4 ? "liActive" : null} onClick={toggleClass4}>Dried Peaches</li>
                    <li className={isActive5 ? "liActive" : null} onClick={toggleClass5}>Apple</li>
                    <li className={isActive6 ? "liActive" : null} onClick={toggleClass6}>Apple Chips</li>
                </ul>
            </div>
        // </div>
    )
}