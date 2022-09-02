import "./ContactUsPage.scss"
import Header2 from '../components/Header2/Header2'
import Footer from '../components/Footer/Footer'
import {useState} from "react";

export default function ContactUsPage() {
   const [textLen,setTextLen] = useState(0)

   return (
      <>
         <Header2 />
         <div class="ContactUsPage_container">
            <div class="CUP_box">
               <div class="CUP_left_part">
                  <h2>Contact Us</h2>
                  <form>
                     <div class="CUP_input_row">
                        <div class="CUP_input_components">
                           <label>Name</label>
                           <input type="text" placeholder="Name"/>
                        </div>

                        <div class="CUP_input_components">
                           <label>Phone</label>
                           <input type="text" placeholder="Phone"/>
                        </div>
                     </div>

                     <div class="CUP_input_row">
                        <div class="CUP_input_components">
                           <label>Email</label>
                           <input type="text" placeholder="Email"/>
                        </div>
                     
                        <div class="CUP_input_components">
                           <label>Problem Type</label>
                           <input type="text" placeholder="Problem Type"/>
                        </div>
                     </div>
                     <div className="CUP_TextareaPart">
                        <label>Message</label>
                        <textarea id="textarea_1" rows="5" placeholder="Message" maxLength="1000" onChange={(e) => {setTextLen(e.target.value.length)}}></textarea>
                        <p class="textarea_limit" id="textarea_limit_id">{textLen}/1000</p>
                     </div>
                     <button className="CUP_Lsubmit" type="submit">Send</button>
                  </form>
               </div>

               <div class="CUP_right_part">
                  <h2>Reached Us</h2>
                  <table className="CUP_table">
                     <tr>
                           <td>Email:</td>
                           <td><a href="#">Test.Tester@gmail.com</a></td>
                     </tr>
                     <tr>
                           <td>Phone:</td>
                           <td>(+995) 555 123 456</td>
                     </tr>
                     <tr>
                           <td>Address:</td>
                           <td>221B, Baker Street</td>
                     </tr>
                  </table><br/><br/><br/>

                  <div class="news_mode">
                     <h3>News Mode</h3><br/>
                     <p>If you do not want to miss the news, then fill in the box below:</p><br/>
                     <input type="text" placeholder="Email"/>
                     <button>Submit</button>
                  </div>
               </div>
         </div>
      </div>
      <Footer />

      </>
   )
}