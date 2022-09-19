import React, {useState} from 'react';
import proPic from '../../../images/UserPage/proPic.jpg';

import './User.scss'
import {useTranslation} from "react-i18next";

function User() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [changePassword, setChangePassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const {t} = useTranslation()

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "changePassword") {
            setChangePassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
        if (id === "phoneNumber") {
            setPhoneNumber(value);
        }
    }


    const handleSubmit = () => {
        console.log(firstName, lastName, email, phoneNumber, password, changePassword, confirmPassword);
    }

    return (
        <>
            <div class="bigUcontainer">
                <div class="Ucontainer">
                    <div class="title">{t('profile')}</div>
                    <div class="content">
                        <div class="imageCont">
                            <img src={proPic} className="profile_img" alt="profile"/>
                            <h3 className="nameSurname">Luka Karoiani</h3>
                            <div class="button">
                                <input type="submit" value={t('delete') + " " + t('profile')} href="#delete"/>
                            </div>
                        </div>
                        <div class="secondCont">
                            <form onSubmit={handleSubmit}>
                                <div class="user-details">
                                    <div class="input-box">
                                        <span class="details">{t('fname')}</span>
                                        <input type="text" value={firstName} onChange={(e) => handleInputChange(e)}
                                               id="firstName" placeholder={t('fname')} required/>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">{t('lname')}</span>
                                        <input type="text" id="lastName" value={lastName}
                                               onChange={(e) => handleInputChange(e)} placeholder={t('lname')}
                                               required/>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">{t('email')}</span>
                                        <input type="email" id="email" value={email}
                                               onChange={(e) => handleInputChange(e)} placeholder={t('email')}
                                               required/>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">{t('phonenum')}</span>
                                        <input type="text" id="phoneNumber" value={phoneNumber}
                                               onChange={(e) => handleInputChange(e)} placeholder={t('phonenum')}
                                               required/>
                                    </div>

                                    <h3>{t('changepass')}</h3>
                                    <br/>
                                    <br/>
                                    <div class="input-box">
                                        <span class="details">{t('current')} {t('password')}</span>
                                        <input type="password" id="password" value={password}
                                               onChange={(e) => handleInputChange(e)} placeholder={t('password')}/>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">{t('change')} {t('password')}</span>
                                        <input type="password" id="changepassword" value={password}
                                               onChange={(e) => handleInputChange(e)}
                                               placeholder={t('change') + " " + t('password')}/>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">{t('confirm')} {t('password')}</span>
                                        <input type="password" id="confirmPassword" value={confirmPassword}
                                               onChange={(e) => handleInputChange(e)}
                                               placeholder={t('confirm') + " " + t('password')}/>
                                    </div>
                                </div>
                                <div class="button">
                                    <input type="submit" value={t('confirmchang')}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default User;
