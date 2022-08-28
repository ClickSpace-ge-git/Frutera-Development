import React, {useState} from 'react';
import './Login.scss'
function Login() {
    

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
   

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        } 
    }
    
    const handleSubmit  = () => {
        console.log(email,password);
    }

    return(
      <div class="bigLcontainer">  
  <div class="Lcontainer">
    <div class="title">Login</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Email</span>
             <input type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password" required/>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  </div>
  </div>

    )       
}

export default Login;
