import './RegisterPage.scss'
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "../../Utils/axios";
import {useTranslation} from "react-i18next";

const REGISTER_URL = '/api/User/RegisterUser';

export default function RegisterPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repPassword,setRepPassword] = useState('')
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [errMsg, setErrMsg] = useState('');
   const {t} = useTranslation()

   let navigate = useNavigate()

   const handleSubmit = async (e) => {
      e.preventDefault();
      if(repPassword !== password){
         alert("Passwords do not Match")
      }
      else{
         try {
            const model = JSON.stringify({
               "email": email,
               "password": password,
               "firstName": firstName,
               "lastName": lastName
            });
            const response = await axios.post(REGISTER_URL, model, {
               headers: {
                  'Content-Type': 'application/json'
               }}
            );
            if(response.status < 250)
            {
               //const accessToken = response?.data;
               setEmail('');
               setPassword('');
               setFirstName('');
               setLastName('');
               navigate("/login", { replace: true })
            }
         } catch (err) {
            if (!err?.response) {
               setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
               setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
               //setErrMsg('Unauthorized');
               setErrMsg('Register Failed');
            } else {
               setErrMsg('Register Failed');
            }
            alert(errMsg)
         }
      }
   }

   return (
      <>
         <div className="RegisterPage_container">
            <div className="RP_box">
               <div className="RegisterPage_imagePart">
                  <img src={require('../../images/UserPage/background.png')} alt="" />
               </div>
            
               <div className='RP_RightPart'>
                  <form onSubmit={handleSubmit}>
                     <h1>{t('register')}</h1>

                     <div class="RP_input_components">
                        <label>{t('fname')}</label>
                        <input type="text" placeholder="Enter First Name"
                               autoComplete="off"
                               value={firstName}
                               onChange={(e) => {setFirstName(e.target.value)}}
                               required/>
                     </div>
                     <div className="RP_input_components">
                        <label>{t('lname')}</label>
                        <input type="text" placeholder="Enter Last Name"
                               autoComplete="off"
                               value={lastName}
                               onChange={(e) => {setLastName(e.target.value)}}
                               required/>
                     </div>

                     <div class="RP_input_components">
                        <label>{t('email')}</label>
                        <input type="text" placeholder="Enter Email"
                               autoComplete="off"
                               value={email}
                               onChange={(e) => {setEmail(e.target.value)}}
                               required/>
                     </div>

                     <div class="RP_input_components">
                        <label>{t('password')}</label>
                        <input type="password" placeholder="Enter Password"
                               autoComplete="off"
                               value={password}
                               onChange={(e) => {setPassword(e.target.value)}}
                               required/>
                     </div>

                     <div class="RP_input_components">
                        <label>{t('rep')} {t('password')}</label>
                        <input type="password" placeholder="Repeat Password"
                               autoComplete="off"
                               value={repPassword}
                               onChange={(e) => {setRepPassword(e.target.value)}}
                               required/>
                     </div>

                     <div className="RP_Lsubmit"><button type="submit">{t('signup')}</button></div>
                     <div className="RP_Lsubmit"><button onClick={(e) => {navigate("/login")}}>{t('haveacc')}</button></div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}