import React, {useEffect, useState} from 'react';
import './productGrid.scss'
import LeftSide from "../Productleftside/LeftSide"
import ProductCard from "../ProductCard/ProductCard";
import qliavis from "../../../images/ProductPages/qliavisChiri.jpeg"

let demoProductsList = [
    {
      id:"11",
      title:"Plums",
      text:"plums in 150g",
      price:"11.50",
      img:qliavis,
    },
    {
        id:"12",
        title:"Plums",
        text:"plums in 150g",
        price:"11.50",
        img:qliavis,
    },
    {
        id:"13",
        title:"Plums",
        text:"plums in 150g",
        price:"11.50",
        img:qliavis,
    },
    {
        id:"14",
        title:"Plums",
        text:"plums in 150g",
        price:"11.50",
        img:qliavis,
    },

]

export default function ProductGrid(){
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState("All")

    const loadingPage = () => {
        setProductsList(demoProductsList)
        if( productsList!= null){
            setLoading(false)
        }
    }

    useEffect(() => {
        loadingPage()
    },[])

    return(
        <div className="page">
            <div className="productdisplaygrid">

                <div className="left">
                    <LeftSide filter={setFilterClass}/>
                </div>
                
                <div className="mainGrid">
                    {!loading && productsList.length >0? productsList.map((item => <ProductCard key={item.id} props={item}/>)) : "" }
                </div>
            </div>
        </div>

    )

    

}