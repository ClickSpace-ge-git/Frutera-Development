import {useEffect, useState} from "react";
import "./BlogElementForm.scss";

export default function BlogElementForm({props,close}){
    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [header,setHeader] = useState("")
    const [footer,setFooter] = useState("")

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

            <h3>Edit Blogs List Element</h3>

            <form className='Oelement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>Title</label>
                        <input type="text" placeholder='Enter Name'
                               value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Date</label>
                        <input type="date" placeholder='Enter Date'
                               value={displayDate(date)} onChange={(e) => {setDate(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Header</label>
                        <input type="text" placeholder='Enter Email'
                               value={header} onChange={(e) => {setHeader(e.target.value)}}/>
                    </div>
                    <div className='inputBx'>
                        <label className='titleLabel'>Footer</label>
                        <input type="text" placeholder='Enter Phone Number'
                               value={footer} onChange={(e) => {setFooter(e.target.value)}}/>
                    </div>
                </div>

                <div className='uploadPart'>
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