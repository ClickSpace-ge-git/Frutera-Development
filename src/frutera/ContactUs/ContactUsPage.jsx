import "./ContactUsPage.scss"
import Header2 from '../components/Header2/Header2'
import Footer from '../components/Footer/Footer'
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {translateBaseLocal} from "../../Utils/data";

export default function ContactUsPage() {
   const [textLen,setTextLen] = useState(0)
   const {t} = useTranslation()
   const translate = (props) => {
      return translateBaseLocal[props][sessionStorage.getItem("lan")]
   }

   return (
      <>
         <Header2 />
         <div class="ContactUsPage_container">
            <div class="CUP_box">
               <div class="CUP_left_part">
                  <h2>{t("contactus")}</h2>
                  <form>
                     <div class="CUP_input_row">
                        <div class="CUP_input_components">
                           <label>{t("name")}</label>
                           <input type="text" placeholder="Name"/>
                        </div>

                        <div class="CUP_input_components">
                           <label>{t("phonenum")}</label>
                           <input type="text" placeholder="Phone"/>
                        </div>
                     </div>

                     <div class="CUP_input_row">
                        <div class="CUP_input_components">
                           <label>{t("email")}</label>
                           <input type="text" placeholder="Email"/>
                        </div>
                     
                        <div class="CUP_input_components">
                           <label>{t("reason")}</label>
                           <input type="text" placeholder="Problem Type"/>
                        </div>
                     </div>
                     <div className="CUP_TextareaPart">
                        <label>{t("message")}</label>
                        <textarea id="textarea_1" rows="5" placeholder="Message" maxLength="1000" onChange={(e) => {setTextLen(e.target.value.length)}}></textarea>
                        <p class="textarea_limit" id="textarea_limit_id">{textLen}/1000</p>
                     </div>
                     <button className="CUP_Lsubmit" type="submit">{translate("send")}</button>
                  </form>
               </div>

               <div class="CUP_right_part">
                  <h2>{t("reachus")}</h2>
                  <table className="CUP_table">
                     <tr>
                           <td>{t("email")}:</td>
                           <td><a href="#">Test.Tester@gmail.com</a></td>
                     </tr>
                     <tr>
                           <td>{t("phonenum")}:</td>
                           <td>(+995) 555 123 456</td>
                     </tr>
                     <tr>
                           <td>{t("address")}:</td>
                           <td>221B, Baker Street</td>
                     </tr>
                  </table><br/><br/><br/>

                  <div class="news_mode">
                     <h3>{translate("news")}</h3><br/>
                     <p>{translate("newsText")}</p><br/>
                     <input type="text" placeholder="Email"/>
                     <button>{translate("submit")}</button>
                  </div>
               </div>
         </div>
      </div>
      <Footer />

      </>
   )
}