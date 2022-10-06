import './OneProduct.scss'
import {useEffect, useState} from "react";
import axios, {axiosPrivate, refresher, UseAxiosP} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {testProductsList} from "../../../Utils/data";

const PRODUCTURL = "api/Products/GetProductWithPictures/"

let oneProductDemo = {
   id: "0",
   name: "Test Product",
   weight: 100,
   price: 10.96,
   discount: 10,
   description: 
   `Fruit is the sweet, fleshy, edible part of a plant. 
   It generally contains seeds. Fruits are usually eaten raw, although 
   some varieties can be cooked. They come in a wide variety of colours, 
   shapes and flavours.Fruit is the sweet, fleshy, edible part of a plant. 
   It generally contains seeds. Fruits are usually eaten raw, although 
   some varieties can be cooked. They come in a wide variety of colours, 
   shapes and flavours.`,
   image: [
      require("../../../images/ProductPage/OneProduct/001.png"),
      require("../../../images/ProductPage/OneProduct/002.png"),
      require("../../../images/ProductPage/OneProduct/003.png"),
      require("../../../images/ProductPage/OneProduct/004.png"),
   ]
}

let productCardList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 10,
      image: require("../../../images/ProductPage/ProductList/apple1.png")
   },

   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../images/ProductPage/ProductList/apple5.png")
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../images/ProductPage/ProductList/peach2.png")
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/ProductList/plum2.png")
   }
]

const data =    {
       id: 0,
       name: "Dried sweet red apples (Jonagold)",
       price: 3.2,
       weight: 100,
       discount: 6.56,
       description: "100% natural, without sugar additives, emulsifiers and preservatives. " +
           "Relative humidity not more than 70%. Contains vitamins: A, PP, C, B, B1 and " +
           "pectins. 100 gr. of the product contains 235 kcal",
       images: [
          require("../../../images/ProductList/apple3.jpg"),
          require("../../../images/ProductList/apple2.jpg"),
          require("../../../images/ProductList/apple1.jpg"),
          require("../../../images/ProductList/apple4.jpg"),
          require("../../../images/ProductList/apple5.jpg"),
       ]
    }


export default function OneProduct() {
   const [productPage,setProductPage] = useState([])
   const [loading, setLoading] = useState(true)
   const [quantity,setQuantity] = useState(1)
   const {t} = useTranslation()
   const [testProduct,setTestProducts] = useState(testProductsList)

   let navigate = useNavigate()

   const loadingPage = async () => {
      try{
         //setProductPage(oneProductDemo)
         const url = window.location.href.split("/")
         //const response = await axios.get(PRODUCTURL + url[4])
         setProductPage(data)
         if( productPage!= null){
            setLoading(false)
         }
      }catch (err){
         if(err.message === 'Request failed with status code 400'){
            navigate("/products")
         }
      }
   }

   const changeQuantity = (e) => {
      const re = /^[0-9\b]+$/;
      if(e.target.value === '' || re.test(e.target.value)){
         setQuantity(Number(e.target.value))
      }
   }

   const decr = () => {
      if(quantity > 1){
         setQuantity(quantity-1)
      }
   }

   useEffect(() => {
      loadingPage()
   },[])

   const AddToCart = async (props) =>{
      if(JSON.parse(sessionStorage.getItem("token")).accessToken === "none"){
         navigate("/login",{replace:true})
      }
      const typingTimeOut = setTimeout(async function() {
         const response = await axiosPrivate('/api/Cart/AddInCart/' + productPage.id + '?quantity=' + quantity);
         console.log(response)
         if(response.status === 401){
            navigate("/login",{replace:true})
         }
      }, 500);
      return () => {
         clearTimeout(typingTimeOut);
      }
   }

   function ShowProductCardList(props) {
      return (
          props.map( product => {
             return (
                    <div className="OneProductCardDiv" key={product.id}>
                       <div className='OPCD_UpperPart'>
                          <div className="OPCD_reaction">
                             <i class="fa-solid fa-heart"></i>
                          </div>
                          {product.discount === null ? (
                                  <></>
                              ) :
                              (
                                  <div className='OPCD_discount'>
                                     {product.discount}% {t('sale')}
                                  </div>
                              )
                          }
                       </div>

                       <div className='OPCD_image'>
                          <img src={product.images[0]} alt={`00${product.id + 1}`}
                               onClick={(e) => {navigate("/products/"+product.id)}} />
                       </div>

                       <div className='OPCD_text'>
                          <div className='OPCD_title'><h3>{product.name}</h3></div>
                          <div className='OPCD_priceDiv'>
                             <div className='OPCD_price'>
                                {true ? (
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
                          {/*<div className='OPCD_width'><h4>{product.weight} g</h4></div>*/}
                       </div>

                       <div className="OPCD_action">
                          <button className='OPCD_Btn' onClick={(e) => {AddToCart()}}>
                             {t('add2cart')}
                             <i class="fa-solid fa-cart-shopping"></i>
                          </button>
                       </div>
                    </div>
             )
          })
      )
   }

   return (
      <>
         <div className="OneProductContainer">
            <div className="OneProductContainer2">
               {!loading && productPage !== null?
                   <div className="OneProductCard">
                      <div className="OP_imagePart">
                         <div className='OP_imagePart_UpperPart'>
                            <img src={productPage.images[0]} alt="001.png"/>
                         </div>
                         <div className='OP_imagePart_LowerParts'>
                            <img src={productPage.images[0]} alt="001.png"/>
                            <img src={productPage.images[1]} alt="002.png"/>
                            <img src={productPage.images[2]} alt="003.png"/>
                            <img src={productPage.images[3]} alt="004.png"/>
                         </div>
                      </div>
                      <div className="OP_textPart">
                         <div className="OP_MainTitle"><h1>{productPage.name}</h1></div>
                         <div className="OP_description">
                            <p>
                               {productPage.description}
                            </p>
                         </div>
                         <div className="OP_price">
                            <h2>{productPage.price} GEL</h2>
                         </div>
                         <div className="OP_actions">
                            <div className="OP_actions_LeftPart">
                               <h3>Quantity: </h3>
                               <button onClick={(e) => {setQuantity(quantity + 1)}}>+</button>
                               <input type="text" value={quantity} onChange={changeQuantity}/>
                               <button onClick={(e) => {decr()}}>-</button>
                            </div>

                            <div className="OP_actions_RightPart">
                               <button className="OP_Btn" onClick={(e) => {AddToCart()}}>
                                  {t('add2cart')}
                                  <i className="fa-solid fa-cart-shopping"></i>
                               </button>

                               <button className="PCD_Btn_favorite">
                                  <i className="fa-solid fa-heart"></i>
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                   :""}
               {/*<div className="OP_moreProducts">
                  <div className="OP_moreProducts_Title">
                     <h1>{t('similar')} {t('products')}</h1>
                  </div>
                  <div className="OP_moreProducts_List">
                     {ShowProductCardList(productCardList)}
                  </div>
               </div>*/}
            </div>
         </div>
      </>
   )
}