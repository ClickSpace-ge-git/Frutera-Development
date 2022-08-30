import {useEffect, useState} from "react";

export default function VoucherElementForm({props, close}){

    const [name,setName] = useState("")
    const [discount,setDiscount] = useState("")
    const [startDate,setStartDate] = useState(Date)
    const [endDate,setEndDate] = useState(Date)
    const [des,setDes] = useState("")

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

            <h3>Create Voucher</h3>

            <div className='Velement'>
                <div className='textPart'>

                    <div className='inputBx'>
                        <label className='titleLabel'>Name</label>
                        <input type="text" placeholder='Enter Name'
                               value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>Discount</label>
                        <input type="text" placeholder='Enter Discount'
                               value={discount} onChange={(e) => {setDiscount(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>Start Date</label>
                        <input type="date" placeholder='Enter Start Date'
                               value={startDate} onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>

                    <div className='inputBx'>
                        <label className='titleLabel'>End Date</label>
                        <input type="date" placeholder='Enter End Date'
                               value={endDate} onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                </div>

                <div className='descriptionPart'>
                    <div className='inputBx'>
                        <label className='titleLabel forTextArea'>Description</label>
                        <textarea  placeholder='Enter Description'
                        value={des} onChange={(e) => {setDes(e.target.value)}}></textarea>
                    </div>

                    <div className='MFIBtns'>
                        <button className='MFIBtn' onClick={() => {handleSubmit()}}>Add Voucher</button>
                        <button className='MFIBtn' onClick={() => {close()}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}