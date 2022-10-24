import {authenticateUser, authenticateAdmin, axiosPrivate} from "../../../Utils/axios";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";

const USER_URL = "/api/User/IsLogged"
const ADMIN_URL = "/api/Admin/IsAdmin"

export default function RouteProtector({children}){
    let location = useLocation()
    let navigate = useNavigate()
    const [goAhead,setGoAhead] = useState(false)
    let load = <LoadingPage/>


    const route = async () => {
        try{
            const response = await axiosPrivate.get(USER_URL)
            if(response.status === 200){
                setGoAhead(true)
                load = children
            }else{
                setGoAhead(false)
                load = <LoadingPage/>
            }
        }catch (err){
            try{
                const response1 = await axiosPrivate.get(ADMIN_URL)
                if(response1.status === 200){
                    setGoAhead(true)
                    load = children
                }else{
                    setGoAhead(false)
                    load = <LoadingPage/>
                }
            }catch (err){
                setGoAhead(false)
                load = <LoadingPage/>
                navigate("/login",{replace:true, path:location.pathname})
            }
        }
    }

    useEffect(() => {
        route()

    },)

    return (load === <LoadingPage/> ) ? (
        <LoadingPage/>
    ) : (
        goAhead === true ? (
            children
        ) : (
            <LoadingPage/>
        )
    )
}

export function AdminRouteProtector({children}){
    let location = useLocation()
    let navigate = useNavigate()
    const [goAhead,setGoAhead] = useState(false)
    let load = <LoadingPage/>


    const route = async () => {
        try{
            const response = await axiosPrivate.get(ADMIN_URL)
            if(response.status === 200){
                setGoAhead(true)
                load = children
            }else{
                setGoAhead(false)
                load = <LoadingPage/>
            }
        }catch (err){
            setGoAhead(false)
            load = <LoadingPage/>
            navigate("/login",{replace:true, path:location.pathname})
        }
    }

    useEffect(() => {
        route()

    },)

    return (load === <LoadingPage/> ) ? (
        <LoadingPage/>
    ) : (
        goAhead === true ? (
            children
        ) : (
            <LoadingPage/>
        )
    )
}

/*
    return (JSON.parse(sessionStorage.getItem("token")) !== null && JSON.parse(sessionStorage.getItem("token")).accessToken !== "none") ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
 */