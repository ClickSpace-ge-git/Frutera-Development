import React from 'react';
import './product.css'
import packPlum from "../../images/Frutera/fruit.png"
import qliavis from "../../images/Frutera/fruit.png"
import Header2 from '../components/Header2/Header2';

export default function Product() {
    return (
        <div className="page">
            <div className="mainProduct">
                <div className="leftSide">
                    <ul className="selection">
                        <li>Featured</li>
                        <li>Dried Black Plums</li>
                        <li>Dried Apples</li>
                        <li>Dried Pears</li>
                        <li>Dried Peaches</li>
                        <li>Apple</li>
                        <li>Apple Chips</li>
                    </ul>
                </div>
                <div className="productDesc">
                    <div className="images">
                        <img src={packPlum} className="mainImage" />
                        <div className="otherImages">
                            <h2 className="arrow">←</h2>
                            <img src={packPlum} />
                            <img src={packPlum} />
                            <img src={packPlum} />
                            <h2 className="arrow">→</h2>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Products / Dried black plums</h4>
                        <h1>Dried whole plums (seedless)In a 150 gram package</h1>
                        <h3>100% natural, without sugar additives, emulsifiers and preservatives. Relative humidity not more than 70%. Contains vitamins: A, B5, C, B1, B6, E, B6, B2, PP, B9, B4. 100 gr. of the product contains 225 kcal</h3>
                        <h2>4.55₾</h2>
                        <div className="amountCart">
                            <button id="addto">-</button>
                            <input id="amount"></input>
                            <button id="subto">+</button>
                            <button id="addtocart">ADD TO CART</button>
                        </div>
                        <button id="favorite">Add to favorites</button>
                    </div>

                </div>
            </div>
            <div className="recomended">
                <div className="associated">
                    <h2 className="recomendedBottom">←</h2>
                    <h1 className="recomendedBottom">Associated products</h1>
                    <h2 className="recomendedBottom">→</h2>
                </div>

                <div className="cards">

                    <div id="card">
                        <img src={qliavis} />
                        <div className="cardDesc">
                            <h1>11.50₾</h1>
                            <h2>კურკისგან თავისუფალი შავი ქლიავის ჩირი (გაპობილი) 150 გრამიანი შეფუთვით</h2>
                            <h2>შავი ქლიავის ჩირი</h2>
                            <button>კალათაში დამატება</button>
                        </div>

                    </div>

                    <div id="card">
                        <img src={qliavis} />
                        <div className="cardDesc">
                            <h1>11.50₾</h1>
                            <h2>კურკისგან თავისუფალი შავი ქლიავის ჩირი (გაპობილი) 150 გრამიანი შეფუთვით</h2>
                            <h2>შავი ქლიავის ჩირი</h2>
                            <button>კალათაში დამატება</button>
                        </div>
                        

                    </div>

                    <div id="card">
                        <img src={packPlum} />
                        <div className="cardDesc">
                            <h1>11.50₾</h1>
                            <h2>კურკისგან თავისუფალი შავი ქლიავის ჩირი (გაპობილი) 150 გრამიანი შეფუთვით</h2>
                            <h2>შავი ქლიავის ჩირი</h2>
                            <button>კალათაში დამატება</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    )
 }