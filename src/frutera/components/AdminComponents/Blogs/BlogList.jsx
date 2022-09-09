import React, {useEffect, useState} from "react";
import BlogListElement from "./BlogListElement";
import BlogListElementForm from "./BlogListElementForm";


export default function BlogList({props, close}) {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [trigger, setTrigger] = useState(false)
    const [editElement,setEditElement] = useState({})

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
                    <h2>Paragraphs List</h2>
                    <button className='opBtn' onClick={() => {
                        editItemHandler([])
                    }}>+ Add Paragraph
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
            <div className="BOPtable">
                <table className='OPtable'>
                    <thead>
                    <tr className='headerPart'>
                        <td>Image</td>
                        <td>Title</td>
                        <td>Text</td>
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
