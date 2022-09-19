import axios from "axios";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const BASE_URL = "https://marketplacefrt.azurewebsites.net/"
const REFRESH_METHOD_URL = '/api/User/refresh-token'

export const refresher = (props) => {
    const interval = setInterval(() => props(), 1000);
}

export const sendRequest = async (url, props) => {
    const response = await (await axios.get(url))
    console.log(response?.data)
    return (response?.data)
}

export function authenticateUser() {
    return (true)
}

export function authenticateAdmin() {
    return (false)
}

export function convertToBase64(props) {

    const getBase64 = async (file) => {
        return new Promise(resolve => {
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    return getBase64(props)
}

export default axios.create({
    baseURL: BASE_URL
})

const tkn = sessionStorage.getItem('token');
const token = JSON.parse(tkn);

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json','Authorization': 'Bearer '+token.accessToken,'Access-Control-Allow-Origin': "*"},
    withCredentials: true
})

export const useAxiosPrivate = async ({props, body}) => {
    let navigate = useNavigate()
    const tkn = sessionStorage.getItem('token');
    if (tkn === null) {
        navigate("/login", {replace: true})
        return false
    }
    const token = JSON.parse(tkn);


    try {
        const response = await axios.get(BASE_URL + props, {
                headers: {
                    'Authorization': 'Bearer ' + token.accessToken,
                    'Content-Type': 'application/json',
                }
            }
        )
        if (response.status > 240) {
            const isRefreshed = await refreshToken();
            if (isRefreshed) {
            }
        }
        return response;
    } catch (err) {
        const isRefreshed = false;
        //await refreshToken();
        if (isRefreshed) {
            //return axiosAuthGet(methodUrl);
        }
    }
}

const refreshToken = async () => {

    const tkn = sessionStorage.getItem('token');
    const token = JSON.parse(tkn);
    const tokenModel = token.refreshToken;
    const response = await axios.post(BASE_URL + REFRESH_METHOD_URL, tokenModel, {
            headers: {
                'Content-Type': 'application/json'
            }
        },
    );
    sessionStorage.setItem('token', JSON.stringify(response?.data));
    if (response.status < 250) {
        return true;
    }
    return false;
}

export const UseAxiosP = () => {
    let navigate = useNavigate()
    const tkn = sessionStorage.getItem('token');
    const token = JSON.parse(tkn);

    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                config.headers['Authorization'] = `Bearer ${token}`;
                config.headers['Content-Type'] = `application/json;charset=UTF-8`;
                config.headers['Access-Control-Allow-Origin'] = "*";
                return config;
            }, (err) => {
                Promise.reject(err)
            }
        );

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevReq = error?.config;
                if (error?.response?.status === 401) {
                    sessionStorage.removeItem("token")
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        }

    },)

    return axiosPrivate;
}