import './RegisterPage.scss'
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "../../Utils/axios";

const REGISTER_URL = '/api/User/RegisterUser';

export default function RegisterPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repPassword,setRepPassword] = useState('')
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [errMsg, setErrMsg] = useState('');

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
                     <h1>Register</h1>

                     <div class="RP_input_components">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter First Name"
                               autoComplete="off"
                               value={firstName}
                               onChange={(e) => {setFirstName(e.target.value)}}
                               required/>
                     </div>
                     <div className="RP_input_components">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter Last Name"
                               autoComplete="off"
                               value={lastName}
                               onChange={(e) => {setLastName(e.target.value)}}
                               required/>
                     </div>

                     <div class="RP_input_components">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email"
                               autoComplete="off"
                               value={email}
                               onChange={(e) => {setEmail(e.target.value)}}
                               required/>
                     </div>

                     <div class="RP_input_components">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"
                               autoComplete="off"
                               value={password}
                               onChange={(e) => {setPassword(e.target.value)}}
                               required/>
                     </div>

                     <div class="RP_input_components">
                        <label>Repeat Password</label>
                        <input type="password" placeholder="Repeat Password"
                               autoComplete="off"
                               value={repPassword}
                               onChange={(e) => {setRepPassword(e.target.value)}}
                               required/>
                     </div>

                     <div className="RP_Lsubmit"><button type="submit">Sign Up</button></div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}