import './RegisterPage.scss'
export default function RegisterPage() {
   return (
      <>
         <div className="RegisterPage_container">
            <div className="RP_box">
               <div className="RegisterPage_imagePart">
                  <img src={require('../../images/UserPage/background.png')} alt="" />
               </div>
            
               <div className='RP_RightPart'>
                  <form>
                     <h1>Register</h1>

                     <div class="RP_input_components">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter Full Name"/>
                     </div>

                     <div class="RP_input_components">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email"/>
                     </div>

                     <div class="RP_input_components">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"/>
                     </div>

                     <div class="RP_input_components">
                        <label>Repeat Password</label>
                        <input type="password" placeholder="Repeat Password"/>
                     </div>

                     <div className="RP_Lsubmit"><button type="submit">Sign Up</button></div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}