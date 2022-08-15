import './Categories.scss'

function Filter() {
   var category = document.getElementsByClassName("Category")
   var select = document.getElementById("select")
   for (var key = 0; key < category.length; key++){
      if((category[key].id === select.options[select.selectedIndex].value) || (select.options[select.selectedIndex].value === "all")) {
         category[key].className = category[key].className.replace(" hide", " none")
      } else {
         category[key].className = category[key].className.replace(" none", " hide")
      }
   }
}

export default function Categories() {
   return (
      <>
         <div className='Ccontainer'>
            <div className='Ccontainer2'>
               <div className='header'>
                  <h1>Categories</h1>
                  <select className='categories' name="" id="select" onChange={Filter}>
                     <option value="all">All Categories</option>
                     <option value="apple">Apple</option>
                     <option value="plum">Plum</option>
                     <option value="pear">Pear</option>
                     <option value="peach">Peach</option>
                  </select>
               </div>
               <div className='categoriesList'>
                  {/* -------------------- Category 1 -------------------- */}
                  <div className='Category none' style={{backgroundColor: "#f3925f"}} id="apple">
                     <img src={require("../../../images/Frutera/Categories/apple1.PNG")} alt="apple1" />
                     <div className='text'>
                        <h1 className='title'>Apple</h1>
                        <p>200 items</p>
                        <button>View All</button>
                     </div>
                  </div>

                  {/* -------------------- Category 2 -------------------- */}
                  <div className='Category none' style={{backgroundColor: "#80101c"}} id="apple">
                     <img src={require("../../../images/Frutera/Categories/apple3.PNG")} alt="apple1" />
                     <div className='text'>
                        <h1 className='title'>Red Apple</h1>
                        <p>200 items</p>
                        <button>View All</button>
                     </div>

                  </div>
                  {/* -------------------- Category 3 -------------------- */}
                  <div className='Category none' style={{backgroundColor: "#9ba4c5"}} id="plum">
                     <img src={require("../../../images/Frutera/Categories/plum2.PNG")} alt="plum1" />
                     <div className='text'>
                        <h1 className='title'>Plum</h1>
                        <p>200 items</p>
                        <button>View All</button>
                     </div>
                  </div>
                  {/* -------------------- Category 4 -------------------- */}
                  <div className='Category none' style={{backgroundColor: "#d38b27"}} id="peach">
                     <img src={require("../../../images/Frutera/Categories/peach1.PNG")} alt="apple1" />
                     <div className='text'>
                        <h1 className='title'>Peach</h1>
                        <p>200 items</p>
                        <button>View All</button>
                     </div>

                  </div>
                  {/* -------------------- Category 5 -------------------- */}
                  <div className='Category none' style={{backgroundColor: "#a6ab8d"}} id="pear">
                     <img src={require("../../../images/Frutera/Categories/pear1.PNG")} alt="plum1" />
                     <div className='text'>
                        <h1 className='title'>Pear</h1>
                        <p>200 items</p>
                        <button>View All</button>
                     </div>
                  </div>
                  {/* -------------------- Category 6 -------------------- */}
                  <div className='Category none' style={{backgroundColor: "#9ba4c5"}} id="plum">
                     <img src={require("../../../images/Frutera/Categories/plum1.PNG")} alt="plum1" />
                     <div className='text'>
                        <h1 className='title'>Black Plum</h1>
                        <p>200 items</p>
                        <button>View All</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}