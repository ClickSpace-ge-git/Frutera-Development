import "./CartPage.scss"
import CartProduct from "../components/CartProduct/CartProduct"
import Header2 from '../components/Header2/Header2'
import Footer from '../components/Footer/Footer'

export default function CartPage() {
   return (
      <>
         <Header2/>
         <CartProduct />
         <Footer />
      </>
   )
}