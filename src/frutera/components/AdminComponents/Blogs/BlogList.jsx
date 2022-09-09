import React, {useEffect, useState} from "react";
import BlogListElement from "./BlogListElement";
import BlogListElementForm from "./BlogListElementForm";
import {useTranslation} from "react-i18next";


export default function BlogList({props, close}) {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [trigger, setTrigger] = useState(false)
    const [editElement,setEditElement] = useState({})
    const {t} = useTranslation()

    const loadingPage = () => {
        setProductsList(props.postsList)
        if (productsList != null) {
            setLoading(false)
        }
        console.log(productsList)
    }

    const editItemHandler = (props) => {
        setEditElement(props)
        openForm()
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
        <BlogListElementForm close={openForm} props={editElement}/>
    ) : (
        <div className="orderlist">
            <div className="filterContainer">
                <div className="firstPart">
                    <h2>{t("paragraphs")} {t("list")}</h2>
                    <button className='opBtn' onClick={() => {
                        editItemHandler([])
                    }}>+ {t("add")} {t("paragraph")}
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
            <div className="BOPtable">
                <table className='OPtable'>
                    <thead>
                    <tr className='headerPart'>
                        <td>{t("image")}</td>
                        <td>{t("title")}</td>
                        <td>{t("text")}</td>
                    </tr>
                    </thead>
                    <tbody>
                    {!loading && productsList.length > 0 ? productsList.map(item => <BlogListElement close={openForm}
                                                                                                     edit={editItemHandler}
                                                                                                     props={item}
                                                                                                     key={item.id}/>) : ""}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
