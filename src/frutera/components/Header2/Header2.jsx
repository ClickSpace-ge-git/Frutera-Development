import './Header2.scss'
import LanguageList from '../LanguageBar/LanguageBar'
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

function PageName() {
   let location = useLocation()
   switch (location.pathname){
      case "/aboutus":
         return ("About Us")
      case "/products":
         return ("Products")
      case "/blog":
         return ("Blog")
      case "/cart":
         return ("Cart")
      case "/user":
         return ("Profile")
      default:
         return ("")
   }
}

function SwitchColor() {
   let {t} = useTranslation()
   let location = useLocation()

   return (
       <>
          <ul className="nav_links">
             <li className='navBtn'><a href="/home">{t('home')}</a></li>
             {location.pathname === "/aboutus" ? (<li className='navBtn marked'><a href="/aboutus">About Us</a></li>) :
                 (<li className='navBtn'><a href="/aboutus">{t('aboutus')}</a></li>)}
             {location.pathname === "/products" ? (<li className='navBtn marked'><a href="/products">Products</a></li>) :
                 (<li className='navBtn'><a href="/products">Products</a></li>)}
             {location.pathname === "/blogs" ? (<li className='navBtn marked'><a href="/blogs">Blog</a></li>) :
                 (<li className='navBtn'><a href="/blogs">Blog</a></li>)}
             {location.pathname === "/contactus" ? (<li className='navBtn marked'><a href="/contactus">Contact Us</a></li>) :
                 (<li className='navBtn'><a href="/contactus">Contact Us</a></li>)}


          </ul>
       </>
   )
}

export default function Header2() {
   return (
       <>
          <div className="H2container">
             <div className="images">
                <img className='backgroundImage' src={require("../../../images/HomePage/background2.png")} alt="dried_fruit_img" />
                <img className='whiteFigure' src={require("../../../images/HomePage/white_figure_2.png")} alt="white_figure_2.png" />
                <div className="logoWithName">
                   <img className='logo' src={require('../../../images/Frutera/logo.png')} alt="logo" />
                   <h3 className='logoName'>Frutera</h3>
                </div>
             </div>
             <div className='navigationBar'>
                <nav>
                   {/* <ul className="nav_links">
                     <li className='navBtn'><a href="/home">Home</a></li>
                     <li className='navBtn'><a href="/aboutus">About Us</a></li>
                     <li className='navBtn'><a href="/products">Products</a></li>
                     <li className='navBtn'><a href="/blog">Blog</a></li>
                  </ul> */}
                   {SwitchColor()}
                </nav>
                <div className="btn">
                   <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                   <a href="/#"><i className="fa-solid fa-user"></i></a>
                </div>
                <div className="LLContainer">
                   <LanguageList />
                </div>
             </div>

             <div className='text'>
                <h1>{PageName()}</h1>
             </div>
          </div>
       </>
   )
}