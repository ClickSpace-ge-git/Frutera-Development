import './OrderListElementForm.scss';
import {useEffect, useState} from "react";

export default function OrderListElementForm({props,close}){
    const [id,setId] = useState("")
    const [quantity,setQuantity] = useState("")

    useEffect(() => {
        if(props !== {}){
            setId(props.id)
            setQuantity(props.quantity) 
        }
    },[])

    const handleSubmit = () => {

        close()

    }

    return(
        <div className="createOLelement">

            <h3>Add Order List Element</h3>

            <form className='OLelement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>Product ID</label>
                        <input type="text" placeholder='Enter Product ID'
                               value={id} onChange={(e) => {setId(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Quantity</label>
                        <input type="text" placeholder='Enter Quantity'
                               value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
                    </div>

                    <div className='OLBtns'>
                        <button className='OLBtn' onClick={() => {handleSubmit()}}>Save</button>
                        <button className='OLBtn' onClick={() => {close()}}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}