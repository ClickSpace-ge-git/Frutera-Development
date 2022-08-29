import React, {useEffect} from 'react';
import {useState} from 'react'
import './productShowcase.scss'
import packPlum from "../../../images/ProductPages/packagedPlum.jpg"
import {useMatch} from "react-router-dom";




export default function ProductShowcase() {

    const [productsInfo, setProductsInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState("All")
    const id = useMatch("/products/:productId").params

    const loadingPage = () => {
        setProductsInfo({})
        if( productsInfo!= null){
            setLoading(false)
        }
    }

    useEffect(() => {
        loadingPage()
    },[])

    return (
                    <div className="productDesc">
                        <div className="images">
                            <img src={packPlum} className="mainImage" />
                            <div className="otherImages">
                                <img src={packPlum} />
                                <img src={packPlum} />
                                <img src={packPlum} />
                            </div>
                        </div>
                        <div className="description">
                            <h1>Dried whole plums (seedless) In a 150 gram package</h1>
                            <p>100% natural, without sugar additives, emulsifiers and preservatives. Relative humidity not more than 70%. Contains vitamins: A, B5, C, B1, B6, E, B6, B2, PP, B9, B4. 100 gr. of the product contains 225 kcal</p>
                            <h2 className="price">4.55 GEL</h2>
                            <div className="amountCart">
                                <p className="inpAmount">Input amount:</p>
                                <input id="amount" type="number" min="1" max="999" defaultValue="1"/>
                                <button id="addtocart">Add to cart</button>
                            </div>
                            <div className="favoriteHeart">
                                <input id="heart" type="checkbox" />
                                <label  for="heart">❤</label>
                                <label for="heart" id="favorite">Add to favorites</label>
                            </div>
                        </div>

                    </div>

    )
}