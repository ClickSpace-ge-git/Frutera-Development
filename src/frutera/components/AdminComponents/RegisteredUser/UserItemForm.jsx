import {useEffect, useState} from "react";
import "./UserItemForm.scss"

export default function UserItemForm({props,close}){
    const [name,setName] = useState("")
    const [sname,setSName] = useState("")
    const [email,setEmail] = useState("")
    const [psw,setPsw] = useState("")
    const [img,setImg] = useState()
    const [upload,setUpload] = useState()
    const [uploaded,setUploaded] = useState(false)

    useEffect(() => {
        if(props !== {}){
            setName(props.name)
            setSName(props.surname)
            setEmail(props.email)
            setPsw(props.password)
            setImg(props.img)
        }
    },[])

    const handleSubmit = () => {

        close()
    }

    return(
        <div className="createFelement">

            <h3>Edit User Element</h3>

            <div className='Felement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>Name</label>
                        <input type="text" placeholder='Enter Name' value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Surname</label>
                        <input type="text" placeholder='Enter Surname' value={sname}
                               onChange={(e) => {setSName(e.target.value)}}
                        />
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Email</label>
                        <input type="text" placeholder='Enter Email' value={email}
                               onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Password</label>
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