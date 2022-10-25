import './ProductsList.scss'
import {useEffect, useState} from "react";
import axios, {axiosPrivate, refresher} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import LoadingPage from "../../LoadingPage/LoadingPage";
import {
   testDriedApples,
   testDriedPeaches,
   testDriedPears,
   testDriedPlums,
   testProductsList,
   translateBaseLocal
} from "../../../Utils/data";

let demoProductsList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      description:
          `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      img: require('../../../images/CartPage/001.png'),
      price: 11.99,
      discount: 10,
      stock: true
   },
   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      description:
          `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      img: require('../../../images/CartPage/002.png'),
      price: 12.99,
      discount: 20,
      stock: false
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      description:
          `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      img: require('../../../images/CartPage/003.png'),
      price: 13.99,
      discount: 30,
      stock: true
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      description:
          `Fruit is the sweet, fleshy, edible part of a plant. 
      It generally contains seeds. Fruits are usually eaten raw, although 
      some varieties can be cooked. They come in a wide variety of colours, 
      shapes and flavours.`,
      img: require('../../../images/CartPage/004.png'),
      price: 14.99,
      discount: 40,
      stock: false
   },
   {
      id: "4",
      name: "Dried Red Apple (Jona Gold)",
      description:
          `Fruit is the sweet, fleshy, edible part of a plant. 
      It generally contains seeds. Fruits are usually eaten raw, although 
      some varieties can be cooked. They come in a wide variety of colours, 
      shapes and flavours.`,
      img: require('../../../images/CartPage/004.png'),
      price: 14.99,
      discount: 40,
      stock: false
   },
   {
      id: "5",
      name: "Dried Red Apple (Jona Gold)",
      description:
          `Fruit is the sweet, fleshy, edible part of a plant. 
      It generally contains seeds. Fruits are usually eaten raw, although 
      some varieties can be cooked. They come in a wide variety of colours, 
      shapes and flavours.`,
      img: require('../../../images/CartPage/004.png'),
      price: 14.99,
      discount: 40,
      stock: false
   }

]

let categoryListDemo = [
   {
      id: "1",
      name: "Dried Apples",
      image: require("../../../images/ProductPage/ProductCategories/dried_apple_img.png"),
   },

   {
      id: "2",
      name: "Dried Plums",
      image: require("../../../images/ProductPage/ProductCategories/dried_plum_img.png"),
   },

   {
      id: "3",
      name: "Dried Pears",
      image: require("../../../images/ProductPage/ProductCategories/dried_pear_img.png"),
   },

   {
      id: "4",
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
                     {/*<img src={category.image} alt={`00${category.id + 1}`} />*/}
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
   const [testProduct,setTestProducts] = useState(testProductsList)

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

   const translate = (props) => {
      return translateBaseLocal[props][sessionStorage.getItem("lan")]
   }

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

                     <div className='CCD_title'><h3>{translate("all")}</h3></div>
                  </div>
                  {categoryList.length > 0 ? ShowCategoryList(categoryList,loadCats):<LoadingPage/>}
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