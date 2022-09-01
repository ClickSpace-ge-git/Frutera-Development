import React from "react";


export default function BlogListElement({props,edit}){

    const editHandler = () => {
        edit(props)
    }

    return(
        <tr>
            <td className='OPimage'><img src={props.img} alt={`00${props.id + 1}`}/></td>
            <td className='OPname'>{props.title}</td>
            <td className='OPprice'>{props.text} GEL</td>
            <td className='OPaction'>
                <button className='penBtn' onClick={() => {editHandler()}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='trashBtn'><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}