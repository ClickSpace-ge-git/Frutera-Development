import React, {useEffect, useState} from "react";
import FoodItemForm from "../ManageFoodItem/FoodItemForm";
import OrderListElement from "./OrderListElement";
import OrderListElementForm from "./OrderListElementForm";
import {useTranslation} from "react-i18next";


export default function OrderList({props, close}) {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [trigger, setTrigger] = useState(false)
    const {t} = useTranslation()

    const loadingPage = () => {
        setProductsList(props.orders)
        if (productsList != null) {
            setLoading(false)
        }
    }

    const openForm = () => {
        if (trigger) {
            setTrigger(false)
        } else {
            setTrigger(true)
        }
    }

    useEffect(() => {
        loadingPage()
    }, [])


    return (trigger === true) ? (
        <OrderListElementForm close={openForm} props={[]}/>
    ) : (
        <div className="orderlist">
            <div className="filterContainer">
                <div className="firstPart">
                    <h2>{t("order")} {t("list")}</h2>
                    <button className='opBtn' onClick={() => {
                        openForm()
                    }}>+ {t("add")} {t("product")} {t("item")}
                    </button>
                    <button className='opBtn' onClick={() => {
                        close()
                    }}>{t("close")}
                    </button>
                </div>
                <div className="secondPart">
                    <p>{t("show")} <input type="text" className='inp1'/> {t("entries")}</p>
                    <p>{t("search")}: <input type="text"/></p>
                </div>
            </div>
            <table className='OPtable'>
                <thead>
                <tr className='headerPart'>
                    <td>{t("image")}</td>
                    <td>{t("name")}</td>
                    <td>{t("quantity")}</td>
                    <td>{t("price")}</td>
                    <td>{t("total")}</td>
                    <td>{t("action")}</td>
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