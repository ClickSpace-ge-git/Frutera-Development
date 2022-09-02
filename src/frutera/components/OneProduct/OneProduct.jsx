import './OneProduct.scss'
import {useEffect, useState} from "react";
import {refresher} from "../../../Utils/axios";
import PopularProducts from "./PopularProducts";

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

export default function OneProduct() {
   const [productPage,setProductPage] = useState([])
   const [loading, setLoading] = useState(true)

   const loadingPage = async () => {
      try{
         setProductPage(oneProductDemo)
         if( productPage!= null){
            setLoading(false)
         }
      }catch (err){

      }
   }

   useEffect(() => {
      loadingPage()
      refresher(loadingPage)
   },[])

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
                               <button>+</button>
                               <input type="text"/>
                               <button>-</button>
                            </div>

                            <div className="OP_actions_RightPart">
                               <button className="OP_Btn">
                                  Add To Cart
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
            </div>
         </div>
      </>
   )
}