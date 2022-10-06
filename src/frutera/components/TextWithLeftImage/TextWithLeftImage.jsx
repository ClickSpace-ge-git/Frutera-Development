import './TextWithLeftImage.scss'
import {useTranslation} from "react-i18next";
import {translateBaseLocal} from "../../../Utils/data";

export default function TextWithLeftImage() {
   const {t} = useTranslation()
   const translate = (props) => {
      return translateBaseLocal[props][sessionStorage.getItem("lan")]
   }
    return (
      <div className="TWLIcontainer">
         <div className="components">
            <img src={require("../../../images/Frutera/img1.jpg")} alt="products"/>
            <div className="text">
               <h4>{t('aboutus')}</h4>
               <h1>{t('ourmis&val')}</h1>
               <p>
                  {translate("aboutUs1")}
               </p>
               <div className="componentBtns">
                  <a href='/#' className="btn">{t('ourteam')}</a>
                  <a href='/aboutus' className="btn moreStyle">{t('learnm')}</a>
               </div>
            </div>
         </div>
      </div>
    )
}