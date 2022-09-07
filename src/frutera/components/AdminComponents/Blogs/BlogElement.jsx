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
            <td className='BTitle'>{props.title}</td>
            <td className='BDate'>{displayDate(props.date)}</td>
            <td className='BHeaderParagraph'><p>{props.headerparagraph}</p></td>
            <td className='BMoreText'>
                <button className='Obtn' onClick={() => {
                    listHandler()
                }}>More Text
                </button>
            </td>
            <td className='BFooterParagraph'><p>{props.footerparagraph}</p></td>
            <td className='Baction'>
                <button className='penBtn' onClick={() => {editHandler()}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='trashBtn' ><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}