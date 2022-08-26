import React from 'react';
import {useState} from 'react'
import './styles/productCard.css'
import packPlum from "./images/packagedPlum.jpg"
import kurkisGareshe from "./images/kurkisGaresheChiri.jpg"
import qliavis from "./images/qliavisChiri.jpeg"


export default function productCard(){

    return(
        // <div className="page">
        <div className="card">
            <div className="hider">
                <img src={qliavis} />
            </div>
            <div className="cardDesc">
                <h1>11.50GEL</h1>
                <p>Dried black plum - seedless (sliced in half) In a 150 gram package</p>
                <h2>Dried whole plums</h2>
                <button>Add to cart</button>
            </div>
        </div>

        //     {/* <div className="card">
        //         <div className="hider">
        //             <img src={packPlum} />
        //         </div>
        //         <div className="cardDesc">
        //             <h1><s>12.99 GEL</s> 11.99 GEL</h1>
        //             <p>Dried black plum - seedless (sliced in half) In a 150 gram package</p>
        //             <h2>Dried whole plums</h2>
        //             <button>Add to cart</button>
        //         </div>
        //     </div> */}
        // // </div>


    )

    

}