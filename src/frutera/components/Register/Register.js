import React, {useState} from 'react';
import './Register.scss'
function Register() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id == "phoneNumber"){
            setPhoneNumber(value);
        }
    }
    

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,phoneNumber,password,confirmPassword);
    }

    return(
  <div className="bigRcontainer">
  <div class="Rcontainer">
    <div class="title">Registration</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required/>
          </div>
          <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" id="lastName" value={lastName} onChange = {(e) => handleInputChange(e)} placeholder="LastName" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
             <input type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input  type="text" id="phoneNumber" value={phoneNumber} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number" required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password" required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password" required/>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div>
  </div>
    )       
}

export default Register;

// {/* <div class="container">
//         <div class="title">Registration</div>
//         <div class="content">
//           <form action="#">
//             <div class="user-details">
//                     <label className="input-box" for="firstName">First Name </label>
//                     <input className="input-box" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required/>
//                     <label className="details" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="input-box" onChange = {(e) => handleInputChange(e)} placeholder="LastName" required/>
//                     <label className="details" for="email">Email </label>
//                     <input  type="email" id="email" className="input-box" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" required/>
//                     <label className="details" for="password">Password </label>
//                     <input className="input-box" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password" required/>
//                     <label className="details" for="confirmPassword">Confirm Password </label>
//                     <input className="input-box" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password" required/>
//             </div>
//             <div class="button">
//           <input type="submit" value="Register"/>
//         </div>
//             {/* <div class="button">
//                 <input onClick={()=>handleSubmit()} type="submit" />
//                 </div> */}
//       </form>
//     </div>
//   </div> */}
