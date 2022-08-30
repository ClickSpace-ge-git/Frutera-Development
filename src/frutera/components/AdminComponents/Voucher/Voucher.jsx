import './Voucher.scss'
import React, {useEffect, useState} from "react";
import VoucherElement from "./VoucherElement";
import PopUp from "../../../../Utils/PopUp";
import VoucherElementForm from "./VoucherElementForm";

let demovoucherList = [
   {
      id: "0",
      name: "Dried Apple Voucher",
      description: 
         `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      discount: 10,
      startDate: new Date(2023, 1, 1),
      endDate: new Date(2022, 1, 10),
   },
   {
      id: "1",
      name: "Dried Plum Voucher",
      description: 
         `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      discount: 20,
      startDate: new Date(2022, 2, 2),
      endDate: new Date(2022, 2, 20),
   },

   {
      id: "2",
      name: "Dried Peach Voucher",
      description: 
         `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      discount: 30,
      startDate: new Date(2022, 3, 3),
      endDate: new Date(2022, 3, 30),
   },

   {
      id: "3",
      name: "Gold Voucher",
      description: 
         `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      discount: 50,
      startDate: new Date(2022, 4, 4),
      endDate: new Date(2022, 4, 30),
   }
]

function StringToDate(timeStr) {
   var date = timeStr.split('.')
   var time = new Date(parseInt(date[2]), parseInt(date[0]), parseInt(date[1]));
   var newDate = `${time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth()}.${time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()}.${time.getFullYear()}`
   return newDate
}

export default function Voucher() {
   const [voucherList,setVoucherList] = useState([])
   const [loading, setLoading] = useState(true)
   const [trigger,setTrigger]= useState(false)
   const [editElement,setEditElement] = useState({})

   const loadingPage = () => {
      setVoucherList(demovoucherList)
      if( voucherList!= null){
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
         <div className="Vcontainer">
            <div className="Vlist">
               <div className="filterContainer">
                  <div className="firstPart">
                     <h2>Voucher List</h2>
                     <button className='fPBtn' onClick={() => {editItemHandler({})}}>+ Add Voucher</button>
                  </div>
                  <div className="secondPart">
                     <p>show <input type="text" className='inp1'/> entries</p>
                     <p>search: <input type="text" /></p>
                  </div>
               </div>
               <table>
                  <thead>
                     <td>Name</td>
                     <td>Description</td>
                     <td>Discount</td>
                     <td>Start Date</td>
                     <td>End Date</td>
                     <td>Action</td>
                  </thead>
                  <tbody>
                  {!loading && voucherList.length >0? voucherList.map(item => <VoucherElement handleEdit={editItemHandler} props={item} key={item.id}/> ) : "" }
                  </tbody>
               </table>
            </div>
            {trigger === true ?
                <PopUp>
                   <VoucherElementForm close={openForm} props={editElement}/>
                </PopUp>
                : ""}
         </div>
      </>
   )
}