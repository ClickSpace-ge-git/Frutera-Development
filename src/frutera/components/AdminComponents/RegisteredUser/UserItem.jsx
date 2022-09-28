import React from "react";


export default function UserItem({props,handleEdit}){

    const userEdit = () => {
        handleEdit(props)
    }

    return (
        <>
            <tr>
                <td className='Uimage'><img src={props.img} alt={`00${props.id + 1}`} /></td>
                <td className='UfullName'>{props.firstName + " " + props.lastName}</td>
                <td className='UphoneNumber'><p>{props.phoneNumber}</p></td>
                <td className='Uemail'>{props.email}</td>
                <td className='Upassword'>{props.password}</td>
                <td className='Uaction'>
                    <button className='penBtn' onClick={() => {userEdit()}}><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='trashBtn'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        </>
    )
}