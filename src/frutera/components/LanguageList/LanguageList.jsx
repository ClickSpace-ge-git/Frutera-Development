import './LanguageList.scss';
import {useState} from 'react';

var drop = true;
const drp = document.getElementsByClassName("dropDownList");
const btn = document.getElementsByClassName("dropBtn");
var index = 0;
const languages = [
   {
      id: "ge",
      label: "ქართული"
   },
   {
      id: "us",
      label: "English"
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
      <a href="/#"><img src={require(`../../../images/Frutera/flags/${languages[0].id + ".jpg"}`)} alt={languages[0].id} />
         <p>{languages[0].label}</p>
      </a>
   );

   function handleClick(i) {
      index = i;
      setButtonText(
         <a href="/#"><img src={require(`../../../images/Frutera/flags/${languages[index].id + ".jpg"}`)} alt={languages[index].id} />
            <p>{languages[index].label}</p>
         </a>
      );
      ShowHideBox();
   }

   return (
      <>
         <button className="dropBtn btnpos1" onClick={() => {handleClick(index)}}>
            {buttonText}
         </button>
         <ul className='dropDownList hide'>
            <li onClick={() => {handleClick(0)}}><a href="/#"><img src={require("../../../images/Frutera/flags/ge.jpg")} alt="ge" /> <p>ქართული</p></a></li>
            <li onClick={() => {handleClick(1)}}><a href="/#"><img src={require("../../../images/Frutera/flags/us.jpg")} alt="us" /> <p>English</p></a></li>
            <li onClick={() => {handleClick(2)}}><a href="/#"><img src={require("../../../images/Frutera/flags/de.jpg")} alt="de" /> <p>Deutsch</p></a></li>
            <li onClick={() => {handleClick(3)}}><a href="/#"><img src={require("../../../images/Frutera/flags/ru.jpg")} alt="ru" /> <p>Русский</p></a></li>
         </ul>
      </>
   );
};

export default function LanguageList() {
   return (
      <div className='languages'>
         <ShowCurrentLanguage />
      </div>
   )
}