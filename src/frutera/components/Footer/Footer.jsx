import './Footer.scss'
import logo from "../../../images/Frutera/logo.png"
import {useTranslation} from "react-i18next";

export default function Footer() {
   const {t} = useTranslation()
   return (
      <div className="FooterContainer">
         <footer>
            <div className="Fcontainer">
               <div className='otherComponents'>
                  <div className='logoWithName'>
                     <div className='image'>
                        <img src={logo} alt="logo" />
                     </div>
                     <h1>Frutera</h1>
                  </div>
                  <div className='otherInfo'>
                     <ul>
                        <li>
                           <i className="fa-solid fa-phone"></i>
                           <p>+995 591 21 56 74</p>
                        </li>
                        <li>
                           <i className="fa-solid fa-at"></i>
                           <p>info@frutera.ge</p>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="components">
                  <div className="column">
                     <h4>{t("aboutcomp")}</h4>
                     <ul>
                        <li><a href="/aboutus">{t("aboutus")}</a></li>
                        <li><a href="/products">{t("products")}</a></li>
                        <li><a href="/contactus">{t("contactus")}</a></li>
                     </ul>
                  </div>
                  <div className="column">
                     <h4>{t("geth")}</h4>
                     <ul>
                        <li><a href="/#">{t("privacyp")}</a></li>
                        <li><a href="/#">{t("shipping")}</a></li>
                        <li><a href="/terms&conditions">{t("terms")}</a></li>
                        <li><a href="/payments">{t("payment")}</a></li>
                     </ul>
                  </div>
                  <div className="column">
                     <h4>{t("followus")}</h4>
                     <ul>
                        <a href="https://www.facebook.com/Frutera-%E1%83%A4%E1%83%A0%E1%83%A3%E1%83%A2%E1%83%94%E1%83%A0%E1%83%90-105816161948992"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="/#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/frutera_ge/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}