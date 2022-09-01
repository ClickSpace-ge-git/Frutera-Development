import './RegisteredUser.scss'
import React, {useEffect, useState} from "react";
import PopUp from "../../../../Utils/PopUp";
import UserItem from "./UserItem";
import UserItemForm from "./UserItemForm";

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

   const loadingPage = () => {
      setUserList(demoUserList)
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
                     <h2>User List</h2>
                     <button className='fPBtn' onClick={() => {editItemHandler({})}}>+ Add User Item</button>
                  </div>
                  <div className="secondPart">
                     <p>show <input type="text" className='inp1'/> entries</p>
                     <p>search: <input type="text" /></p>
                  </div>
               </div>
               <div className='tableStyle'>
                  <table className='Utable'>
                     <thead>
                        <td>Image</td>
                        <td>Full Name</td>
                        <td>Phone Number</td>
                        <td>Emain</td>
                        <td>Password</td>
                        <td>Action</td>
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