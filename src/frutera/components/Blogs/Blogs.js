import React, {useEffect, useState} from 'react';
import blog1 from '../../../images/Blogs/blog1.jpeg';
import blog2 from '../../../images/Blogs/blog2.jpeg';
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import './Blogs.scss'
import BlogsListElement from "./BlogsListElement";

let demoBlogsList = [
    {
        id: "0",
        title: "რა სასარგებლო თვისებები აქვს შავი ქლიავის ჩირს?",
        img: blog2,
        date: "28 ივლისი 2022წ ",
        text: "რა სასარგებლო თვისებები აქვს შავი ქლიავის ჩირს?</a>\n" +
            "                                <p>შავი ქლიავის ჩირი სხვადასხვა სახეობის ქლიავისგან მზადდება. ხარისხიანი ქლიავის ჩირი\n" +
            "                                    რბილი მაგრამ მყარი უნდა იყოს, არ უნდა იყოს გამომშრალი და გამხმარი. სწროად შრობის\n" +
            "                                    შემთხვევაში ერთი კილოგრამი ახალი ქლიავისგან დაახლოებით 200 გრამი ჩირი გამოდის.\n" +
            "                                    პირველად შავი ქლიავის ჩირი ჩვენს წელთაღრიცხვამდე მეოთხე საუკუნეში დამზადდა კასპიის\n" +
            "                                    ზღვის მიდამოებში. მეცნიერები თვლიან, რომ ადგილობრივმა ტომებმა მწიფე ქლიავის მზეზე\n" +
            "                                    გამშრობა დაიწყეს და ასე ცდილობდნენ მოსავლის შენახვის ვადები გაეხანგრძლივებინათ."
    },
    {
        id: "1",
        title: "რა სასარგებლო თვისებები აქვს ვაშლის ჩირს?",
        img: blog1,
        date: "28 ივლისი 2022წ ",
        text: "რა სასარგებლო თვისებები აქვს შავი ქლიავის ჩირს?</a>\n" +
            "                                <p>შავი ქლიავის ჩირი სხვადასხვა სახეობის ქლიავისგან მზადდება. ხარისხიანი ქლიავის ჩირი\n" +
            "                                    რბილი მაგრამ მყარი უნდა იყოს, არ უნდა იყოს გამომშრალი და გამხმარი. სწროად შრობის\n" +
            "                                    შემთხვევაში ერთი კილოგრამი ახალი ქლიავისგან დაახლოებით 200 გრამი ჩირი გამოდის.\n" +
            "                                    პირველად შავი ქლიავის ჩირი ჩვენს წელთაღრიცხვამდე მეოთხე საუკუნეში დამზადდა კასპიის\n" +
            "                                    ზღვის მიდამოებში. მეცნიერები თვლიან, რომ ადგილობრივმა ტომებმა მწიფე ქლიავის მზეზე\n" +
            "                                    გამშრობა დაიწყეს და ასე ცდილობდნენ მოსავლის შენახვის ვადები გაეხანგრძლივებინათ."
    },
]


function Blogs() {
    const [blogsList, setBlogsList] = useState({})
    const [loading, setLoading] = useState(true)

    const loadingPage = () => {
        setBlogsList(demoBlogsList)
        if( setBlogsList!= null){
            setLoading(false)
        }
    }

    useEffect(() => {
        loadingPage()
    },[])

    return (
        <>
            <Header2/>

            <div class="blogBcontainer">

                <section id="Blogs">

                    <div class="blog-container">
                        {!loading && blogsList.length >0? blogsList.map((item => <BlogsListElement key={item.id} props={item}/>)) : "" }
                    </div>

                </section>
            </div>
            <Footer/>

        </>

    )
}

export default Blogs;
