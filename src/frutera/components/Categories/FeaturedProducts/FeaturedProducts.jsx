import './FeaturedProducts.scss'
import {useEffect, useState} from "react";
import axios, {axiosPrivate, refresher} from "../../../../Utils/axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

let FeaturedProductsList = [
    {
        id: "0",
        name: "Pitted Black Prunes",
        weight: 100,
        price: 10.96,
        discount: 10,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "1",
        name: "Dried Red Apple (Idared)",
        weight: 200,
        price: 11.96,
        discount: null,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "2",
        name: "Dried Yellow Apple (Golden)",
        weight: 300,
        price: 13.96,
        discount: 30,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "3",
        name: "Dried Red Apple (Jona Gold)",
        weight: 400,
        price: 14.96,
        discount: null,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "4",
        name: "Pitted Black Prunes",
        weight: 100,
        price: 10.96,
        discount: 10,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "5",
        name: "Dried Red Apple (Idared)",
        weight: 200,
        price: 11.96,
        discount: null,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "6",
        name: "Dried Yellow Apple (Golden)",
        weight: 300,
        price: 13.96,
        discount: 30,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    },

    {
        id: "7",
        name: "Dried Red Apple (Jona Gold)",
        weight: 400,
        price: 14.96,
        discount: null,
        image: require("../../../../images/FeaturedProducts/apple1.PNG")
    }
]

const demoCats = [
    {
        id:1,
        name:"apples"
    },
    {
        id:2,
        name:"pears"
    },
    {
        id:3,
        name:"chips"
    }
]

export default function FeaturedProducts() {
    const [productsList, setProductsList] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadCat, setLoadCat] = useState(0)
    const {t} = useTranslation()

    let navigate = useNavigate()

    const loadCats = async (props) => {
        if(props === "0"){
            const response = await (await axios.get("/api/Products/GetAllProductsWithPictures/"))
            setProductsList(response?.data)
        }else{
            const response = await (await axios.get("/api/Products/GetProductWithPicturesBySubCategoryId/" + props))
            setProductsList(response?.data)
        }
    }

    const loadingPage = async () => {
        try {
            if(loadCat === 0){
                const response = await (await axios.get("/api/Products/GetAllProductsWithPictures"))
                setProductsList(response?.data)
            }else{
                const response = await (await axios.get("/api/Products/GetProductWithPicturesBySubCategoryId/" + loadCat))
                setProductsList(response?.data)
            }
            const response2 = await (await axios.get("/api/subcategory/GetSubCategories"))
            //setProductsList(FeaturedProductsList)
            setCategories(response2?.data)
            if (productsList != null ) {
                setLoading(false)
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        loadingPage()
        //refresherJSON.parse(sessionStorage.getItem("token").accessToken === "none")(loadingPage)
    }, [])

    function ShowFeaturedProductsList(props, navigate) {

        const AddToCart = async (props) =>{
            if(JSON.parse(sessionStorage.getItem("token")).accessToken === "none"){
                navigate("/login",{replace:true})
            }
            const typingTimeOut = setTimeout(async function() {
                const response = await axiosPrivate('/api/Cart/AddInCart/' + props + '?quantity=' + 1);
                console.log(response.status)
                if(response?.status === 401){
                    navigate("/login",{replace:true})
                }
            }, 500);
            return () => {
                clearTimeout(typingTimeOut);
            }
        }

        return (
            props.map(product => {
                return (
                    <div className="FeaturedProductCardDiv" key={product.id}>
                        <div className='FPCD_UpperPart'>
                            <div className="FPCD_reaction">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            {true ? (
                                    <></>
                                ) :
                                (
                                    <div className='FPCD_discount'>
                                        {product.discount}% Sale
                                    </div>
                                )
                            }
                        </div>

                        <div className='FPCD_image' onClick={(e) => {
                            navigate("/products/" + product.id)
                        }}>
                            <img src={product.pictures[0]} alt={`Image_${product.id + 1}`}/>
                        </div>

                        <div className='FPCD_text'>
                            <div className='FPCD_title'><h3>{product.name}</h3></div>
                            <div className='FPCD_priceDiv'>
                                <div className='FPCD_price'>
                                    {true ? (
                                            <h4 className='FPCD_onlyPrice'>{product.price} GEL</h4>
                                        ) :
                                        (
                                            <div className='FPCD_onlyPriceWithDiscount'>
                                                <h4 className='FPCD_priceDiscount'>
                                                    {
                                                        Math.round((product.price * (product.discount / 100)) * 100) / 100
                                                    } GEL
                                                </h4>
                                                <h4 className='FPCD_OldPrice'>{product.price} GEL</h4>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {/*<div className='FPCD_width'><h4>{product.weight} g</h4></div>*/}
                        </div>

                        <div className="FPCD_action">
                            <button className='FPCD_Btn' onClick={(e) => {AddToCart(product.id)}}>
                                {t('add2cart')}
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                )
            })
        )
    }

    function mapCategories(props,load ) {
        return (
            props.map(category => {
                {
                    return(
                        category.id === loadCat ?
                            <li className='FPnavBtn marked' key={category.id}>
                                <button onClick={(e) => {setLoadCat(category.id);}}>{category.name}</button></li> :
                            <li className='FPnavBtn' key={category.id}  onClick={(e) => {setLoadCat(category.id);load(category.id)}}>
                                <button onClick={(e) => {setLoadCat(category.id);}}>{category.name}</button></li>
                    )
                }
            })
        )
    }


    return (
        <>
            <div className='FeaturedProducts_container'>
                <div className='FeaturedProducts_container2'>
                    <div className='FP_UpperPart'>
                        <h1 className='FP_Header'>{t('mostpoppro')}</h1>
                        <ul className='FP_categories'>
                            {loadCat === 0?
                            <li className='FPnavBtn marked'>
                                <button onClick={(e) => {setLoadCat("0");loadCats("0")}}>All</button>
                            </li>:
                                <li className='FPnavBtn'>
                                    <button onClick={(e) => {setLoadCat("0");loadCats("0")}}>All</button>
                                </li>
                            }
                            {!loading && categories.length > 0 ? mapCategories(categories,loadCats):""}
                        </ul>
                    </div>

                    <div className='FeatureProductListCont'>
                        <div className="FeatureProductsListDiv">

                            {!loading && productsList.length > 0 ? ShowFeaturedProductsList(productsList, navigate) : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}