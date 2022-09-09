import axios from "axios";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const BASE_URL = "https://marketplacefrt.azurewebsites.net/"
const REFRESH_METHOD_URL = '/api/User/refresh-token'

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

export const useAxiosPrivate = async (props) => {
    const tkn = sessionStorage.getItem('token');
    const token = JSON.parse(tkn);

    try{
        const response = await axios.get(BASE_URL+props, {
            headers: {
                'Authorization': 'Bearer ' + token.accessToken,
                'Content-Type': 'application/json',
            }}
        )
        if(response.status > 240){
            const isRefreshed = await refreshToken();
            if(isRefreshed){
            }
        }
        return response;
    }
    catch(err){
        const isRefreshed = false;
        //await refreshToken();
        if(isRefreshed){
            //return axiosAuthGet(methodUrl);
        }
    }
}

const refreshToken = async () => {

    var tkn = sessionStorage.getItem('token');
    var token = JSON.parse(tkn);
    var tokenModel = token.refreshToken;
    const response = await axios.post(BASE_URL + REFRESH_METHOD_URL, tokenModel, {
        headers: {
            'Content-Type': 'application/json'
        }},
    );
    sessionStorage.setItem('token', JSON.stringify(response?.data));
    if(response.status < 250){
        return true;
    }
    return false;
}