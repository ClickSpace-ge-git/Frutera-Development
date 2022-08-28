import React, {useState} from 'react';
import proPic from '../../../images/UserPage/proPic.jpg';

import './User.scss'
function User() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [changePassword,setChangePassword] = useState(null);
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
        if(id === "changePassword"){
          setChangePassword(value);
      }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id == "phoneNumber"){
            setPhoneNumber(value);
        }
    }
    

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,phoneNumber,password,changePassword,confirmPassword);
    }

    return(
      <>
           <div class="bigUcontainer">
     <div class="Ucontainer">
          <div class="title">Profile</div>
          <div class="content">
            <div class="imageCont">
          <img src={proPic}className="profile_img" alt="profile" />
          <h3 className="nameSurname">Luka Karoiani</h3>
          <div class="button">
                <input type="submit" value="Delete Profile" href="#delete" />
              </div>
          </div>
          <div class="secondCont" >
            <form action="#">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">First Name</span>
                  <input type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required />
                </div>
                <div class="input-box">
                  <span class="details">Last Name</span>
                  <input type="text" id="lastName" value={lastName} onChange={(e) => handleInputChange(e)} placeholder="LastName" required />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" required />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => handleInputChange(e)} placeholder="Phone Number" required />
                </div>

                <h3>Would you like to change Password?</h3>
                <br />
                <br />
                <div class="input-box">
                  <span class="details">Current Password</span>
                  <input type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
                <div class="input-box">
                  <span class="details">Change Password</span>
                  <input type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Change Password" />
                </div>
                <div class="input-box">
                  <span class="details">Confirm Password</span>
                  <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                </div>
              </div>
              <div class="button">
                <input type="submit" value="Confirm Changes" />
              </div>
            </form>
          </div>
          <tr class="cart-product">
                                            <th class="order-product">შეკვეთის ნომერი</th>
                                            <th class="order-product">შეკვეთის თარიღი</th>
                                            <th class="order-product">გადახდილი თანხა</th>
                                            <th class="order-product">სტატუსი</th>
                                            <th class="order-product">შეკვეთის სტატუსი</th>
                                            <th class="order-product"></th>
                                          </tr>
        </div>
        </div>
        </div>

        </>

    )       
}

export default User;
