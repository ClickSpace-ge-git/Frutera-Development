import "./CartPage.scss"
import "../components/CartProduct/CartProduct.scss"
import CartProducts from "../components/CartProduct/CartProducts"
import Header2 from '../components/Header2/Header2'
import Footer from '../components/Footer/Footer'
import {useEffect, useState} from "react";

let productList = [
    {
        id: "0",
        name: "Pitted Black Prunes",
        img: require('../../images/CartPage/001.png'),
        quantity: 1,
        price: 11.99
    },
    {
        id: "1",
        name: "Dried Red Apple (Idared)",
        img: require('../../images/CartPage/002.png'),
        quantity: 2,
        price: 12.99
    },

    {
        id: "2",
        name: "Dried Yellow Apple (Golden)",
        img: require('../../images/CartPage/003.png'),
        quantity: 3,
        price: 13.99
    },

    {
        id: "3",
        name: "Dried Red Apple (Jona Gold)",
        img: require('../../images/CartPage/004.png'),
        quantity: 4,
        price: 14.99
    },
    {
        id: "4",
        name: "Dried Red Apple (Jona Gold)",
        img: require('../../images/CartPage/004.png'),
        quantity: 4,
        price: 14.99
    }
]

export default function CartPage() {
    const [cartList, setCartList] = useState({})
    const [loading, setLoading] = useState(true)
    const [totalCost,setTotalCost] = useState(0)
    const [discountMod,setDiscountMod] = useState(1)
    const [temp,setTemp] = useState("")
    const [shippingCost,setShippingCost] = useState(0)

    const loadingPage = () => {
        setCartList(productList)
        if(cartList != null){
            setLoading(false)
        }
    }


    const shippingHandler = (e) => {
        if(e.target.value === "NO"){
            setShippingCost(Math.round(0))
        }else if(e.target.value === "SD"){
            setShippingCost(Math.round(5))
        }else if(e.target.value ==="FD"){
            setShippingCost(Math.round(15))
        }else if(e.target.value ==="VIP"){
            setShippingCost(Math.round(30))
        }
    }

    const voucherHandler = (e) => {
        setTemp(e.target.value)
    }

    const voucherSetter =() => {
        if(temp === "30off"){
            setDiscountMod(0.7)
        }else if(temp==="0off"){
            setDiscountMod(1)
        }else if(temp==="free"){
            setDiscountMod(0)
        }
        setTemp("")
    }

    const addToPrice = (price) => {
        const tempCost = Math.round((totalCost + price) * 100)/100
        setTotalCost(tempCost)
    }

    useEffect(() => {
        loadingPage()
    },[])

   return (
      <>
         <Header2/>
          <div className="Ccontainer">
              <div className="productPart">
                  <div className="PPbackground">
                      <div className="Ptext">
                          <h1>Shopping Cart</h1>
                          <h2>{cartList.length} items</h2>
                      </div>
                      <div className='productTable'>
                          <table>
                              <thead>
                              <tr className='headerPart'>
                                  <td className='product_details' colSpan={2}>Product Details</td>
                                  <td>Quantity</td>
                                  <td>Price</td>
                                  <td>Total</td>
                              </tr>
                              </thead>
                              <tbody>
                              {!loading && cartList.length >0? <CartProducts props={cartList} add={addToPrice}/> : "" }
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

              <div className="OrderPart">
                  <h1>Order Summery</h1>
                  <div className='OPheader'>
                      <h4>ITEMS {cartList.length}</h4>
                      {totalCost}
                  </div>
                  <div className='shippingPart'>
                      <label>SHIPPING</label><br />
                      <select name="shipping" id="shipping" onChange={shippingHandler}>
                          <option value="NO">No Delivery - 0.00 GEL</option>
                          <option value="SD">Standard Delivery - 5.00 GEL</option>
                          <option value="FD">Fast Delivery - 15.00 GEL</option>
                          <option value="VIP">VIP Delivery - 30.00 GEL</option>
                      </select><br />

                      <label>ADDRESS</label><br />
                      <input type="text" placeholder='Enter your address' /><br />

                      <label>PROMO CODE</label><br />
                      <input type="text" placeholder='Enter your code' onChange={voucherHandler} value={temp}/><br />

                      <button className='applyBtn' onClick={() => (voucherSetter())}>APPLY</button>
                  </div>

                  <div className='OPtotalPrice'>
                      <h4>Total Cost</h4>
                      <h4>{Math.round((shippingCost + totalCost*discountMod)*100)/100} GEL</h4>
                  </div>

                  <button className='checkoutBtn'>BUY</button>
              </div>
          </div>
         <Footer />
      </>
   )
}