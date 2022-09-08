import './ProductsList.scss'
import {useEffect, useState} from "react";
import {refresher} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";

let productCardList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 30,
      image: require("../../../images/ProductPage/OneProduct/001.png")
   },

   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/001.png")
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../images/ProductPage/OneProduct/002.png")
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/002.png")
   },

   {
      id: "4",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 10,
      image: require("../../../images/ProductPage/OneProduct/003.png")
   },

   {
      id: "5",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/004.png")
   },

   {
      id: "6",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../images/ProductPage/OneProduct/004.png")
   },

   {
      id: "7",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/001.png")
   }
]

let categoryListDemo = [
   {
      id: "0",
      name: "Dried Apples",
      image: require("../../../images/ProductPage/ProductCategories/dried_apple_img.png"),
   },

   {
      id: "1",
      name: "Dried Plums",
      image: require("../../../images/ProductPage/ProductCategories/dried_plum_img.png"),
   },

   {
      id: "2",
      name: "Dried Pears",
      image: require("../../../images/ProductPage/ProductCategories/dried_pear_img.png"),
   },

   {
      id: "3",
      name: "Dried Peaches",
      image: require("../../../images/ProductPage/ProductCategories/dried_peach_img.png"),
   }
]

function ShowCategoryList(props) {
   return (
      props.map( category => {
         return (
            <>
               <div className="CategoryCardDiv" key={category.id}>
                  <div className='CCD_image'>
                     <img src={category.image} alt={`00${category.id + 1}`} />
                  </div>

                  <div className='CCD_title'><h3>{category.name}</h3></div>
               </div>
            </>
         )
      })
   )
}

function ShowProductCardList(props,goToProduct) {

   return (
       props.map( product => {
         return (
            <>
               <div className="ProductCardDiv" key={product.id} onClick={(e) => {goToProduct(product.id)}}>
                  <div className='PCD_UpperPart'>
                     <div className="PCD_reaction">
                        <i className="fa-solid fa-heart"></i>
                     </div>
                     {product.discount === null ? (
                           <></>
                        ) :
                        (
                           <div className='PCD_discount'>
                              {product.discount}% Sale
                           </div>
                        )
                     }
                  </div>

                  <div className='PCD_image'>
                     <img src={product.image} alt={`00${product.id + 1}`} />
                  </div>

                  <div className='PCD_text'>
                     <div className='PCD_title'><h3>{product.name}</h3></div>
                     <div className='PCD_priceDiv'>
                        <div className='PCD_price'>
                           {product.discount === null ? (
                                 <h4 className='PCD_onlyPrice'>{product.price} GEL</h4>
                              ) :
                              (
                                 <div className='PCD_onlyPriceWithDiscount'>
                                    <h4 className='PCD_priceDiscount'>
                                       {
                                          Math.round((product.price - (product.price * (product.discount / 100))) * 100) / 100
                                       } GEL
                                    </h4>
                                    <h4 className='PCD_OldPrice'>{product.price} GEL</h4>
                                 </div>
                              )
                           }
                        </div>
                     </div>
                     <div className='PCD_width'><h4>{product.weight} g</h4></div>
                  </div>

                  <div className="PCD_action">
                     <button className='PCD_Btn'>
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

export default function ProductsList() {
   const [productList,setProductPage] = useState([])
   const categoryList = categoryListDemo
   const [loading, setLoading] = useState(true)
   let navigate = useNavigate()

   const goToProduct = (props) =>{
      navigate("/products/" + props)
   }

   const loadingPage = async () => {
      try{
         setProductPage(productCardList)
         if( productList != null){
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
      <div className="ProductsListContainer">
         <div className="ProductsListContainer2">
            <div className='CategorieListCont'>
               <h1 className='CLHeaderTitle'>CATEGORIES</h1>
               <div className="CategorieListDiv">
                  {categoryList.length > 0 ? ShowCategoryList(categoryList):""}
               </div>
            </div>

            <div className='ProductListCont'>
               <h1 className='PLHeaderTitle'>FEATURED PRODUCTS</h1>
               <div className="ProductsListDiv">
                  {!loading && productList.length > 0 ? ShowProductCardList(productList,goToProduct):""}
               </div>
            </div>
         </div>
      </div>
      </>
   )
}