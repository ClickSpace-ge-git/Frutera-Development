import React, {useEffect, useState} from "react";
import FoodItemForm from "../ManageFoodItem/FoodItemForm";
import OrderListElement from "./OrderListElement";


export default function OrderList({props, close}) {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [trigger, setTrigger] = useState(false)

    const loadingPage = () => {
        setProductsList(props.orderList)
        if (productsList != null) {
            setLoading(false)
        }
    }

    const openForm = () => {
        if (trigger) {
            console.log("close")
            setTrigger(false)
        } else {
            console.log("open")
            setTrigger(true)
        }
    }

    useEffect(() => {
        loadingPage()
    }, [])


    return (trigger === true) ? (
        <FoodItemForm close={openForm} props={[]}/>
    ) : (
        <div className="orderlist">
            <div className="filterContainer">
                <div className="firstPart">
                    <h2>Order List</h2>
                    <button className='opBtn' onClick={() => {
                        openForm()
                    }}>+ Add product Item
                    </button>
                    <button className='opBtn' onClick={() => {
                        close()
                    }}>Close
                    </button>
                </div>
                <div className="secondPart">
                    <p>show <input type="text" className='inp1'/> entries</p>
                    <p>search: <input type="text"/></p>
                </div>
            </div>
            <table className='OPtable'>
                <thead>
                <tr className='headerPart'>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {!loading && productsList.length > 0 ? productsList.map(item => <OrderListElement close={openForm}
                                                                                                  props={item}
                                                                                                  key={item.id}/>) : ""}
                </tbody>
            </table>
        </div>
    )
}