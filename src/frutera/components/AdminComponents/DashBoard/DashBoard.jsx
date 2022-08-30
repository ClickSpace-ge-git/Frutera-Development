import './DashBoard.scss'

export default function DashBoard() {
   return (
      <>
         <div className="DBcontainer">
               <div className="pathBx">
                  <h2>Dashbord</h2>
                  <h5><i class="fa-solid fa-house"></i> / Dashbord</h5>
               </div>
               {/* -------------------------------------------------- */}
               <div className="categoryBxes">
                  <div className='categoryBx'>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>3</h1>
                           <h4>User Enquiry</h4>
                        </div>
                        <div className='iconBx'>
                           <i class="fa-solid fa-envelope"></i>
                        </div>
                     </div>

                     <div className='visitBx'>
                        <p>Visit User Enquiry</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
                  {/* -------------------------------------------------- */}
                  <div className='categoryBx'>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>100</h1>
                           <h4>Total Food</h4>
                        </div>
                        <div className='iconBx'>
                           <i class="fa-solid fa-chart-simple"></i>
                        </div>
                     </div>
                     <div className='visitBx'>
                        <p>Visit Food List</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
                  {/* -------------------------------------------------- */}
                  <div className='categoryBx'>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>13</h1>
                           <h4>Total User</h4>
                        </div>
                        <div className='iconBx'>
                        <i class="fa-solid fa-users"></i>
                        </div>
                     </div>
                     <div className='visitBx'>
                        <p>Visit User List</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
                  {/* -------------------------------------------------- */}
                  <div className='categoryBx'>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>95</h1>
                           <h4>Orders</h4>
                        </div>
                        <div className='iconBx'>
                           <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                     </div>

                     <div className='visitBx'>
                        <p>Visit Order List</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
               </div>
         </div>
      </>
   )
}