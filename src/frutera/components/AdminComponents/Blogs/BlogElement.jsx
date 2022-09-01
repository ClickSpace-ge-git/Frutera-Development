import React from "react";


export default function BlogElement({props,handleEdit,handleList}){

    function editHandler(){
        handleEdit(props)
    }
    function listHandler(){
        handleList(props)
    }

    function displayDate(time) {
        const timeStr = new Date(time)
        var newDate = timeStr.getFullYear() + "-" +
            (timeStr.getMonth() < 10 ? `0${timeStr.getMonth()}` : timeStr.getMonth()) + "-" +
            (timeStr.getDate() < 10 ? `0${timeStr.getDate()}` : timeStr.getDate())
        return newDate
    }

    return(
        <tr>
            <td className='OfullName'>{props.title}</td>
            <td className='Oemail'>{displayDate(props.date)}</td>
            <td className='OphoneNumber'>{props.headerparagraph}</td>
            <td className='OorderList'>
                <button className='Obtn' onClick={() => {
                    listHandler()
                }}>show paragraphs
                </button>
            </td>
            <td className='OtotalPrice'>{props.footerparagraph}</td>
            <td className='Oaction'>
                <button className='penBtn' onClick={() => {editHandler()}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='trashBtn' ><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}