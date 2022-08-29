import {useEffect, useState} from "react";


export default function LeftSideElement({props,status,filter}){
    const [isActive,setActive] = useState("")

    const setActiveStatus = () => {
        if(status === props.filter){
            setActive("liActive")
        }else{
            setActive("")
        }
    }

    useEffect(() => {
        setActiveStatus()
    },[])


    return(
        <li className="liActive" onClick={() => {filter(props.filter)}}>
            {props.filter}
        </li>
    )
}