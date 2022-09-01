import {useEffect, useState} from "react";
import './FoodItemForm.scss';

export default function FoodItemForm({props,close}){
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [discount,setDiscount] = useState("0")
    const [stock,setStock] = useState("IS")
    const [des,setDes] = useState("")
    const [img,setImg] = useState()
    const [upload,setUpload] = useState()
    const [uploaded,setUploaded] = useState(false)

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setPrice(props.price)
            setDes(props.description)
            setImg(props.img)
            if(!props.stock){
                setStock("OS")
            }
        }
    },[])

    const handleSubmit = () => {

        close()
    }

    const handleImage = (e) => {
        const imageDate = new FormData()
        imageDate.append("image",e.target.value())
    }

    return(
        <div className="createFelement">

            <h3>Create Product Element</h3>

            <div className='Felement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>Name</label>
                        <input type="text" placeholder='Enter Name' value={name} onChange={(e) =>{setName(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Price</label>
                        <input type="text" placeholder='Enter Price' value={price} onChange={(e) =>{setPrice(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Discount</label>
                        <input type="text" placeholder='Enter Discount' value={discount} onChange={(e) =>{setDiscount(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>stock</label>
                        <select value={stock} onChange={(e) =>{setName(e.target.value)}}>
                            <option value="IS">in stock</option>
                            <option value="OS">out of stock</option>
                        </select>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel forTextArea'>Description</label>
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
                            Upload Image
                            <input type="file" id='image_input' onChange={(e) =>{if(
                                e.target.files && e.target.files[0]) {
                                (setUpload(e.target.files[0]))
                                setUploaded(true)
                            }}}/>
                        </label>
                        <label className='titleLabel'>image</label>
                    </div>

                    <div className='MFIBtns'>
                        <button className='MFIBtn' onClick={() => {handleSubmit()}}>Add Product</button>
                        <button className='MFIBtn' onClick={() => {close()}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}