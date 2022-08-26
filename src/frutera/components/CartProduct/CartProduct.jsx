import './CartProduct.scss'

let productList = [
   {
      id: "0",
      name: "Pitted Black Prunes",
      img: require('../../../images/CartPage/001.png'),
      quantity: 1,
      price: 11.99
   },
   {
      id: "1",
      name: "Dried Red Apple (Idared)",
      img: require('../../../images/CartPage/002.png'),
      quantity: 2,
      price: 12.99
   },

   {
      id: "2",
      name: "Dried Yellow Apple (Golden)",
      img: require('../../../images/CartPage/003.png'),
      quantity: 3,
      price: 13.99
   },

   {
      id: "3",
      name: "Dried Red Apple (Jona Gold)",
      img: require('../../../images/CartPage/004.png'),
      quantity: 4,
      price: 14.99
   }
]

export default function CartProduct() {
   return (
      <>
         <div className="Ccontainer">
            <div className="productPart">
               <div className="PPbackground">
                  <div className="Ptext">
                     <h1>Shopping Cart</h1>
                     <h2>{productList.length} items</h2>
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
                           {ShowList()}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            <div className="OrderPart">
               <h1>Order Summery</h1>
               <div className='OPheader'>
                  <h4>ITEMS {productList.length}</h4>
                  <FullTotalPrice />
               </div>
               <div className='shippingPart'>

                  <label>SHIPPING</label><br />
                  <select name="shipping" id="shipping">
                     <option value="SD">Standart Delivery - 5.00 GEL</option>
                     <option value="FD">Fast Delivery - 15.00 GEL</option>
                     <option value="VIP">VIP Delivery - 30.00 GEL</option>
                  </select><br />

                  <label>ADDRESS</label><br />
                  <input type="text" placeholder='Enter your address' /><br />

                  <label>PROMO CODE</label><br />
                  <input type="text" placeholder='Enter your code' /><br />

                  <button className='applyBtn'>APPLY</button>
               </div>

               <div className='OPtotalPrice'>
                  <h4>TOTAL COST</h4>
                  <h4>0 GEL</h4>
                  {/* <FullTotalPriceWithShipping /> */} {/* <- This function returns the final price. But it doesn't work because of an error */}
               </div>
               
               <button className='checkoutBtn'>BUY</button>
            </div>
         </div>
      </>
   )
}

function Increase(i) {
   productList[i].quantity++;
   console.log(productList[i].quantity);
}

function Decrease(i) {
   if (productList[i].quantity > 1) {
      productList[i].quantity--;
   }
   console.log(productList[i].quantity);
}

function Remove(i) {
   delete productList[i];
   productList = productList.filter(function(x) {
      return x !== undefined;
   });
   console.log(productList.length);
}

function ShowList() {   
   return (
      productList.map( product => {
         return (
            <>
               <tr>
                  <td className='Pimage' rowSpan={2}><img src={product.img} alt={`00${product.id + 1}`} /></td>
                  <td className='Pname'>
                     <h3>{product.name}</h3>
                  </td>

                  <td className='Pquantity' rowSpan={2}>
                     <button onClick={() => {Increase(product.id)}}>+</button>
                     {product.quantity}
                     <button onClick={() => {Decrease(product.id)}}>-</button>
                  </td>
                  <td className='Pprice' rowSpan={2}>{product.price} GEL</td>
                  <td className='PTotal' rowSpan={2}>{product.price * product.quantity} GEL</td>
               </tr>
               <tr>
                  <td className='removeTr'>
                     <button className='removeBtn' onClick={() => {Remove(product.id)}}>Remove</button>
                  </td>
               </tr>
            </>
         )
      })
   )
}

function FullTotalPrice() {
   var ftp = 0;
   for (var i = 0; i < productList.length; i++) {
      ftp += (productList[i].price * productList[i].quantity);
   }
   return (
      <>
         <h4>{Math.round(ftp * 100) / 100} GEL</h4>
      </>
   )
}

// function FullTotalPriceWithShipping() {
//    var select = document.getElementById('shipping');
//    var ftp = 0;
//    for (var i = 0; i < productList.length; i++) {
//       ftp += (productList[i].price * productList[i].quantity);
//    }

//    var value = select.options[select.selectedIndex].value;
//    if (value === "SD") {
//       ftp = (Math.round(ftp * 100) / 100) + 5;
//    } else if (value === "FD") {
//       ftp = (Math.round(ftp * 100) / 100) + 15;
//    } else if (value === "VIP") {
//       ftp = (Math.round(ftp * 100) / 100) + 30;
//    }
//    return (
//       <>
//          <h4>{ftp} GEL</h4>
//       </>
//    )
// }



