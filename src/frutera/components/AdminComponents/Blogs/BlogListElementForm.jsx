import {useEffect, useState} from "react";
import './BlogListElementForm.scss';
import {useTranslation} from "react-i18next";
import UseAxiosP, {axiosPrivate, convertToBase64} from "../../../../Utils/axios"
import {useNavigate} from "react-router-dom";

export default function CategoryItemForm({props,close}){
    const [name,setName] = useState("")
    const [img,setImg] = useState()
    const [upload,setUpload] = useState()
    const [uploaded,setUploaded] = useState(false)
    const [id,setId] = useState("")
    const {t} = useTranslation()
    let navigate = useNavigate()

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setImg(props.img)
            setId(props.id)
        }
    },[])

    const handleSubmit = async () => {
        const baseIMG = await convertToBase64(upload)
        const body = {
            id: id,
            Name: name,
            imageUrl: baseIMG,
            CategoryId: id,
        }
        console.log((id))
        try{
            const response = await axiosPrivate.post('/api/subcategory/CreateSubCategory',JSON.stringify(body)).data;

        }
        catch(er){
            navigate('/dashboard');
            console.log(er)
        }

        close()
    }

    const handleImage = (e) => {
        const imageDate = new FormData()
        imageDate.append("image",e.target.value())
    }

    return(
        <div className="BlogListElementFormContainer">
            <div className="createFelement">
                <h3>{t("create")} {t("category")} {t("element")}</h3>

                <form className='BLEF_form'>
                    <div className='textPart'>
                        <div className='inputBx'>
                            <label className='titleLabel'>{t("Title")}</label>
                            <input type="text" placeholder='Enter Title' value={name} onChange={(e) =>{setName(e.target.value)}}/>
                        </div>

                        <div className='inputBx'>
                            <label className='titleLabel forTextArea'>{t("Description")}</label>
                            <textarea type="text" placeholder='Enter Description' value={name} onChange={(e) =>{setName(e.target.value)}}/>
                        </div>
                    </div>

                    <div className='imgPart'>
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
                </form>
            </div>
        </div>
    )
}