import React from "react";


export default function OrderListElement({props}){

    function increase(props){

    }

    function decrease(props){

    }

    return(
        <tr>
            <td className='OPimage'><img src={props.img} alt={`00${props.id + 1}`}/></td>
            <td className='OPname'>{props.name}</td>
            <td className='OPquantity'>
                <button onClick={() => {
                    increase(props.id)
                }}>+
                </button>
                {props.quantity}
                <button onClick={() => {
                    decrease(props.id)
                }}>-
                </button>
            </td>
            <td className='OPprice'>{props.price} GEL</td>
            <td className='OPTotal'>{props.price * props.quantity} GEL</td>
            <td className='OPaction'>
                <button className='trashBtn'><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}