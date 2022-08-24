import './Header2.scss'
import LanguageList from '../LanguageList/LanguageList'

export default function Header2() {
   return (
      <>
         <div className="H2container">
            <div className="images">
               <img className='backgroundImage' src={require("../../../images/Frutera/HomePage/background312.png")} alt="dried_fruit_img" />
               <img className='whiteFigure' src={require("../../../images/Frutera/HomePage/white_figure_2.png")} alt="white_figure_2.png" />
               <div className="logoWithName">
                  <img className='logo' src={require('../../../images/Frutera/logo.png')} alt="logo" />
                  <h3 className='logoName'>Frutera</h3>
               </div>
            </div>
            <div className='navigationBar'>
               <nav>
                  <ul className="nav_links">
                     <li className='navBtn'><a href="/#">Home</a></li>
                     <li className='navBtn'><a href="/#">Products</a></li>
                     <li className='navBtn marked'><a href="/#">About Us</a></li>
                     <li className='navBtn'><a href="/#">Blog</a></li>
                     <li className='navBtn'><a href="/#">Category</a></li>
                  </ul>
               </nav>
               <div className="btn">
                  <a href="/#"><i className="fa-solid fa-magnifying-glass"></i></a>
                  <a href="/#"><i className="fa-solid fa-cart-shopping"></i></a>
                  <a href="/#"><i className="fa-solid fa-user"></i></a>
               </div>
               <div className="LLContainer">
                  <LanguageList />
               </div>
            </div>
            
            <div className='text'>
               <h1>The best dried fruit</h1>
               <p>Dried peaches, pears, plums and various apples and chips.</p>
               <button>about Us</button>
            </div>
         </div>
      </>
   )
}