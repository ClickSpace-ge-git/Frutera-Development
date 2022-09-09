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

                        <div className='CardPayment_Form_Components'>
                           <h3>card number</h3>
                           <input type="text" placeholder='XXXX XXXX XXXX XXXX' />
                        </div>

                        <div className='CardPayment_Form_components CP_MoreStyle'>
                           <h3>cvc</h3>
                           <input type="text" placeholder='XXX' />
                        </div>
                     </div>
                     <div className='CardPayment_Form_MiddlePart'>

                        <div className='CardPayment_Form_components'>
                           <h3>card holder name</h3>
                           <input type="text" placeholder='Name Surname' />
                        </div>
                     </div>

                     <div className='CardPayment_Form_LowerPart'>
                        <h3>experition date</h3>
                        <div className='CardPayment_Form_components'>
                           <select className="CardPayment_Form_components_SelectDay">
                              <option value="1">1</option>
                           </select>
                           <select className="CardPayment_Form_components_SelectMonth">
                              <option value="Jan">January</option>
                           </select>
                           <select className="CardPayment_Form_components_SelectYear">
                              <option value="2022">2022</option>
                           </select>
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