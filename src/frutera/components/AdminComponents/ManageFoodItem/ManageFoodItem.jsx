import './ManageFoodItem.scss'
import React, {useEffect, useState} from "react";
import ProductElement from "./ProductElement";
import FoodItemForm from "./FoodItemForm";
import PopUp from "../../../../Utils/PopUp";

let demoProductsList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      description: 
         `Fruit is the sweet, fleshy, edible part of a plant. 
         It generally contains seeds. Fruits are usually eaten raw, although 
         some varieties can be cooked. They come in a wide variety of colours, 
         shapes and flavours.`,
      img: require('../../../../images/CartPage/001.png'),
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
      img: require('../../../../images/CartPage/002.png'),
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
      img: require('../../../../images/CartPage/003.png'),
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
      img: require('../../../../images/CartPage/004.png'),
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
      img: require('../../../../images/CartPage/004.png'),
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
      img: require('../../../../images/CartPage/004.png'),
      price: 14.99,
      discount: 40,
      stock: false
   }

]

export default function ManageFoodItem() {
   const [productsList, setProductList] = useState([])
   const [loading, setLoading] = useState(true)
   const [trigger,setTrigger]= useState(false)
   const [editElement,setEditElement] = useState({})

   const loadingPage = () => {
      setProductList(demoProductsList)
      if( productsList!= null){
         setLoading(false)
      }
   }

   useEffect(() => {
      loadingPage()
   },[])

   const openForm = () => {
      if(trigger){
         console.log("close")
         setTrigger(false)
      }else{
         console.log("open")
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
                     <h2>Product List</h2>
                     <button className='fPBtn' onClick={() => {editItemHandler({})}}>+ Add Food Item</button>
                  </div>
                  <div className="secondPart">
                     <p>show <input type="text" className='inp1'/> entries</p>
                     <p>search: <input type="text" /></p>
                  </div>
               </div>
               <table className='MFtable'>
                  <thead>
                     <td>Image</td>
                     <td>Name</td>
                     <td>Description</td>
                     <td>Price</td>
                     <td>Discount</td>
                     <td>Stock Status</td>
                     <td>Action</td>
                  </thead>
                  <tbody>
                  {!loading && productsList.length >0? productsList.map(item => <ProductElement handleEdit={editItemHandler} props={item} key={item.id}/> ) : "" }
                  </tbody>
               </table>
            </div>
            {trigger === true ?
                <PopUp>
                   <FoodItemForm close={openForm} props={editElement}/>
                </PopUp>
                : ""}
         </div>
      </>
   )
}