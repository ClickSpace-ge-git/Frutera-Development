import React, {useEffect} from 'react';
import {useState} from 'react'
import './leftside.scss'
import BlogsListElement from "../Blogs/BlogsListElement";
import LeftSideElement from "./LeftSideElement";

let demoFiltersList = [
    {
        filter:"All",
    },
    {
        filter:"Featured",
    },
    {
        filter:"Dried Black Plums",
    },
    {
        filter:"Dried Apples",
    },
    {
        filter:"Dried Pears",
    },
    {
        filter:"Dried Pears",
    },
    {
        filter:"Dried Peaches",
    },
    {
        filter:"Apple",
    },
    {
        filter:"Apple Chips",
    },
]

export default function LeftSide({props,filter}) {
    const [filtersList, setFiltersList] = useState({})
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState("All")

    const loadingPage = () => {
        setFiltersList(demoFiltersList)
        if( filtersList!= null){
            setLoading(false)
        }
    }

    const setFilter = (props) => {

    }

    useEffect(() => {
        loadingPage()
    },[])

    return (
        // <div className="page">
            <div className="leftSide">
                <ul className="selection">
                    {!loading && filtersList.length >0? filtersList.map(((item,index) =>
                            <LeftSideElement key={index} props={item} status={filterClass} filter={setFilterClass}/>
                     )): "" }
                </ul>
            </div>
        // </div>
    )
}