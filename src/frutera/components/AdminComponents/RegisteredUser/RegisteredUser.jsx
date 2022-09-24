import './RegisteredUser.scss'
import React, {useEffect, useState} from "react";
import PopUp from "../../../../Utils/PopUp";
import UserItem from "./UserItem";
import UserItemForm from "./UserItemForm";
import {useTranslation} from "react-i18next";
import axios, {axiosPrivate, UseAxiosP} from "../../../../Utils/axios";

const USERSURL = '/api/User/GetAllUsers'

let demoUserList = [
   {
      id: "0",
      name: "Name",
      surname: "surname1",
      phoneNumber: "523 45 67 89",
      email: 'user.usersurname1@gmail.com',
      password: 'Password1',
      img: require('../../../../images/UserProfileImages/DefaultUser.png')
   },
   {
      id: "1",
      name: "Name",
      surname: "surname2",
      phoneNumber: "534 56 78 90",
      email: `user.usersurname2@gmail.com`,
      password: "Password2",
      img: require('../../../../images/UserProfileImages/DefaultUser.png')
   },

   {
      id: "2",
      name: "Name",
      surname: "surname3",
      phoneNumber: "579 45 98 65",
      email: `user.usersurname3@gmail.com`,
      password: "diadidaviti1",
      img: require('../../../../images/UserProfileImages/DefaultUser.png'),
   },

   {
      id: "3",
      name: "Name",
      surname: "surname4",
      phoneNumber: "579 45 98 65",
      email: `user.usersurname4@gmail.com`,
      password: "mariamivar5",
      img: require('../../../../images/UserProfileImages/DefaultUser.png')
   }
]

export default function ManageFoodItem() {
   const [userList,setUserList] = useState([])
   const [loading, setLoading] = useState(true)
   const [trigger,setTrigger]= useState(false)
   const [editElement,setEditElement] = useState({})
   const {t} = useTranslation()

   const loadingPage = async () => {
      const response = await axiosPrivate.get(USERSURL)
      setUserList(response?.data)
      if( userList!= null){
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

   const openForm = () => {
      if(trigger){
         console.log("close")
         setTrigger(false)
      }else{
         console.log("open")
         setTrigger(true)
      }
   }

   return (
      <>
         <div className="MFIcontainer">
            <div className="Flist">
               <div className="filterContainer">
                  <div className="firstPart">
                     <h2>{t("user")} {t("list")}</h2>
                     <button className='fPBtn' onClick={() => {editItemHandler({})}}>+ {t("add")} {t("user")} {t("item")}</button>
                  </div>
                  <div className="secondPart">
                     <p>{t("show")} <input type="text" className='inp1'/> {t("entries")}</p>
                     <p>{t("search")}: <input type="text" /></p>
                  </div>
               </div>
               <div className='tableStyle'>
                  <table className='Utable'>
                     <thead>
                        <td>{t("image")}</td>
                        <td>{t("fullname")}</td>
                        <td>{t("phonenum")}</td>
                        <td>{t("email")}</td>
                        <td>{t("password")}</td>
                        <td>{t("action")}</td>
                     </thead>
                     <tbody>
                     {!loading && userList.length >0? userList.map(item => <UserItem handleEdit={editItemHandler} props={item} key={item.id}/> ) : "" }
                     </tbody>
                  </table>
               </div>
            </div>
            {trigger === true ?
                <PopUp>
                   <UserItemForm close={openForm} props={editElement}/>
                </PopUp>
                : ""}
         </div>
      </>
   )
}