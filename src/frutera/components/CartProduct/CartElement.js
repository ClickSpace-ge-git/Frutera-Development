

export default function CartElement({props,add}){

    function increase(){
        console.log(props.price)
        add(props.price)
    }

    function decrease(){
        add(-props.price)
    }

    function remove(){
        add(-props.price)
    }

    return(
        <>
            <tr>
                <td className='Pimage' rowSpan={2}><img src={props.img} alt={`00${props.id + 1}`} /></td>
                <td className='Pname'>
                    <h3>{props.name}</h3>
                </td>

                <td className='Pquantity' rowSpan={2}>
                    <button onClick={() => {increase()}}>+</button>
                    {props.quantity}
                    <button onClick={() => {decrease()}}>-</button>
                </td>
                <td className='Pprice' rowSpan={2}>{props.price} GEL</td>
                <td className='PTotal' rowSpan={2}>{props.price * props.quantity} GEL</td>
            </tr>
            <tr>
                <td className='removeTr'>
                    <button className='removeBtn' onClick={() => {remove(props.id)}}>Remove</button>
                </td>
            </tr>
        </>
    )
}