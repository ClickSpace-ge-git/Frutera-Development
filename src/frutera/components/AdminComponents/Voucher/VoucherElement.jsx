
function DisplayDate(timeStr) {
    var newDate = `${timeStr.getMonth() < 10 ? `0${timeStr.getMonth()}` : timeStr.getMonth()}.
                  ${timeStr.getDate() < 10 ? `0${timeStr.getDate()}` : timeStr.getDate()}.
                  ${timeStr.getFullYear()}`
    return newDate
}

export default function VoucherElement({props,handleEdit}){

    const userEdit = () => {
        handleEdit(props)
    }

    return(
        <tr>
            <td className='Vname'>{props.name}</td>
            <td className='Vdescription'><p>{props.description}</p></td>
            <td className='Vdiscount'>{props.discount}%</td>
            <td className='VPstartDate'>{DisplayDate(props.startDate)}</td>
            <td className='VendDate'>{DisplayDate(props.endDate)}</td>
            <td className='Vaction'>
                <button className='penBtn' onClick={() => {userEdit()}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='trashBtn' ><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}