import './AdminPage.scss'
import BodyStyle from '../components/AdminComponents/BodyStyle/BodyStyle'
import DashBoard from '../components/AdminComponents/DashBoard/DashBoard'
import ManageFoodItem from '../components/AdminComponents/ManageFoodItem/ManageFoodItem'
import RegisteredUser from '../components/AdminComponents/RegisteredUser/RegisteredUser'
import Orders from '../components/AdminComponents/Orders/Orders'
import Voucher from '../components/AdminComponents/Voucher/Voucher'
import {useRef} from "react";

export default function AdminPage() {

   return (
      <>
         <div className='AdminPage'>
            <BodyStyle />
            <div className='allCategories'>
               <DashBoard />
               <ManageFoodItem />
               <RegisteredUser />
               <Orders />
               <Voucher />
            </div>
         </div>
      </>
   )
}