import React from 'react';
import './productcard.scss'
import {useNavigate} from "react-router-dom";


export default function ProductCard({props}){
    let navigate = useNavigate()
    function routeToProduct(){
        navigate("/products/"+props.id)
    }

    return(
        <div className="card">
            <div className="hider">
                <img src={props.img} />
            </div>
            <div className="cardDesc">
                <h1>{props.price}GEL</h1>
                <p>{props.text}</p>
                <h2>{props.title}</h2>
                <button onClick={()=>{routeToProduct()}}>Add to cart</button>
            </div>
        </div>
    )

    

}