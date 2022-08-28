import blog1 from '../../../images/Blogs/blog1.jpeg';
import blog2 from '../../../images/Blogs/blog2.jpeg';
import {getPage} from "../../BlogPage/api";
import {useEffect, useState} from "react";
import Paragraph from "./Paragraph";
import Comments from "./Comments";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import {useMatch} from "react-router-dom";


const BlogPage = ({props}) => {
    const [pageInfo,setPageInfo] = useState({})
    const [paragraphs,setParagraphs] = useState([])

    let ma = useMatch("/blog/:blogId")
    console.log(ma.params)

    useEffect(() => {
        getPage().then((data)=>{
            setPageInfo(data)
            setParagraphs(data.paragraphs)
        })
    },[])

    return (
        <div class="bigBcontainer">
            <Header2 className="header"/>
            <div className="BPcontainer">
                <div className="blog">
                    <div className="date">{pageInfo.time}</div>
                    <h2 className="title">{pageInfo.title}</h2>
                    <br/>
                    {paragraphs.length > 0? paragraphs.map((todos,index) => (
                        <Paragraph props={todos} key={index}/>
                    )):""}
                    <br/>
                    <br/>
                    <br/>
                    <p className="comment">4 კომენტარი</p>
                </div>
                <div className="posts">
                    <h3>სხვა სტატიები</h3>
                </div>

                <section id="blog">

                    <div className="blog-container">

                        <div className="blog-box">

                            <p className="all">მეტის ნახვა</p>

                            <div className="blog-img">
                                <img src={blog1} alt="blof_fruit" />
                            </div>
                            <div className="blog-text">
                                <span>28 ივლისი 2022წ </span>
                                <br/>
                                <a href="#" className="blog-title">რა სასარგებლო თვისებები აქვს ვაშლის ჩირს?</a>
                            </div>

                        </div>


                        <div className="blog-box">

                            <div className="blog-img">
                                <img src={blog2} alt="blof_fruit" />
                            </div>
                            <div className="blog-text">
                                <span>28 ივლისი 2022წ </span>
                                <br/>
                                <a href="#" className="blog-title">რა სასარგებლო თვისებები აქვს შავი ქლიავის ჩირს?</a>
                            </div>

                        </div>


                    </div>

                </section>

                <section id="comments">
                    <div>
                        <h4 className="comments">კომენტარები</h4>
                    </div>
                    <Comments
                        commentsUrl="http://localhost:3004/comments"
                        currentUserId="1"
                    />
                </section>

            </div>
            <Footer />

        </div>


    );
};

export default BlogPage;


/*
                <br/>
                <img src={blog2} alt="blog" className="img"/>
                <br/>
                <br/>
                <h3>ზოგადი მიმოხილვა </h3>
                <p>შავი ქლიავის ჩირი სხვადასხვა სახეობის ქლიავისგან მზადდება. ხარისხიანი ქლიავის ჩირი რბილი მაგრამ მყარი
                    უნდა იყოს, არ უნდა იყოს გამომშრალი და გამხმარი. სწროად შრობის შემთხვევაში ერთი კილოგრამი ახალი
                    ქლიავისგან დაახლოებით 200 გრამი ჩირი გამოდის.
                    პირველად შავი ქლიავის ჩირი ჩვენს წელთაღრიცხვამდე მეოთხე საუკუნეში დამზადდა კასპიის ზღვის მიდამოებში.
                    მეცნიერები თვლიან, რომ ადგილობრივმა ტომებმა მწიფე ქლიავის მზეზე გამშრობა დაიწყეს და ასე ცდილობდნენ
                    მოსავლის შენახვის ვადები გაეხანგრძლივებინათ.</p>
                <br/>
                <h3>სასარგებლო თვისებები</h3>
                <p>შავ ქლიავში ვიტამინების, მიკროელემენტებისა და ბოჭკოს შემცველობა გაცილებით მაღალია ვიდრე ახალ ქლიავში,
                    ამიტომ გამომშრალი ხილის სამკურნალო მიზნებით მოხმარება გაცილებით უფრო სასარგებლო და მოსახერხებელია.
                    შავი ქლიავი ძალიან მნიშვნელოვანია ადამიანის ორგანიზმის ყველა სისტემისთვის. დიეტოლოგები ხშირად
                    ნიშნავენ მას გამხსნელ საშუალებად, ასევე ნაღვლის გამოდევნისა და კუჭის წვენის გამოყოფის
                    გასაუმჯობესებლად.
                    თუ ყოველდღე 5 ცალ შავ ქლიავის ჩირს მიირთმევთ – შეგიძლიათ კუჭ-ნაწლავის ტრაქტის დაავადებები სამუდამოდ
                    დაივიწყოთ და დაკარგოთ ჭარბი წონის დიდი ნაწილი.</p>

 */