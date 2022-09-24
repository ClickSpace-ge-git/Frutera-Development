import {useEffect, useState} from "react";
import './FoodItemForm.scss';
import {useTranslation} from "react-i18next";
import UseAxiosP, {axiosPrivate, convertToBase64, UseAxiosAuthed, UseAxiosPost} from "../../../../Utils/axios"
import {useNavigate} from "react-router-dom";

export default function FoodItemForm({props,close}){
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState("IS")
    const [des,setDes] = useState("")
    const [img,setImg] = useState("")
    const [upload,setUpload] = useState()
    const [category,setCategory] = useState('')
    const [uploaded,setUploaded] = useState(false)
    const [id,setId] = useState("")
    const [updating,setUpdating] = useState(false)
    const {t} = useTranslation()
    let navigate = useNavigate()

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setPrice(props.price)
            setDes(props.description)
            setImg(props.img)
            if(!props.stock){
                setStock("OS")
            }
            setUpdating(true)
        }
    },[])

    const handleSubmit = async () => {
        const baseIMG = await convertToBase64(upload)
        const body = {
            Id: id,
            Name: name,
            description:des,
            price: parseInt(price),
            imageUrl: "",
            categories: [category],
            pictures:[baseIMG],
        }
        //URL.createObjectURL(upload)
        if(updating){
            try{
                const response = await axiosPrivate.post('/api/Products/UpdateProduct',JSON.stringify(body)).data;
            }
            catch(er){
                navigate('/dashboard');
            }
        }else{
            try{
                const response = await axiosPrivate.post('/api/Products/InsertProduct',JSON.stringify(body)).data;
            }
            catch(er){
                navigate('/dashboard');
            }
        }

        close()
    }

    const handleImage = (e) => {
        const imageDate = new FormData()
        imageDate.append("image",e.target.value())
    }

    return(
        <div className="createFelement">

            <h3>{t("create")} {t("product")} {t("element")}</h3>

            <div className='Felement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>{t("name")}</label>
                        <input type="text" placeholder='Enter Name' value={name} onChange={(e) =>{setName(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("price")}</label>
                        <input type="text" placeholder='Enter Price' value={price} onChange={(e) =>{setPrice(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("category")}</label>
                        <input type="text" placeholder='Enter Category' value={category} onChange={(e) =>{setCategory(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("id")}</label>
                        <input type="text" placeholder='Enter Id' value={id} onChange={(e) =>{setId(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>{t("stock")}</label>
                        <select value={stock} onChange={(e) =>{setName(e.target.value)}}>
                            <option value="IS">{t("instock")}</option>
                            <option value="OS">{t("outofstock")}</option>
                        </select>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel forTextArea'>{t("description")}</label>
                        <textarea  placeholder='Enter Description' value={des} onChange={(e) =>{setDes(e.target.value)}}></textarea>
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
            </div>
        </div>
    )
}