import './TextWithRightImage.scss'
import {useTranslation} from "react-i18next";
import {translateBaseLocal} from "../../../Utils/data";

export default function TextWithRightImage() {
   const {t} = useTranslation()
   const translate = (props) => {
      return translateBaseLocal[props][sessionStorage.getItem("lan")]
   }
return (
   <div className="TWRIcontainer">
      <div className="components">
         <div className="text">
            <h1>{translate("contactinfo")}</h1>
            <ul>
               <li>{translate("phone")}: (+995) 591 21 56 74</li>
               <li>{translate("address")}: 221B Baker Street</li>
               <li>{translate("email")}: info@frutera.ge</li>
            </ul>
            <div className="componentBtns">
               <a href='/#' className="btn">{t('ourteam')}</a>
               <a href='/aboutus' className="btn moreStyle">{t('learnm')}</a>
            </div>
         </div>
         <img src={require("../../../images/Frutera/img2.jpg")}/>
      </div>
   </div>
)
}