import './LoginPage.scss'
import {useState} from "react";
import axios from "../../Utils/axios";
import {useNavigate} from "react-router-dom";

const LOGIN_URL = '/api/User/LoginUser';

export default function LoginPage() {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const [error,setError] = useState("")

   let navigate = useNavigate()

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const model = JSON.stringify({
            "email": email,
            "password": password
         });
         const response = await axios.post(LOGIN_URL, model, {
            headers: {
               'Content-Type': 'application/json'
            }}
         )
         if(response.status < 250)
         {
            const tokenObject = response?.data;
            setEmail('');
            setPassword('');
            sessionStorage.setItem('token', JSON.stringify(tokenObject));
            navigate("/user", { replace: true });
         }
         else{
            setError('Success');
         }
      } catch (err) {
         if (!err?.response) {
            setError('No Server Response');
         } else if (err.response?.status === 400) {
            setError('Missing Username or Password');
         } else if (err.response?.status === 401) {
            //setErrMsg('Unauthorized');
            setError('Login Failed');
         } else {
            setError('Login Failed');
         }
         alert(error)
      }
   }

   return (
      <>
         <div className="LoginPage_container">
            <div className="LP_box">
               <div className="LoginPage_imagePart">
                  <img src={require('../../images/UserPage/background.png')} alt="" />
               </div>
            
               <div className='LP_RightPart'>
                  <form onSubmit={handleLogin}>
                     <div class="LP_MainTitle"><h1>Log in</h1></div>

                     <div class="LP_input_components">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required/>
                     </div>

                     <div class="LP_input_components">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"
                               autoComplete="off"
                               value={password}
                               onChange={(e) => {setPassword(e.target.value)}}
                               required/>
                     </div>

                     <div className="LP_Lsubmit"><button type="submit">Log in</button></div>
                     <div className="LP_Lsubmit"><button onClick={(e) => {navigate("/register")}}>Register</button></div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}