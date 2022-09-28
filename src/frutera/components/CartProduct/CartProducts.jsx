import './CartProduct.scss'
import {useEffect, useState} from "react";
import CartElement from "./CartElement";

export default function CartProducts({props,add,reload}) {
   useEffect(() => {
      const cost =  props.reduce((sum,item) => sum+item.product.price*item.quantity,0)
      add(cost)
   },[])

   return props.map((item =>
      <CartElement
          key={item.product.id}
          props={item}
          add={add}
          reload={reload}
      />
   ))
}



