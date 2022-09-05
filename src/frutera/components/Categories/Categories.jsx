import './Categories.scss'

let HomePageCategoryList = [
   {
      id: "0",
      name: "Dried Apples",
      image: require("../../../images/Frutera/Categories/apple1.PNG"),
      backgroundColor: "#f3925f"
   },

   {
      id: "1",
      name: "Dried Plums",
      image: require("../../../images/Frutera/Categories/plum1.PNG"),
      backgroundColor: "#9ba4c5"
   },

   {
      id: "2",
      name: "Dried Pears",
      image: require("../../../images/Frutera/Categories/pear1.PNG"),
      backgroundColor: "#d38b27"
   },

   {
      id: "3",
      name: "Dried Peaches",
      image: require("../../../images/Frutera/Categories/peach1.PNG"),
      backgroundColor: "#a6ab8d"
   }
]

function ShowHomePageCategoryList() {
   return (
      HomePageCategoryList.map( category => {
         return (
            <>
               <div className='HPCategoryCard' style={{backgroundColor: category.backgroundColor}}>
                  <div className='HPC_TextPart'>
                     <h1 className='HPC_Title'>{category.name}</h1>
                     <p>200 items</p>
                  </div>
                  <div className="HPC_ImagePart">
                     <img src={category.image} alt={`Image_${category.id + 1}`} />
                  </div>
               </div>
            </>
         )
      })
   )
}

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
         <div className='Categories_container'>
            <div className='Categories_container2'>
               <div className='Categories_UpperPart'>
                  <h1 className='Categories_Header'>Categories</h1>
                  <select className='Categories_Select' id="select" onChange={Filter}>
                     <option value="all">All Categories</option>
                     <option value="apple">Apple</option>
                     <option value="plum">Plum</option>
                     <option value="pear">Pear</option>
                     <option value="peach">Peach</option>
                  </select>
               </div>
               <div className='Categories_CategoryList'>
                  {ShowHomePageCategoryList()}
               </div>
            </div>
         </div>
      </>
   )
}