import './OneProduct.scss'
import {useEffect, useState} from "react";
import {refresher, UseAxiosP} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

let oneProductDemo = {
   id: "0",
   name: "Pitted Black Prunes",
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


export default function OneProduct() {
   const [productPage,setProductPage] = useState([])
   const [loading, setLoading] = useState(true)
   const [quantity,setQuantity] = useState(1)
   const {t} = useTranslation()
   let axsios = UseAxiosP

   let navigate = useNavigate()

   const loadingPage = async () => {
      try{
         setProductPage(oneProductDemo)
         if( productPage!= null){
            setLoading(false)
         }
      }catch (err){

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
      //refresher(loadingPage)
   },[])

   const AddToCart = async () =>{
      const typingTimeOut = setTimeout(async function() {
         const response = await axsios('/api/Cart/AddInCart/' + productPage.id + '?quantity=' + quantity);
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
                          <img src={product.image} alt={`00${product.id + 1}`}
                               onClick={(e) => {navigate("/products/"+product.id)}} />
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
                            <img src={productPage.image[0]} alt="001.png"/>
                         </div>
                         <div className='OP_imagePart_LowerParts'>
                            <img src={productPage.image[0]} alt="001.png"/>
                            <img src={productPage.image[1]} alt="002.png"/>
                            <img src={productPage.image[2]} alt="003.png"/>
                            <img src={productPage.image[3]} alt="004.png"/>
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