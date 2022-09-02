import './CardPayment.scss'

export default function CardPayment() {
   return (
      <>
         <div className="CardPayment_container">
            <div className="CardPayment_container2">
               <div className='CardPayment_UpperPart'>
                  <button><img src={require("../../images/CardPayment/MasterCard.png")} alt="MasterCard.png" /></button>
                  <button><img src={require("../../images/CardPayment/American_Express.png")} alt="American_Express.png" /></button>
                  <button><img src={require("../../images/CardPayment/Discover.png")} alt="Discover.png" /></button>
                  <button><img src={require("../../images/CardPayment/Paypal.png")} alt="Paypal.png" /></button>
               
               </div>
               <form className='CardPayment_Form'>
                  <div className="CardPayment_Form_container">
                     <div className='CardPayment_Form_UpperPart'>
                        <h3>Card Number</h3>
                        <div className='CardPayment_Form_components'>
                        <input type="text" placeholder='Valid Card Number' />
                        <label><i class="fa-solid fa-credit-card"></i></label>
                        </div>
                     </div>
                     <div className='CardPayment_Form_MiddlePart'>
                        <div className='CardPayment_Form_components CP_MoreStyle'>
                           <h3>Expiration Date</h3>
                           <input type="text" placeholder='MM/YY' />
                        </div>

                        <div className='CardPayment_Form_components'>
                           <h3>CV Code</h3>
                           <input type="text" placeholder='CVC' />
                        </div>
                     </div>

                     <div className='CardPayment_Form_LowerPart'>
                        <h3>Card Owner</h3>
                        <div className='CardPayment_Form_components'>
                           <input type="text" placeholder='Card Owner Name' />
                        </div>
                     </div>

                  </div>
               </form>
               <div className='CardPayment_LowerPart'>
                  <button className='CardPayment_Confirm'>Confirm Payment</button>               
               </div>
            </div>
         </div>
      </>
   )
}
// 