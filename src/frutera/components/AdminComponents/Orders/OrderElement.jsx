import React from "react";


export default function OrderElement({props,handleEdit,handleList}){

    function editHandler(){
        handleEdit(props)
    }
    function listHandler(){
        handleList(props)
    }

    return(
        <tr>
            <td className='OfullName'>{props.UserId}</td>
            <td className='Oaddress'>{props.Address}</td>
            <td className='OorderList'>
                <button className='Obtn' onClick={() => {
                    listHandler()
                }}>show order list
                </button>
            </td>
            <td className='OtotalPrice'>{props.CreatedAt}</td>
            <td className='OorderStatus'>{props.orderStatus ? "Delivered" : "Ordered"}</td>
            <td className='Oaction'>
                <button className='penBtn' onClick={() => {editHandler()}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='trashBtn' ><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}