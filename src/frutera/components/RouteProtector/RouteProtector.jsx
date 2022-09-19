import {authenticateUser, authenticateAdmin} from "../../../Utils/axios";
import {Navigate, useLocation} from "react-router-dom";


export default function RouteProtector({children}){
    let auth = authenticateUser()
    let location = useLocation()

    return auth === true ? (
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