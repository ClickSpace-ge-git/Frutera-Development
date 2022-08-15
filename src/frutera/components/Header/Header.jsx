import './Header.scss';
import LanguageList from '../LanguageList/LanguageList'


export default function Header() {
   return (
      <>
         <div className='Hcontainer'>
            <header>
               <div className='images'>
                  <img src={require("../../../images/Frutera/HomePage/background31.png")} alt="dried_fruit_img" />
                  <div className='whiteFigureImg'>
                     <img src={require("../../../images/Frutera/HomePage/white_figure.png")} alt="white_figure" />
                  </div>
                  <div className='orangeFigureImg'>
                     <img src={require("../../../images/Frutera/HomePage/orange_figure.png")} alt="orange_figure" />
                  </div>
               </div>

               <div className='navigationBar'>
                  <div className='logo'>
                     <img src={require('../../../images/Frutera/logo.png')} alt="logo" />
                  </div>
                  <nav>
                     <ul className="nav_links">
                        <li className='navBtn marked'><a href="/#">Home</a></li>
                        <li className='navBtn'><a href="/#">Products</a></li>
                        <li className='navBtn'><a href="/AboutUs">About Us</a></li>
                        <li className='navBtn'><a href="/#">Blog</a></li>
                        <li className='navBtn'><a href="/#">Category</a></li>
                     </ul>
                  </nav>
                  <div className="btn">
                     <a href="/#"><i className="fa-solid fa-magnifying-glass"></i></a>
                     <a href="/#"><i className="fa-solid fa-cart-shopping"></i></a>
                     <a href="/#"><i className="fa-solid fa-user"></i></a>
                  </div>
                  <div className="LLcontainer">
                     <LanguageList />
                  </div>
               </div>

               <div className='text'>
                  <h1>The best dried fruit</h1>
                  <p>Dried peaches, pears, plums and various apples and chips.</p>
                  <button>Learn More</button>
               </div>
            </header>
         </div>
      </>
   )
}