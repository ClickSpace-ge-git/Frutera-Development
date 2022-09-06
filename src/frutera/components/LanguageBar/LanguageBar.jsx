import './LanguageBar.scss';
import {useState} from 'react';

var drop = true;
const drp = document.getElementsByClassName("dropDownList");
const btn = document.getElementsByClassName("dropBtn");
var index = 0;
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
      const [buttonText, setButtonText] = useState(
          <label><img src={require(`../../../images/Frutera/flags/${languages[0].id + ".jpg"}`)} alt={languages[0].id} />
             <p>{languages[0].label}</p>
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
         let location = window.location.href
         let locationR = window.location.href.substring(location.length-8,location.length-2)
         if(
             locationR === "/?lng="
         ){
            window.location.replace(location.substring(0,location.length-2) + languages[index].id)
         }
         else if(location[location.length-1] !== "/"){
            location = location + '/'
            window.location.replace(location + "?lng=" + languages[index].id)
         }else{
            window.location.replace(location + "?lng=" + languages[index].id)
         }
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