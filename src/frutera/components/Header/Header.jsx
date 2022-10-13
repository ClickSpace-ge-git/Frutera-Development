import './Header.scss';
import LanguageBar from '../LanguageBar/LanguageBar'
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export default function MainHeader() {
   let navigate = useNavigate()
   const {t} = useTranslation()
   return (
      <>
         <div className='Hcontainer'>
            <header>
               <div className='backgroundImage'>
                  <img src={require("../../../images/HomePage/full_background.png")} alt="full_background.png" />
               </div>
               <div className='backgroundImage2'>
                  <img src={require("../../../images/HomePage/full_background2.png")} alt="background.png" />
               </div>

               <div className='navigationBar'>
                  <div>
                     <div className='logo' onClick={(e) => {navigate("/")}}>
                        <img src={require('../../../images/Frutera/logo.png')} alt="logo" />
                     </div>
                  </div>

                  <div className='rightPart'>
                     <input type="checkbox" id="check" />
                     <label for="check" class="checkbtn">
                        <i class="fa-solid fa-bars"></i>
                     </label>

                     <ul className="nav_links">
                        <label for="check" class="closeBtn">
                           <i className="fa-solid fa-xmark"></i>
                        </label>

                        <li className='navBtn marked'><a href="/">{t("home")}</a></li>
                        <li className='navBtn'><a href="/aboutus">{t("aboutus")}</a></li>
                        <li className='navBtn'><a href="/products">{t("products")}</a></li>
                        <li className='navBtn'><a href="/blogs">{t("blogs")}</a></li>
                        <li className='navBtn'><a href="/contactus">{t("contactus")}</a></li>
                     </ul>

                     <div className="btn">
                        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="/user"><i className="fa-solid fa-user"></i></a>
                     </div>

                     <div className="LLcontainer">
                        <LanguageBar />
                     </div>
                  </div>
               </div>

               <div className='text'>
                  <h1>{t("bestfruit")}</h1>
                  <p>{t("belowbestfruit")}</p>
                  <button>{t("learnm")}</button>
               </div>

            </header>
         </div>
      </>
   )
}