import {useEffect, useState} from "react";
import "./UserItemForm.scss"
import {useTranslation} from "react-i18next";
import axios from "../../../../Utils/axios";

const REGISTER_URL = '/api/User/RegisterUser';

export default function     UserItemForm({props,close}){
    const [name,setName] = useState("")
    const [sname,setSName] = useState("")
    const [email,setEmail] = useState("")
    const [psw,setPsw] = useState("")
    const [img,setImg] = useState()
    const [upload,setUpload] = useState()
    const [uploaded,setUploaded] = useState(false)
    const {t} = useTranslation()

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setSName(props.surname)
            setEmail(props.email)
            setPsw(props.password)
            setImg(props.img)
        }
    },[])

    const handleSubmit = async () => {
        const model = JSON.stringify({
            "email": email,
            "password": psw,
            "firstName": name,
            "lastName": sname
        });
        const response = await axios.post(REGISTER_URL, model, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        close()
    }

    return(
        <div className="createFelement">

            <h3>{t("edit")} {t("user")} {t("element")}</h3>

            <div className='Felement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("fname")}</label>
                        <input type="text" placeholder='Enter Name' value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("sname")}</label>
                        <input type="text" placeholder='Enter Surname' value={sname}
                               onChange={(e) => {setSName(e.target.value)}}
                        />
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("email")}</label>
                        <input type="text" placeholder='Enter Email' value={email}
                               onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("password")}</label>
                        <input type="password" placeholder='Enter Password' value={psw}
                               onChange={(e) => {setPsw(e.target.value)}}
                        />
                    </div>
                </div>

                <div className='UimgPart'>
                    <div id='dI' className='displayImg'>
                        {uploaded === true ?
                            <img src={URL.createObjectURL(upload)} className="product-image"/>:
                            <img src={img} className="product-image"/>}
                    </div>
                    <div className='inputBx'>
                        <label className='inputtype'>
                            {t("upload")} {t("image")}
                            <input type="file" id='image_input' onChange={(e) =>{if(
                                e.target.files && e.target.files[0]) {
                                (setUpload(e.target.files[0]))
                                setUploaded(true)
                            }}}/>
                        </label>
                        <label className='titleLabel'>{t("image")}</label>
                    </div>

                    <div className='MFIBtns'>
                        <button className='MFIBtn' onClick={() => {handleSubmit()}}>{t("add")} {t("product")}</button>
                        <button className='MFIBtn' onClick={() => {close()}}>{t("cancel")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}