import React from 'react';
import './productcard.scss'
import qliavis from "../../../images/ProductPages/qliavisChiri.jpeg"
import {useNavigate} from "react-router-dom";


export default function ProductCard(){
    let navigate = useNavigate()
    function routeToProduct(){
        navigate("/product/123")
    }

    return(
        <div className="card">
            <div className="hider">
                <img src={qliavis} />
            </div>
            <div className="cardDesc">
                <h1>11.50GEL</h1>
                <p>Dried black plum - seedless (sliced in half) In a 150 gram package</p>
                <h2>Dried whole plums</h2>
                <button onClick={()=>{routeToProduct()}}>Add to cart</button>
            </div>
        </div>
    )

    

}