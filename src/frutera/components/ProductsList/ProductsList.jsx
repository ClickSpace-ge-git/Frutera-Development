import './ProductsList.scss'
import {useEffect, useState} from "react";
import axios, {axiosPrivate, refresher} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

let productCardList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 30,
      image: require("../../../images/ProductPage/OneProduct/001.png"),
      category: "prunes"
   },

   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/001.png"),
      category: "apple"

   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../images/ProductPage/OneProduct/002.png"),
      category: "apple"
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/002.png"),
      category: "apple"
   },

   {
      id: "4",
      name: "Pitted Black Prunes",
      weight: 100,
      price: 10.96,
      discount: 10,
      image: require("../../../images/ProductPage/OneProduct/003.png"),
      category: "prunes"
   },

   {
      id: "5",
      name: "Dried Red Apple (Idared)",
      weight: 200,
      price: 11.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/004.png"),
      category: "apple"
   },

   {
      id: "6",
      name: "Dried Yellow Apple (Golden)",
      weight: 300,
      price: 13.96,
      discount: 30,
      image: require("../../../images/ProductPage/OneProduct/004.png"),
      category: "apple"
   },

   {
      id: "7",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/001.png"),
      category: "apple"
   },
   {
      id: "8",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/001.png"),
      category: "apple"
   },
   {
      id: "9",
      name: "Dried Red Apple (Jona Gold)",
      weight: 400,
      price: 14.96,
      discount: null,
      image: require("../../../images/ProductPage/OneProduct/001.png"),
      category: "apple"
   },
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

function ShowCategoryList(props,setCat) {
   return (
      props.map( category => {
         return (
               <div className="CategoryCardDiv" key={category.id} onClick={(e) => {setCat(category.id);}}>
                  <div className='CCD_image'>
                     <img src={category.image} alt={`00${category.id + 1}`} />
                  </div>

                  <div className='CCD_title'><h3>{category.name}</h3></div>
               </div>
         )
      })
   )
}

function ShowProductCardList(props,goToProduct,t,nav) {

   const AddToCart = async (props) =>{
      if(JSON.parse(sessionStorage.getItem("token")).accessToken === "none"){
         nav("/login",{replace:true})
      }
      const typingTimeOut = setTimeout(async function() {
         const response = await axiosPrivate('/api/Cart/AddInCart/' + props + '?quantity=' + 1);
         if(response?.status === 401){
            nav("/login",{replace:true})
         }
      }, 500);
      return () => {
         clearTimeout(typingTimeOut);
      }
   }

   return (
       props.map( product => {
         return (
               <div className="ProductCardDiv" key={product.id} >
                  <div className='PCD_UpperPart'>
                     <div className="PCD_reaction">
                        <i className="fa-solid fa-heart"></i>
                     </div>
                     {product.discount === null ? (
                           <></>
                        ) :
                        (
                           <div className='PCD_discount'>
                              {product.discount}% {t('sale')}
                           </div>
                        )
                     }
                  </div>

                  <div className='PCD_image' onClick={(e) => {goToProduct(product.id)}}>
                     <img src={product.pictures[0]} alt={`00${product.id + 1}`} />
                  </div>

                  <div className='PCD_text' onClick={(e) => {goToProduct(product.id)}}>
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
                     {/*<div className='PCD_width'><h4>{product.weight} g</h4></div>*/}
                  </div>

                  <div className="PCD_action">
                     <button className='PCD_Btn' onClick={(e) => {AddToCart(product.id)}}>
                        {t('add2cart')}
                        <i className="fa-solid fa-cart-shopping"></i>
                     </button>
                  </div>
               </div>
         )
      })
   )
}

export default function ProductsList() {
   const [productList,setProductPage] = useState([])
   const [categoryList,setCategoryList] = useState([])
   const [loading, setLoading] = useState(true)
   let navigate = useNavigate()
   const {t} = useTranslation()

   const goToProduct = (props) =>{
      navigate("/products/" + props)
   }

   const loadCats = async (props) => {
      if(props === "0"){
         const response = await (await axios.get("/api/Products/GetAllProductsWithPictures/"))
         setProductPage(response?.data)
      }else{
         const response = await (await axios.get("/api/Products/GetProductWithPicturesBySubCategoryId/" + props))
         setProductPage(response?.data)
      }
   }

   const loadingPage = async () => {
      try{
         const response = await (await axios.get("/api/Products/GetAllProductsWithPictures"))
         const response2 = await (await axios.get("/api/subcategory/GetSubCategories"))
         setProductPage(response?.data)
         setCategoryList(response2?.data)
         if( productList != null){
            setLoading(false)
         }
      }catch (err){

      }
   }

   useEffect(() => {
      loadingPage()
      //refresher(loadingPage)
   },[])

   return (
      <>
      <div className="ProductsListContainer">
         <div className="ProductsListContainer2">
            <div className='CategorieListCont'>
               <h1 className='CLHeaderTitle'>{t('categories')}</h1>
               <div className="CategorieListDiv">
                  <div className="CategoryCardDiv" onClick={(e) => {loadCats("0")}}>
                     <div className='CCD_image'>
                        {/*<img src={category.image} alt={`00${category.id + 1}`} />*/}
                     </div>

                     <div className='CCD_title'><h3>All</h3></div>
                  </div>
                  {categoryList.length > 0 ? ShowCategoryList(categoryList,loadCats):""}
               </div>
            </div>

            <div className='ProductListCont'>
               <h1 className='PLHeaderTitle'>{t('featprods')}</h1>
               <div className="ProductsListDiv">
                  {!loading && productList.length > 0 ? ShowProductCardList(productList,goToProduct,t,navigate):""}
               </div>
            </div>
         </div>
      </div>
      </>
   )
}