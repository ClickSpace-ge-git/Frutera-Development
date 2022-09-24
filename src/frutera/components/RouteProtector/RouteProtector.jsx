import {authenticateUser, authenticateAdmin, axiosPrivate} from "../../../Utils/axios";
import {Navigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const USER_URL = "/api/User/IsLogged"

export default function RouteProtector({children}){
    let location = useLocation()

    return (JSON.parse(sessionStorage.getItem("token")) !== null && JSON.parse(sessionStorage.getItem("token")).accessToken !== "none") ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}

export function AdminRouteProtector({children}){
    let auth = authenticateAdmin()
    let location = useLocation()

    return auth === true ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}