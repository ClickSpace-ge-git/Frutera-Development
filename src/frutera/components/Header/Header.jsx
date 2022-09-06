import './Header.scss';
import LanguageBar from '../LanguageBar/LanguageBar'

export default function MainHeader() {
   return (
      <>
         <div className='Hcontainer'>
            <header>
               <div className='backgroundImage'>
                  <img src={require("../../../images/HomePage/full_background.png")} alt="full_background.png" />
               </div>
               <div className='backgroundImage2'>
                  <img src={require("../../../images/HomePage/full_background2.png")} alt="background.png" />
               </div>

               <div className='navigationBar'>
                  <div>
                     <div className='logo'>
                        <img src={require('../../../images/Frutera/logo.png')} alt="logo" />
                     </div>
                  </div>

                  <div className='rightPart'>
                     <input type="checkbox" id="check" />
                     <label for="check" class="checkbtn">
                        <i class="fa-solid fa-bars"></i>
                     </label>

                     <ul className="nav_links">
                        <label for="check" class="closeBtn">
                           <i className="fa-solid fa-xmark"></i>
                        </label>

                        <li className='navBtn marked'><a href="/home">Home</a></li>
                        <li className='navBtn'><a href="/aboutus">About Us</a></li>
                        <li className='navBtn'><a href="/products">Products</a></li>
                        <li className='navBtn'><a href="/blogs">Blogs</a></li>
                        <li className='navBtn'><a href="/contactus">Contact Us</a></li>
                     </ul>

                     <div className="btn">
                        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="/user"><i className="fa-solid fa-user"></i></a>
                     </div>

                     <div className="LLcontainer">
                        <LanguageBar />
                     </div>
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