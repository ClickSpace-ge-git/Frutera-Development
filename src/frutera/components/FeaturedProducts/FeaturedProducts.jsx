import './FeaturedProducts.scss'

function Filter(n) {
   var product = document.getElementsByClassName("product")
   var list = ["all", "driedFruit", "fruitChips"]
   for (var key = 0; key < product.length; key++){
      if((product[key].id === list[n]) || (list[n] === "all")) {
         product[key].className = product[key].className.replace(" hide", " none")
      } else {
         product[key].className = product[key].className.replace(" none", " hide")
      }
   }
}

function ChangeProductType(i) {
   var type = document.getElementsByClassName("FPnavBtn")
   for(var k = 0; k < type.length; k++) {
      type[k].className = "FPnavBtn"
   }
   type[i].className += " marked"
   Filter(i);
}

export default function FeaturedProducts() {
   return (
      <>
         <div className='FPcontainer'>
            <div className='FPcontainer2'>
               <div className='header'>
                  <h1>Most Popular Product</h1>
                  <ul className='FPcategories'>
                     <li className='FPnavBtn marked'><button onClick={() => {ChangeProductType(0)}}>All</button></li>
                     <li className='FPnavBtn'><button onClick={() => {ChangeProductType(1)}}>Dried Fruit</button></li>
                     <li className='FPnavBtn'><button onClick={() => {ChangeProductType(2)}}>Fruit Chips</button></li>
                  </ul>
               </div>

               <div className='productList'>
                  {/* -------------------- Product 1 -------------------- */}
                  <div className='product none' id="fruitChips">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/apple1.PNG")} alt="apple1" />
                     </div>
                     <div className='text'>
                        <h4>Semi-sweet red apple chips</h4>
                        <p className='price'>12.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1200g</p>
                     </div>
                  </div>

                  {/* -------------------- Product 2 -------------------- */}
                  <div className='product none' id="driedFruit">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/peach1.PNG")} alt="peach1" />
                     </div>
                     <div className='text'>
                        <h4>Dried peaches</h4>
                        <p className='price'>12.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1200g</p>
                     </div>
                  </div>
               
                  {/* -------------------- Product 3 -------------------- */}
                  <div className='product discount none' id="driedFruit">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/plum2.PNG")} alt="plum2" />
                     </div>
                     <div className='text'>
                        <h4>Dried whole plums</h4>
                        <p className='price'><s>12.99 GEL</s> 11.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1500g</p>
                     </div>
                  </div>

                  {/* -------------------- Product 4 -------------------- */}
                  <div className='product none' id="driedFruit">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/plum1.PNG")} alt="apple2" />
                     </div>
                     <div className='text'>
                        <h4>Dried whole plums</h4>
                        <p className='price'>12.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1500g</p>
                     </div>
                  </div>

                  {/* -------------------- Product 5 -------------------- */}
                  <div className='product none' id="driedFruit">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/apple2.PNG")} alt="plum1" />
                     </div>
                     <div className='text'>
                        <h4>Dried whole plums</h4>
                        <p className='price'>12.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1500g</p>
                     </div>
                  </div>

                  {/* -------------------- Product 6 -------------------- */}
                  <div className='product none' id="driedFruit">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/apple3.PNG")} alt="apple3" />
                     </div>
                     <div className='text'>
                        <h4>Dried whole plums</h4>
                        <p className='price'>12.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1500g</p>
                     </div>
                  </div>
                  {/* -------------------- Product 7 -------------------- */}
                  <div className='product none' id="driedFruit">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/apple4.PNG")} alt="apple4" />
                     </div>
                     <div className='text'>
                        <h4>Dried whole plums</h4>
                        <p className='price'>12.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1500g</p>
                     </div>
                  </div>
                  {/* -------------------- Product 8 -------------------- */}
                  <div className='product discount none' id="fruitChips">
                     <div className='image'>
                        <img src={require("../../../images/Frutera/original/apple5.PNG")} alt="apple5" />
                     </div>
                     <div className='text'>
                        <h4>Dried whole plums</h4>
                        <p className='price'><s>12.99 GEL</s> 11.99 GEL</p>
                        <button>Buy</button>
                        <p className='weight'>1500g</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}