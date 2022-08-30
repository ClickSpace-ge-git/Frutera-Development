import React from 'react';
import './productcard.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {authenticateUser} from "../../../Utils/axios";


export default function ProductCard({props}){
    let navigate = useNavigate()
    let auth = authenticateUser()
    let location = useLocation()

    function routeToProduct(){
        navigate("/products/"+props.id)
    }

    const addToCart = () => {
        return auth === true ? (
            console.log("added")
        ) : (
            navigate("/login",{replace: true, state: location.pathname})
        );
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
                <button onClick={()=>{routeToProduct()}}>See Options</button>
                <button onClick={()=>{addToCart()}}>Add to cart</button>
            </div>
        </div>
    )

    

}