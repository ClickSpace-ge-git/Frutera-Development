import './BodyStyle.scss'
import {use} from "i18next";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

function changePosition(i) {
   let m = document.getElementsByClassName("liBtn");
   for (var j = 0; j < m.length; j++) {
      m[j].className = m[j].className.replace("marked", "none")
   }
   m[i].className = m[i].className.replace("none", "marked")
}

export default function BodyStyle({setPage}) {
   let navigate = useNavigate()
   const {t} = useTranslation()
   return (
      <>
         <div className="BScontainer">
            <div className="logoWithName" onClick={(e) => {navigate("/")}}>
               <img className='logo' src={require('../../../../images/White_logo.png')} alt="logo" />
               <h3 className='logoName'>Frutera</h3>
            </div>
            <div className='background1'></div>

            <div className="leftPart">
               <ul>
                  <li className='liBtn marked' onClick={(e) => {changePosition(0);setPage("Dashboard")}}><i className="fa-solid fa-house"></i><p>{t("dashboard")}</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(1);setPage("Products")}}><i className="fa-solid fa-table"></i><p>{t("product")} {t("list")}</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(2);setPage("Categories")}}><i className="fa-solid fa-table"></i><p>{t("categories")} {t("list")}</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(3);setPage("Users")}}><i className="fa-solid fa-users"></i><p>{t("registered")} {t("users")}</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(4);setPage("Blogs")}}><i className="fa-solid fa-cart-shopping"></i><p>{t("orders")}</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(5);setPage("Vouchers")}}><i className="fa-solid fa-star"></i><p>{t("vouchers")}</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(6);setPage("Blogs")}}><i className="fa-solid fa-star"></i><p>{t("blogs")}</p></li>
               </ul>
            </div>
         </div>
      </>
   )
}