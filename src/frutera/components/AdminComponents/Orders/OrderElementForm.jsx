import {useEffect, useState} from "react";
import "./OrderElementForm.scss";
import {useTranslation} from "react-i18next";

export default function OrderElementForm({props,close}){
    const [name,setName] = useState("")
    const [sName,setSName] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")
    const [address,setAddress] = useState("")
    const [orderStatus,setOrderStatus] = useState("ORD")
    const [totalPrice,setTotalPrice] = useState(0)
    const {t} = useTranslation()

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
                        <label className='titleLabel'>{t("fname")}</label>
                        <input type="text" placeholder='Enter Name'
                               value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("sname")}</label>
                        <input type="text" placeholder='Enter Surname'
                               value={sName} onChange={(e) => {setSName(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("email")}</label>
                        <input type="text" placeholder='Enter Email'
                               value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("phonenum")}</label>
                        <input type="text" placeholder='Enter Phone Number'
                               value={number} onChange={(e) => {setNumber(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("address")}</label>
                        <input type="text" placeholder='Enter Address'
                               value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                    </div>
                </div>

                <div className='uploadPart'>
                    <div className='inputBx'>
                        <select value={orderStatus} onChange={(e) => {setOrderStatus(e.target.value)}}>
                            <option value="DEL">{t("delivered")}</option>
                            <option value="ORD">{t("ordered")}</option>
                        </select>
                        <label className='titleLabel'>{t("order")} {t("status")}</label>
                    </div>

                    <div className='inputBx'>
                        <input type="text" placeholder='Enter Total Price'
                               value={totalPrice} onChange={(e) => {setTotalPrice(+e.target.value)}}/>
                        <label className='titleLabel'>{t("total")} {t("price")}</label>
                    </div>

                    <div className='OBtns'>
                        <button className='OBtn' onClick={() => {handleSubmit()}}>{t("save")}</button>
                        <button className='OBtn' onClick={() => {close()}}>{t("cancel")}</button>
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