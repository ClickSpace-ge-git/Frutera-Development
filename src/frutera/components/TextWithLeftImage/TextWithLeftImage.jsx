import './TextWithLeftImage.scss'
import img1 from "../../../images/Frutera/img1.jpg"

export default function TextWithLeftImage() {
    return (
      <div className="TWLIcontainer">
         <div className="components">
            <img src={img1} alt="products"/>
            <div className="text">
               <h4>About Us</h4>
               <h1>Our mission & values</h1>
               <p>
               The company <span style={{color: "#f76b2a"}}>Frutera</span> was founded in 2021 and represents a modern look of family business. 
               The enterprise and orchards are located in the village of Dirbi, Kareli Municipality.
               Our company is currently focused on the production of various types of natural dried fruits, 
               for which we use the methods of drying the fruits with infrared rays in completely hygienic 
               conditions, ensuring the preservation of no less than 95% of the useful nutrients present 
               in the fruit. The enterprise is arranged in accordance with the standards of the Georgian 
               National Food Safety Agency. The raw materials comprise of nitrate-free fruits grown in 
               our own gardens, irrigated with the water of the Fron River. The area where the fruits 
               are grown has belonged to generations of our family for centuries and we keep working 
               tirelessly to create a distinguished product!
               </p>
               <div className="componentBtns">
                  <a href='/#' className="btn">Our Team</a>
                  <a href='/aboutus' className="btn moreStyle">Learn More</a>
               </div>
            </div>
         </div>
      </div>
    )
}