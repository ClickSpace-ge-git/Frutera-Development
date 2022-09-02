import './LoginPage.scss'
export default function LoginPage() {
   return (
      <>
         <div className="LoginPage_container">
            <div className="LP_box">
               <div className="LoginPage_imagePart">
                  <img src={require('../../images/UserPage/background.png')} alt="" />
               </div>
            
               <div className='LP_RightPart'>
                  <form>
                     <div class="LP_MainTitle"><h1>Log in</h1></div>

                     <div class="LP_input_components">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email"/>
                     </div>

                     <div class="LP_input_components">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"/>
                     </div>

                     <div className="LP_Lsubmit"><button type="submit">Log in</button></div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}