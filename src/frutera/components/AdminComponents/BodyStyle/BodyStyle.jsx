import './BodyStyle.scss'

function changePosition(i) {
   let m = document.getElementsByClassName("liBtn");
   for (var j = 0; j < m.length; j++) {
      m[j].className = m[j].className.replace("marked", "none")
   }
   m[i].className = m[i].className.replace("none", "marked")
}

function scrollTo(props) {
   window.scrollTo({
      top:props,
      behavior:"smooth"
   })
}

export default function BodyStyle() {
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
                  <li className='liBtn marked' onClick={() => {changePosition(0);scrollTo(0)}}><i className="fa-solid fa-house"></i><p>Dashboard</p></li>
                  <li className='liBtn none' onClick={() => {changePosition(1);scrollTo(350)}}><i className="fa-solid fa-table"></i><p>Product List</p></li>
                  <li className='liBtn none' onClick={() => {changePosition(2);scrollTo(1450)}}><i className="fa-solid fa-users"></i><p>Registered User</p></li>
                  <li className='liBtn none' onClick={() => {changePosition(3);scrollTo(400)}}><i className="fa-solid fa-cart-shopping"></i><p>Orders</p></li>
                  <li className='liBtn none' onClick={() => {changePosition(4);scrollTo(500)}}><i className="fa-solid fa-star"></i><p>Voucher</p></li>
               </ul>
            </div>
         </div>
      </>
   )
}