import './Header2.scss'
import LanguageList from '../LanguageList/LanguageList'
import {useLocation} from "react-router-dom";

function PageName() {
   let location = useLocation()
   switch (location.pathname){
      case "/blogs":
         return ("Blogs")
      case "/cart":
         return ("Cart")
      case "/products":
         return ("Products")
      case "/aboutus":
         return ("About Us")
      default:
         return ("")
   }

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
                   <ul className="nav_links">
                      {/* Add the " marked" class to make the button. for example "navBtn marked" */}
                      <li className='navBtn'><a href="/">Home</a></li>
                      <li className='navBtn'><a href="/products">Products</a></li>
                      <li className='navBtn'><a href="/aboutus">About Us</a></li>
                      <li className='navBtn'><a href="/blogs">Blog</a></li>
                      <li className='navBtn'><a href="/category">Category</a></li>
                   </ul>
                </nav>
                <div className="btn">
                   <a href="/#"><i className="fa-solid fa-magnifying-glass"></i></a>
                   <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                   <a href="/user"><i className="fa-solid fa-user"></i></a>
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