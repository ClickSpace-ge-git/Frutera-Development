import React from "react";


export default function OrderListElement({props}){

    function increase(props){

    }

    function decrease(props){

    }

    return(
        <tr>
            <td className='OPimage'><img src={props.img} alt={`00${props.id + 1}`}/></td>
            <td className='OPname'>{props.Name}</td>
            <td className='OPquantity'>
                <button onClick={() => {
                    increase(props.ProductId)
                }}>+
                </button>
                {props.quantity}
                <button onClick={() => {
                    decrease(props.ProductId)
                }}>-
                </button>
            </td>
            <td className='OPprice'>{props.PriceOfSingleProduct} GEL</td>
            <td className='OPTotal'>{props.PriceOfSingleProduct * props.Quantity} GEL</td>
            <td className='OPaction'>
                <button className='trashBtn'><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}