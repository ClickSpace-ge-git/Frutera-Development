import './Orders.scss'
import PopUp from "../../../../Utils/PopUp";
import React, {useEffect, useState} from "react";
import OrderElementForm from "./OrderElementForm";
import OrderList from "./OrderList";
import OrderElement from "./OrderElement";
import {useTranslation} from "react-i18next";

let demoproductList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      img: require('../../../../images/CartPage/001.png'),
      quantity: 1,
      price: 11.99
   },
   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      img: require('../../../../images/CartPage/002.png'),
      quantity: 2,
      price: 12.99
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      img: require('../../../../images/CartPage/003.png'),
      quantity: 3,
      price: 13.99
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      img: require('../../../../images/CartPage/004.png'),
      quantity: 4,
      price: 14.99
   }
]

let demoordersList = [
   {
      id: "0",
      fullName: "Name Surname 1",
      phoneNumber: "523 45 67 89",
      email: 'user.usersurname1@gmail.com',
      address: "address1",
      totalPrice: 900,
      orderStatus: true,
      orderList: demoproductList
   },
   {
      id: "1",
      fullName: "Name Surname 2",
      phoneNumber: "523 45 67 12",
      email: 'user.usersurname2@gmail.com',
      address: "address2",
      totalPrice: 800,
      orderStatus: false,
      orderList: demoproductList
   },

   {
      id: "2",
      fullName: "Name Surname 3",
      phoneNumber: "523 45 67 13",
      email: 'user.usersurname3@gmail.com',
      address: "address3",
      totalPrice: 700,
      orderStatus: true,
      orderList: demoproductList
   },

   {
      id: "3",
      fullName: "Name Surname 4",
      phoneNumber: "523 45 67 14",
      email: 'user.usersurname4@gmail.com',
      address: "address4",
      totalPrice: 600,
      orderStatus: false,
      orderList: demoproductList
   }
]

export default function Orders() {

   const [ordersList,setOrdersList] = useState([])
   const [loading, setLoading] = useState(true)
   const [trigger,setTrigger]= useState(false)
   const [triggerList,setTriggerList]= useState(false)
   const [editElement,setEditElement] = useState({})
   const {t} = useTranslation()

   const loadingPage = () => {
      setOrdersList(demoordersList)
      if( ordersList!= null){
         setLoading(false)
      }
   }

   useEffect(() => {
      loadingPage()
   },[])

   const editItemHandler = (props) => {
      setEditElement(props)
      openForm()
   }

   const editItemHandlerList = (props) => {
      setEditElement(props)
      openList()
   }

   const openForm = () => {
      if(trigger){
         console.log("close")
         setTrigger(false)
      }else{
         console.log("open")
         setTrigger(true)
      }
   }

   const openList = () => {
      if(triggerList){
         console.log("close")
         setTriggerList(false)
      }else{
         console.log("open")
         setTriggerList(true)
      }
   }

   return (
      <>
         <div className="Ocontainer">
            <div className="Olist">
               
               <div className="filterContainer">
                  <div className="firstPart">
                     <h2>{t("orders")} {t("list")}</h2>
                  </div>
                  <div className="secondPart">
                     <p>{t("show")} <input type="text" className='inp1'/> {t("entries")}</p>
                     <p>{t("search")}: <input type="text" /></p>
                  </div>
               </div>

               <table className='Otable'>
                  <thead>
                     <td>{t("fullname")}</td>
                     <td>{t("email")}</td>
                     <td>{t("phonenum")}</td>
                     <td>{t("address")}</td>
                     <td>{t("order")} {t("list")}</td>
                     <td>{t("total")} {t("price")}</td>
                     <td>{t("order")} {t("status")}</td>
                     <td>{t("action")}</td>
                  </thead>
                  <tbody>
                  {!loading && ordersList.length >0? ordersList.map(item => <OrderElement handleList={editItemHandlerList} handleEdit={editItemHandler} props={item} key={item.id}/> ) : "" }
                  </tbody>
               </table>
            </div>
            {trigger === true ?
                <PopUp>
                   <OrderElementForm close={openForm} props={editElement} handleList={openForm}/>
                </PopUp>
                : ""}
            {triggerList === true ?
                <PopUp>
                   <OrderList close={openList} props={editElement} handleList={openList}/>
                </PopUp>
                : ""}
         </div>
      </>
   )
}