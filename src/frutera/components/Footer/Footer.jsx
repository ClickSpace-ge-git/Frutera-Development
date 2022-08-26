import './Footer.scss'
import logo from "../../../images/Frutera/logo.png"

export default function Footer() {
   return (
      <div className="footer">
         <footer>
            <div className="Fcontainer">
               <div className='otherComponents'>
                  <div className='logoWithName'>
                     <div className='image'>
                        <img src={logo} alt="logo" />
                     </div>
                     <h1>Frutera</h1>
                  </div>
                  <div className='otherInfo'>
                     <ul>
                        <li>
                           <i className="fa-solid fa-phone"></i>
                           <p>+995 591 21 56 74</p>
                        </li>
                        <li>
                           <i className="fa-solid fa-at"></i>
                           <p>info@frutera.ge</p>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="components">
                  <div className="column">
                     <h4>About Company</h4>
                     <ul>
                        <li><a href="/aboutus">about us</a></li>
                        <li><a href="/#">our service</a></li>
                        <li><a href="/#">privecy policy</a></li>
                        <li><a href="/products">Products</a></li>
                     </ul>
                  </div>
                  <div className="column">
                     <h4>Get Help</h4>
                     <ul>
                        <li><a href="/#">FAQ</a></li>
                        <li><a href="/#">shipping</a></li>
                        <li><a href="/#">Returns</a></li>
                        <li><a href="/#">Reader status</a></li>
                        <li><a href="/#">payment options</a></li>
                     </ul>
                  </div>
                  <div className="column">
                     <h4>Follow Us</h4>
                     <ul>
                        <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="/#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}