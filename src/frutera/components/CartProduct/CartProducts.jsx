import './CartProduct.scss'
import {useEffect, useState} from "react";
import CartElement from "./CartElement";

export default function CartProducts({props,add}) {
   useEffect(() => {
      const cost =  props.reduce((sum,item) => sum+item.price*item.quantity,0)
      add(cost)
   },[])

   return props.map((item =>
      <CartElement
          key={item.id}
          props={item}
          add={add}
      />
   ))
}



