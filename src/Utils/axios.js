import axios from "axios";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const BASE_URL = "https://marketplacefrt.azurewebsites.net/"

export const refresher = (props) => {
    const interval = setInterval(() => props(), 1000);
}

export const sendRequest = async (url,props) =>{
    const response = await (await axios.get(url))
    console.log(response?.data)
    return(response?.data)
}

export function authenticateUser(){
    return(true)
}

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
})

const useAxiosPrivate = () => {
    let navigate = useNavigate()
    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${localStorage.getItem("Frutera-User")?.token}`;
                }
                return config;
            }, (err) => {
                Promise.reject(err)
            }
        );

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async(error) => {
                const prevReq = error?.config;
                if(error?.response?.status === 401){
                    localStorage.removeItem("Frutera-User")
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );


    },)
    return axiosPrivate;
}