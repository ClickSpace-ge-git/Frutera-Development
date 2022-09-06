import './FeaturedProducts.scss'
import {useEffect, useState} from "react";
import {refresher} from "../../../../Utils/axios";

let FeaturedProductsList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 10,
      image: require("../../../../images/FeaturedProducts/apple3.png")
   },

   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../../images/FeaturedProducts/apple1.png")
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../../images/FeaturedProducts/apple2.png")
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../../images/FeaturedProducts/apple4.png")
   },

   {
      id: "4",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 10,
      image: require("../../../../images/FeaturedProducts/apple3.png")
   },

   {
      id: "5",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../../images/FeaturedProducts/apple1.png")
   },

   {
      id: "6",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../../images/FeaturedProducts/apple2.png")
   },

   {
      id: "7",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../../images/FeaturedProducts/apple4.png")
   }
]

function ShowFeaturedProductsList() {
   return (
      FeaturedProductsList.map( product => {
         return (
            <>
               <div className="FeaturedProductCardDiv">
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

                  <div className='FPCD_image'>
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
                        Add To Cart
                        <i className="fa-solid fa-cart-shopping"></i>
                     </button>
                  </div>
               </div>
            </>
         )
      })
   )
}
function Filter(n) {
   var product = document.getElementsByClassName("product")
   var list = ["all", "driedFruit", "fruitChips"]
   for (var key = 0; key < product.length; key++){
      if((product[key].id === list[n]) || (list[n] === "all")) {
         product[key].className = product[key].className.replace(" hide", " none")
      } else {
         product[key].className = product[key].className.replace(" none", " hide")
      }
   }
}

function ChangeProductType(i) {
   var type = document.getElementsByClassName("FPnavBtn")
   for(var k = 0; k < type.length; k++) {
      type[k].className = "FPnavBtn"
   }
   type[i].className += " marked"
   Filter(i);
}

export default function FeaturedProducts() {
   const [categories,setCategories] = useState([])
   const [loading,setLoading] = useState(true)

   const loadingPage = async () => {
      try{
         setCategories([])
         if( categories!= null){
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
         <div className='FeaturedProducts_container'>
            <div className='FeaturedProducts_container2'>
               <div className='FP_UpperPart'>
                  <h1 className='FP_Header'>Most Popular Product</h1>
                  <ul className='FP_categories'>
                     <li className='FPnavBtn marked'><button onClick={() => {ChangeProductType(0)}}>All</button></li>
                     <li className='FPnavBtn'><button onClick={() => {ChangeProductType(1)}}>Dried Fruit</button></li>
                     <li className='FPnavBtn'><button onClick={() => {ChangeProductType(2)}}>Fruit Chips</button></li>
                  </ul>
               </div>

               <div className='FeatureProductListCont'>
                  <div className="FeatureProductsListDiv">
                     {ShowFeaturedProductsList()}
                     {/*{!loading && productList.length > 0 ? ShowProductCardList(productList,goToProduct):""}*/}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}