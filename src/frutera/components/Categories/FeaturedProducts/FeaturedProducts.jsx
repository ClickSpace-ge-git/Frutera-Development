import './FeaturedProducts.scss'
import {useEffect, useState} from "react";
import {refresher} from "../../../../Utils/axios";
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

export default function FeaturedProducts() {
   const [productsList,setProductsList] = useState([])
   const [categories,setCategories] = useState([])
   const [loading,setLoading] = useState(true)
   const {t} = useTranslation()

   let navigate = useNavigate()

   const loadingPage = async () => {
      try{
         setProductsList(FeaturedProductsList)
         setCategories([])
         if( productsList!= null){
            setLoading(false)
         }
      }catch (err){

      }
   }

   useEffect(() => {
      loadingPage()
      refresher(loadingPage)
   },[])

   function ShowFeaturedProductsList(props,navigate) {
      return (
          props.map( product => {
             return (
                 <div className="FeaturedProductCardDiv" key={product.id}>
                    <div className='FPCD_UpperPart'>
                       <div className="FPCD_reaction">
                          <i className="fa-solid fa-heart"></i>
                       </div>
                       {product.discount === null ? (
                               <></>
                           ) :
                           (
                               <div className='FPCD_discount'>
                                  {product.discount}% Sale
                               </div>
                           )
                       }
                    </div>

                    <div className='FPCD_image' onClick={(e) => {navigate("/products/"+product.id)}}>
                       <img src={product.image} alt={`Image_${product.id + 1}`}/>
                    </div>

                    <div className='FPCD_text'>
                       <div className='FPCD_title'><h3>{product.name}</h3></div>
                       <div className='FPCD_priceDiv'>
                          <div className='FPCD_price'>
                             {product.discount === null ? (
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
                       <div className='FPCD_width'><h4>{product.weight} g</h4></div>
                    </div>

                    <div className="FPCD_action">
                       <button className='FPCD_Btn'>
                          {t('add2cart')}
                          <i className="fa-solid fa-cart-shopping"></i>
                       </button>
                    </div>
                 </div>
             )
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
                     <li className='FPnavBtn marked'><button >All</button></li>
                     <li className='FPnavBtn'><button>Dried Fruit</button></li>
                     <li className='FPnavBtn'><button>Fruit Chips</button></li>
                  </ul>
               </div>

               <div className='FeatureProductListCont'>
                  <div className="FeatureProductsListDiv">

                     {!loading && productsList.length > 0 ? ShowFeaturedProductsList(productsList,navigate):""}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}