import {useEffect, useState} from "react";
import "./OrderElementForm.scss";

export default function OrderElementForm({props,close}){
    const [name,setName] = useState("")
    const [sName,setSName] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")
    const [address,setAddress] = useState("")
    const [orderStatus,setOrderStatus] = useState("ORD")
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setSName(props.surname)
            setEmail(props.email)
            setNumber(props.phonenumber)
            setAddress(props.address)
            setOrderStatus(props.orderstatus)
            setTotalPrice(props.totalprice)
        }
    },[])

    const handleSubmit = () => {

        close()

    }

    return(
        <div className="createOelement">

            <h3>Edit Orders List Element</h3>

            <form className='Oelement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>Name</label>
                        <input type="text" placeholder='Enter Name'
                               value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Surname</label>
                        <input type="text" placeholder='Enter Surname'
                               value={sName} onChange={(e) => {setSName(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Email</label>
                        <input type="text" placeholder='Enter Email'
                               value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Phone Number</label>
                        <input type="text" placeholder='Enter Phone Number'
                               value={number} onChange={(e) => {setNumber(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>Address</label>
                        <input type="text" placeholder='Enter Address'
                               value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                    </div>
                </div>

                <div className='uploadPart'>
                    <div className='inputBx'>
                        <select value={orderStatus} onChange={(e) => {setOrderStatus(e.target.value)}}>
                            <option value="DEL">Delivered</option>
                            <option value="ORD">Ordered</option>
                        </select>
                        <label className='titleLabel'>Order Status</label>
                    </div>

                    <div className='inputBx'>
                        <input type="text" placeholder='Enter Total Price'
                               value={totalPrice} onChange={(e) => {setTotalPrice(+e.target.value)}}/>
                        <label className='titleLabel'>Total Price</label>
                    </div>

                    <div className='OBtns'>
                        <button className='OBtn' onClick={() => {handleSubmit()}}>Save</button>
                        <button className='OBtn' onClick={() => {close()}}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

/*
                    <div className='inputBx'>
                        <label className='inputtype'>
                            Upload list
                            <input className='fileInp' type="file" id='image_input'/>
                        </label>
                        <label className='titleLabel'>Order List</label>
                    </div>
 */