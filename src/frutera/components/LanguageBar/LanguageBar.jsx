import './LanguageBar.scss';
import {useState} from 'react';
import i18next from "i18next";

var drop = true;
const drp = document.getElementsByClassName("dropDownList");
const btn = document.getElementsByClassName("dropBtn");
let index = 0;
const languages = [
   {
      id: "en",
      label: "English"
   },
   {
      id: "ka",
      label: "ქართული"
   },
   {
      id: "de",
      label: "Deutsch"
   },
   {
      id: "ru",
      label: "Русский"
   },
]

export default function LanguageList() {
   if(sessionStorage.getItem('lan') === null){
      sessionStorage.setItem('lan',0)
   }

   let index = sessionStorage.getItem('lan')

   function ShowHideBox() {
      if (drop) {
         drp[0].className = drp[0].className.replace(" hide", " show")
         btn[0].className = btn[0].className.replace(" btnpos1", " btnpos2")
         drop = false
      } else {
         drp[0].className = drp[0].className.replace(" show", " hide")
         btn[0].className = btn[0].className.replace(" btnpos2", " btnpos1")
         drop = true
      }
   }

   const ShowCurrentLanguage = () => {
      if(sessionStorage.getItem('lan') === null){
         sessionStorage.setItem('lan',0)
      }
      const [buttonText, setButtonText] = useState(
          <label><img src={require(`../../../images/Frutera/flags/${languages[sessionStorage.getItem('lan')].id + ".jpg"}`)}
                      alt={languages[sessionStorage.getItem('lan')].id} />
             <p>{languages[sessionStorage.getItem('lan')].label}</p>
          </label>
      );

      function handleClick(i) {
         index = i;
         setButtonText(
             <label><img src={require(`../../../images/Frutera/flags/${languages[index].id + ".jpg"}`)} alt={languages[index].id} />
                <p>{languages[index].label}</p>
             </label>
         );
         ShowHideBox();
      }

      function changeLanguage(i){
         i18next.changeLanguage(languages[index].id)
         sessionStorage.setItem("lan",index)
      }

      return (
          <>
             <button className="dropBtn btnpos1" onClick={() => {handleClick(index)}}>
                {buttonText}
             </button>
             <ul className='dropDownList hide'>
                <li onClick={(e) => {handleClick(0);changeLanguage(0)}}><label><img src={require("../../../images/Frutera/flags/en.jpg")} alt="us" /> <p>English</p></label></li>
                <li onClick={(e) => {handleClick(1);changeLanguage(1)}}><label><img src={require("../../../images/Frutera/flags/ka.jpg")} alt="ge" /> <p>ქართული</p></label></li>
                <li onClick={(e) => {handleClick(2);changeLanguage(2)}}><label><img src={require("../../../images/Frutera/flags/de.jpg")} alt="de" /> <p>Deutsch</p></label></li>
                <li onClick={(e) => {handleClick(3);changeLanguage(3)}}><label><img src={require("../../../images/Frutera/flags/ru.jpg")} alt="ru" /> <p>Русский</p></label></li>
             </ul>
          </>
      );
   };

   return (
      <div className='languages'>
         <ShowCurrentLanguage />
      </div>
   )
}