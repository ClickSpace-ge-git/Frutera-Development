import './DashBoard.scss'
import {useTranslation} from "react-i18next";

export default function DashBoard({path,setPage}) {
   const {t} = useTranslation()
   return (
      <>
         <div className="DBcontainer">
               <div className="pathBx">
                  <h2>{path}</h2>
                  <h5><i class="fa-solid fa-house"></i> / {path}</h5>
               </div>
               {/* -------------------------------------------------- */}
               <div className="categoryBxes" >
                  <div className='categoryBx' onClick={(e) => {setPage("Categories")}}>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>3</h1>
                           <h4>{t('categories')} {t('list')}</h4>
                        </div>
                        <div className='iconBx'>
                           <i className="fa-solid fa-chart-simple"></i>
                        </div>
                     </div>

                     <div className='visitBx'>
                        <p>{t('visit')} {t('categories')} {t('list')}</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
                  {/* -------------------------------------------------- */}
                  <div className='categoryBx' onClick={(e) => {setPage("Products")}}>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>100</h1>
                           <h4>{t('total')} {t('food')}</h4>
                        </div>
                        <div className='iconBx'>
                           <i class="fa-solid fa-chart-simple"></i>
                        </div>
                     </div>
                     <div className='visitBx'>
                        <p>{t('visit')} {t('food')} {t('list')}</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
                  {/* -------------------------------------------------- */}
                  <div className='categoryBx' onClick={(e) => {setPage("Users")}}>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>13</h1>
                           <h4>{t('total')} {t('user')}</h4>
                        </div>
                        <div className='iconBx'>
                        <i class="fa-solid fa-users"></i>
                        </div>
                     </div>
                     <div className='visitBx'>
                        <p>{t('visit')} {t('user')} {t('list')}</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
                  {/* -------------------------------------------------- */}
                  <div className='categoryBx' onClick={(e) => {setPage("Orders")}}>
                     <div className='upperPart'>
                        <div className="text">
                           <h1>95</h1>
                           <h4>{t('orders')}</h4>
                        </div>
                        <div className='iconBx'>
                           <i class="fa-solid fa-cart-shopping" ></i>
                        </div>
                     </div>

                     <div className='visitBx'>
                        <p>{t('visit')} {t('order')} {t('list')}</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </div>
                  </div>
               </div>
         </div>
      </>
   )
}