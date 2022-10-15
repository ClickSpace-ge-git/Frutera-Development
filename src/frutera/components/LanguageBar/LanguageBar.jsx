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
      label: "English",
      image:"https://media.discordapp.net/attachments/1030776866874851338/1030777930734915674/eng.png?width=815&height=611"
   },
   {
      id: "ka",
      label: "ქართული",
      image:"https://media.discordapp.net/attachments/1030776866874851338/1030776932561862686/ka.jpg?width=815&height=611"
   },
   {
      id: "de",
      label: "Deutsch",
      image:"https://media.discordapp.net/attachments/1030776866874851338/1030776932092088370/de.jpg?width=815&height=611"
   },
   {
      id: "ru",
      label: "Русский",
      image: "https://media.discordapp.net/attachments/1030776866874851338/1030776932901589012/ru.jpg?width=815&height=611"
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
          <label><img src={languages[sessionStorage.getItem('lan')].image}
                      alt={languages[sessionStorage.getItem('lan')].id} />
             <p>{languages[sessionStorage.getItem('lan')].label}</p>
          </label>
      );

      function handleClick(i) {
         index = i;
         setButtonText(
             <label><img src={languages[sessionStorage.getItem('lan')].image} alt={languages[index].id} />
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
                <li onClick={(e) => {handleClick(0);changeLanguage(0)}}><label><img src={languages[0].image} alt="us" /> <p>English</p></label></li>
                <li onClick={(e) => {handleClick(1);changeLanguage(1)}}><label><img src={languages[1].image} alt="ge" /> <p>ქართული</p></label></li>
                <li onClick={(e) => {handleClick(2);changeLanguage(2)}}><label><img src={languages[2].image} alt="de" /> <p>Deutsch</p></label></li>
                <li onClick={(e) => {handleClick(3);changeLanguage(3)}}><label><img src={languages[3].image} alt="ru" /> <p>Русский</p></label></li>
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