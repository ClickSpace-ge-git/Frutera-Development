import './Header2.scss'
import LanguageBar from '../LanguageBar/LanguageBar'
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function PageName() {
   let location = useLocation()
   const {t} = useTranslation()
   switch (location.pathname.split("/").filter(e => e)[0]){
      case "aboutus":
         return (t("aboutus"))
      case "products":
         return (t("products"))
      case "blogs":
         return (t("blogs"))
      case "cart":
         return (t("cart"))
      case "user":
         return (t("user"))
      default:
         return ("")
   }
}

function SwitchColor() {
   let location = useLocation()
   const {t} = useTranslation()

   return (
       <>
          <ul className="nav_links">
             <li className='navBtn'><a href="/home">{t('home')}</a></li>
             {location.pathname.substring(0, 8) === "/aboutus" ? (<li className='navBtn marked'><a href="/aboutus">{t('aboutus')}</a></li>) :
                 (<li className='navBtn'><a href="/aboutus">{t('aboutus')}</a></li>)}
             {location.pathname.substring(0, 9) === "/products" ? (<li className='navBtn marked'><a href="/products">{t('products')}</a></li>) :
                 (<li className='navBtn'><a href="/products">{t('products')}</a></li>)}
             {location.pathname.substring(0, 5) === "/blog" ? (<li className='navBtn marked'><a href="/blogs">{t('blogs')}</a></li>) :
                 (<li className='navBtn'><a href="/blogs">{t('blogs')}</a></li>)}
             {location.pathname === "/contactus" ? (<li className='navBtn marked'><a href="/contactus">{t('contactus')}</a></li>) :
                 (<li className='navBtn'><a href="/contactus">{t('contactus')}</a></li>)}


          </ul>
       </>
   )
}

export default function Header2() {
   let navigate = useNavigate()
   return (
       <>
          <div className="H2container">
             <div className="images">
                <img className='backgroundImage' src="https://cdn.discordapp.com/attachments/830721179895332914/1030102101151449108/background2.png" alt="dried_fruit_img" />
                <img className='whiteFigure' src="https://cdn.discordapp.com/attachments/830721179895332914/1030102173847146546/white_figure_2.png" alt="white_figure_2.png" />
                <div className="logoWithName" onClick={(e) => {navigate("/")}}>
                   <img className='logo' src="https://cdn.discordapp.com/attachments/830721179895332914/1030102174417551431/logo.png" alt="logo" />
                   <h3 className='logoName'>Frutera</h3>
                </div>
             </div>
             <div className='navigationBar'>
                <nav>
                   {SwitchColor()}
                </nav>
                <div className="btn">
                   <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                   <a href="/user"><i className="fa-solid fa-user"></i></a>
                </div>
                <div className="LLContainer">
                   <LanguageBar />
                </div>
             </div>

             <div className='text'>
                <h1>{PageName()}</h1>
             </div>
          </div>
       </>
   )
}