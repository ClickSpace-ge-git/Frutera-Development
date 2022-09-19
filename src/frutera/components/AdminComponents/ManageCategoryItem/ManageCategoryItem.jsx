import './ManageCategoryItem.scss'
import React, {useEffect, useState} from "react";
import CategoryElement from "./CategoryElement";
import CategoryItemForm from "./CategoryItemForm";
import PopUp from "../../../../Utils/PopUp";
import axios, {refresher} from "../../../../Utils/axios"
import {useTranslation} from "react-i18next";

let demoProductsList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      img: require('../../../../images/CartPage/001.png'),
   },
   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      img: require('../../../../images/CartPage/002.png'),
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      img: require('../../../../images/CartPage/003.png'),
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      img: require('../../../../images/CartPage/004.png'),
   },
   {
      id: "4",
      name: "Dried Red Apple (Jona Gold)",
      img: require('../../../../images/CartPage/004.png'),
   },
   {
      id: "5",
      name: "Dried Red Apple (Jona Gold)",
      img: require('../../../../images/CartPage/004.png'),
   }

]

export default function ManageCategoryItem() {
   const [productsList, setProductList] = useState([])
   const [loading, setLoading] = useState(true)
   const [trigger,setTrigger]= useState(false)
   const [editElement,setEditElement] = useState({})
   const [data,setData] = useState(null)
   const {t} = useTranslation()

   const loadingPage = async () => {
      try{
         const response = await (await axios.get("/api/SubCategory/GetSubCategories"))
         setProductList(response?.data)
         if( productsList!= null){
            setLoading(false)
         }
      }catch (err){

      }
   }

   useEffect(() => {
      loadingPage()
      //refresher(loadingPage)
   },[])

   const openForm = () => {
      if(trigger){
         setTrigger(false)
      }else{
         setTrigger(true)
      }
   }

   const editItemHandler = (props) => {
      setEditElement(props)
      openForm()
   }

   return (
      <>
         <div className="MFIcontainer">
            <div className="Flist">
               <div className="filterContainer">
                  <div className="firstPart">
                     <h2>{t("categories")} {t("list")}</h2>
                     <button className='fPBtn' onClick={() => {editItemHandler({})}}>+ {t("add")} {t("category")}</button>
                  </div>
                  <div className="secondPart">
                     <p>{t("show")} <input type="text" className='inp1'/> {t("entries")}</p>
                     <p>{t("search")}: <input type="text" /></p>
                  </div>
               </div>
               <table className='MFtable'>
                  <thead>
                     <td>{t("image")}</td>
                     <td>{t("id")}</td>
                     <td>{t("name")}</td>
                     <td>{t("action")}</td>
                  </thead>
                  <tbody>
                  {!loading && productsList.length >0? productsList.map(item => <CategoryElement handleEdit={editItemHandler} props={item} key={item.id}/> ) : "" }
                  </tbody>
               </table>
            </div>
            {trigger === true ?
                <PopUp>
                   <CategoryItemForm close={openForm} props={editElement}/>
                </PopUp>
                : ""}
         </div>
      </>
   )
}