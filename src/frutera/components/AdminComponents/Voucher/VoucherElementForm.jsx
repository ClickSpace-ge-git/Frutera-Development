import {useEffect, useState} from "react";
import "./VoucherElementForm.scss";
import {useTranslation} from "react-i18next";

export default function VoucherElementForm({props, close}){

    const [name,setName] = useState("")
    const [discount,setDiscount] = useState("")
    const [startDate,setStartDate] = useState(Date)
    const [endDate,setEndDate] = useState(Date)
    const [des,setDes] = useState("")
    const {t} = useTranslation()

    function displayDate(time) {
        const timeStr = new Date(time)
        const newDate = timeStr.getFullYear() + "-" +
            (timeStr.getMonth() < 10 ? `0${timeStr.getMonth()}` : timeStr.getMonth()) + "-" +
            (timeStr.getDate() < 10 ? `0${timeStr.getDate()}` : timeStr.getDate())
        return newDate
    }

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setDiscount(props.discount)
            setStartDate(props.startDate)
            setEndDate(props.endDate)
            setDes(props.description)
        }
    },[])

    const handleSubmit = () => {

        close()
    }

    return(
        <div className="createVelement">

            <h3>{t("create")} {t("voucher")}</h3>

            <div className='Velement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("name")}</label>
                        <input type="text" placeholder='Enter Name'
                               value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("discount")}</label>
                        <input type="text" placeholder='Enter Discount'
                               value={discount} onChange={(e) => {setDiscount(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("start")} {t("date")}</label>
                        <input type="date" placeholder='Enter Start Date'
                               value={displayDate(startDate)} onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("end")} {t("date")}</label>
                        <input type="date" placeholder='Enter End Date'
                               value={displayDate(endDate)} onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                </div>

                <div className='descriptionPart'>
                    <div className='inputBx'>
                        <label className='titleLabel forTextArea'>{t("description")}</label>
                        <textarea  placeholder='Enter Description'
                        value={des} onChange={(e) => {setDes(e.target.value)}}></textarea>
                    </div>

                    <div className='MFIBtns'>
                        <button className='MFIBtn' onClick={() => {handleSubmit()}}>{t("add")} {t("voucher")}</button>
                        <button className='MFIBtn' onClick={() => {close()}}>{t("cancel")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}