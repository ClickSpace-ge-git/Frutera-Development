import Header2 from "../components/Header2/Header2";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";


export default function ProductPage(){
    return(
        <div className="ProductPage">
            <Header2/>
            <ProductGrid/>
            <Footer/>
        </div>
    )
}