import './TextWithRightImage.scss'
import img2 from "../../../images/Frutera/img2.jpg"

export default function TextWithRightImage() {
return (
   <div className="TWRIcontainer">
      <div className="components">
         <div className="text">
            <h1>contact information</h1>
            <ul>
               <li>Phone: (+995) 591 21 56 74</li>
               <li>Address: 221B Baker Street</li>
               <li>Email: info@frutera.ge</li>
            </ul>
            <div className="componentBtns">
               <a href='/#' className="btn">Our Team</a>
               <a href='/aboutus' className="btn moreStyle">Learn More</a>
            </div>
         </div>
         <img src={img2}/>
      </div>
   </div>
)
}