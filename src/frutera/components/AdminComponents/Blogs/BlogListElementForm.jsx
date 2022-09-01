import './BlogListElementForm.scss';
import {useEffect, useState} from "react";

export default function BlogListElementForm({props,close}){
    const [title,setTitle] = useState("")
    const [text,setText] = useState("")
    const [img,setImg] = useState()
    const [upload,setUpload] = useState()
    const [uploaded,setUploaded] = useState(false)

    useEffect(() => {
        if(props !== {}){
            setTitle(props.title)
            setText(props.text)
            setImg(props.img)
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
                        <label className='titleLabel'>Title</label>
                        <input type="text" placeholder='Enter Product ID'
                               value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Text</label>
                        <input type="text" placeholder='Enter Quantity'
                               value={text} onChange={(e) => {setText(e.target.value)}}/>
                    </div>
                    <div className='UimgPart'>
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
                        <div className='OLBtns'>
                            <button className='MFIBtn' onClick={() => {handleSubmit()}}>Add Product</button>
                            <button className='MFIBtn' onClick={() => {close()}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}