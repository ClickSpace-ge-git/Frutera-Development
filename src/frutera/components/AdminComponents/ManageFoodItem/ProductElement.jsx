import React from "react";


export default function ProductElement({props,handleEdit}){

    const productEdit = () => {
        handleEdit(props)
    }

    return (
        <>
            <tr>
                <td className='Pimage'><img src={props.img} alt={`00${props.id + 1}`} /></td>
                <td className='Pname'>{props.id}</td>
                <td className='Pname'>{props.name}</td>
                <td className='Pdescription'><p>{props.description}</p></td>
                <td className='Pprice'>{props.price} GEL</td>
                <td className='Pdiscount'>{props.category}</td>
                <td className='Pstock'>{props.stock ? "in stock" : "out of stock"}</td>
                <td className='Paction'>
                    <button className='penBtn' onClick={() => {productEdit()}}><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='trashBtn'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        </>
    )
}