import './BodyStyle.scss'

function changePosition(i) {
   let m = document.getElementsByClassName("liBtn");
   for (var j = 0; j < m.length; j++) {
      m[j].className = m[j].className.replace("marked", "none")
   }
   m[i].className = m[i].className.replace("none", "marked")
}

export default function BodyStyle({setPage}) {
   return (
      <>
         <div className="BScontainer">
            <div className="logoWithName">
               <img className='logo' src={require('../../../../images/White_logo.png')} alt="logo" />
               <h3 className='logoName'>Frutera</h3>
            </div>
            <div className='background1'></div>

            <div className="leftPart">
               <ul>
                  <li className='liBtn marked' onClick={(e) => {changePosition(0);setPage("Dashboard")}}><i className="fa-solid fa-house"></i><p>Dashboard</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(1);setPage("Products")}}><i className="fa-solid fa-table"></i><p>Product List</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(2);setPage("Users")}}><i className="fa-solid fa-users"></i><p>Registered User</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(3);setPage("Blogs")}}><i className="fa-solid fa-cart-shopping"></i><p>Orders</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(4);setPage("Vouchers")}}><i className="fa-solid fa-star"></i><p>Vouchers</p></li>
                  <li className='liBtn none' onClick={(e) => {changePosition(5);setPage("Blogs")}}><i className="fa-solid fa-star"></i><p>Blogs</p></li>
               </ul>
            </div>
         </div>
      </>
   )
}