import {useEffect, useState} from "react";
import {refresher} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";

let productCardList = [
    {
        id: "0",
        name: "Pitted Black Prunes",
        weight: 100,
        price: 10.96,
        discount: 10,
        image: require("../../../images/ProductPage/ProductList/plum1.png")
    },

    {
        id: "1",
        name: "Dried Red Apple (Idared)",
        weight: 200,
        price: 11.96,
        discount: null,
        image: require("../../../images/ProductPage/ProductList/apple3.png")
    },

    {
        id: "2",
        name: "Dried Yellow Apple (Golden)",
        weight: 300,
        price: 13.96,
        discount: 30,
        image: require("../../../images/ProductPage/ProductList/apple4.png")
    },

    {
        id: "3",
        name: "Dried Red Apple (Jona Gold)",
        weight: 400,
        price: 14.96,
        discount: null,
        image: require("../../../images/ProductPage/ProductList/apple2.png")
    }
]

export default function PopularProducts() {
    const [productsList, setProductsList] = useState(null)
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate()

    const goToProduct = (props) =>{
        navigate("/products/" + props)
    }

    const loadingPage = async () => {
        try{
            setProductsList(productCardList)
            if( productsList!= null){
                setLoading(false)
                console.log(productsList)
            }
        }catch (err){

        }
    }

    useEffect(() => {
        loadingPage()
        refresher(loadingPage)
    },[])

    return (!loading && productsList.length > 0)? (
        productsList.map( product => {
            return (
                <>
                    <div className="OneProductCardDiv" onClick={(e) =>  {goToProduct(product.id)}}>
                        <div className='OPCD_UpperPart'>
                            <div className="OPCD_reaction">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            {product.discount === null ? (
                                    <></>
                                ) :
                                (
                                    <div className='OPCD_discount'>
                                        {product.discount}% Sale
                                    </div>
                                )
                            }
                        </div>

                        <div className='OPCD_image'>
                            <img src={product.image} alt={`00${product.id + 1}`} />
                        </div>

                        <div className='OPCD_text'>
                            <div className='OPCD_title'><h3>{product.name}</h3></div>
                            <div className='OPCD_priceDiv'>
                                <div className='OPCD_price'>
                                    {product.discount === null ? (
                                            <h4 className='OPCD_onlyPrice'>{product.price} GEL</h4>
                                        ) :
                                        (
                                            <div className='OPCD_onlyPriceWithDiscount'>
                                                <h4 className='OPCD_priceDiscount'>
                                                    {
                                                        Math.round((product.price * (product.discount / 100)) * 100) / 100
                                                    } GEL
                                                </h4>
                                                <h4 className='OPCD_OldPrice'>{product.price} GEL</h4>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='OPCD_width'><h4>{product.weight} g</h4></div>
                        </div>

                        <div className="OPCD_action">
                            <button className='OPCD_Btn'>
                                Add To Cart
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </>
            )
        })
    ) : ("")
}