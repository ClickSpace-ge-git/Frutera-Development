import {useState} from "react";
import {axiosPrivate} from "../../../Utils/axios";


export default function CartElement({props,add,reload}){
    const [quantity,setQuantity] = useState(props.quantity)

    async function increase() {
        const typingTimeOut = setTimeout(async function() {
            const response = await axiosPrivate('/api/Cart/AddInCart/' + props.product.id + '?quantity=' + (quantity+1));
        }, 500);
        setQuantity(quantity + 1)
        add(props.product.price)
    }

    function decrease(){
        if(quantity > 1){
            setQuantity(quantity - 1)
            const typingTimeOut = setTimeout(async function() {
                const response = await axiosPrivate.get('/api/Cart/AddInCart/' + props.product.id + '?quantity=' + (quantity-1));
            }, 500);
            add(-props.product.price)
    }}

    async function remove() {
        const typingTimeOut = setTimeout(async function() {
            const response = await axiosPrivate.get('api/Cart/DeleteProductFromCart/' + props.product.id )
        }, 500);
        reload()

    }

    return(
        <>
            <tr>
                <td className='Pimage' rowSpan={2}><img src={props.img} alt={`00${props.product.id + 1}`} /></td>
                <td className='Pname'>
                    <h3>{props.product.name}</h3>
                </td>

                <td className='Pquantity' rowSpan={2}>
                    <button onClick={() => {increase()}}>+</button>
                    {quantity}
                    <button onClick={() => {decrease()}}>-</button>
                </td>
                <td className='Pprice' rowSpan={2}>{props.product.price} GEL</td>
                <td className='PTotal' rowSpan={2}>{props.product.price * quantity} GEL</td>
            </tr>
            <tr>
                <td className='removeTr'>
                    <button className='removeBtn' onClick={() => {remove(props.product.id)}}>Remove</button>
                </td>
            </tr>
        </>
    )
}