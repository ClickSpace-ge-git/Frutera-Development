import {useEffect, useState} from "react";
import "./BlogElementForm.scss";
import {useTranslation} from "react-i18next";

export default function BlogElementForm({props,close}){
    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [header,setHeader] = useState("")
    const [footer,setFooter] = useState("")
    const {t} = useTranslation()

    useEffect(() => {
        if(props !== {}){
            setTitle(props.title)
            setDate(props.date)
            setHeader(props.headerparagraph)
            setFooter(props.footerparagraph)
        }
    },[])

    const handleSubmit = () => {

        close()

    }

    function displayDate(time) {
        const timeStr = new Date(time)
        const newDate = timeStr.getFullYear() + "-" +
            (timeStr.getMonth() < 10 ? `0${timeStr.getMonth()}` : timeStr.getMonth()) + "-" +
            (timeStr.getDate() < 10 ? `0${timeStr.getDate()}` : timeStr.getDate())
        return newDate
    }

    return(
        <div className="createOelement">

            <h3>{t("edit")} {t("blogs")} {t("list")} {t("element")}</h3>

            <form className='Oelement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("title")}</label>
                        <input type="text" placeholder='Enter Name'
                               value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("date")}</label>
                        <input type="date" placeholder='Enter Date'
                               value={displayDate(date)} onChange={(e) => {setDate(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("header")}</label>
                        <input type="text" placeholder='Enter Header'
                               value={header} onChange={(e) => {setHeader(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("footer")}</label>
                        <input type="text" placeholder='Enter Footer'
                               value={footer} onChange={(e) => {setFooter(e.target.value)}}/>
                    </div>
                </div>

                <div className='uploadPart'>
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