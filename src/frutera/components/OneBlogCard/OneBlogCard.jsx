import "./OneBlogCard.scss"
import Comments from "../Comments/Comments";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {refresher} from "../../../Utils/axios";

let oneBlogCardsList = [
   {
      id: "0",
      title: "Why dried fruit is useful?",
      image: require("../../../images/BlogPage/blogImg1.jpg")
   },
   {
      id: "1",
      title: "What vitamins do black plums contain?",
      image: require("../../../images/BlogPage/blogImg2.jpg")
   },
   {
      id: "2",
      title: "What do scientists say about dried fruit?",
      image: require("../../../images/BlogPage/blogImg3.jpg")
   },
   {
      id: "3",
      title: "What is dried fruit good for?",
      image: require("../../../images/BlogPage/blogImg4.jpg")
   },
]

let blogPageJson = {
   title: "",
   date: "2002-02-02",
   similar: oneBlogCardsList,
   paragraphs: [
      {
         title: "",
         img: "",
         text: "Dried fruit is fruit from which the majority of the original water content\n" +
             "                      has been removed either naturally, through sun drying, or through the use\n" +
             "                      of specialized dryers or dehydrators. Dried fruit has a long tradition of\n" +
             "                      use dating back to the fourth millennium BC in Mesopotamia, and is prized\n" +
             "                      because of its sweet taste, nutritive value, and long shelf life.\n" +
             "                      Today, dried fruit consumption is widespread. Nearly half of the dried\n" +
             "                      fruits sold are raisins, followed by dates, prunes, figs, apricots,\n" +
             "                      peaches, apples, and pears. These are referred to as \"conventional\"\n" +
             "                      or \"traditional\" dried fruits: fruits that have been dried in the\n" +
             "                      sun or in heated wind tunnel dryers. Many fruits such as cranberries,\n" +
             "                      blueberries, cherries, strawberries, and mango are infused with a\n" +
             "                      sweetener prior to drying. Some products sold as dried fruit, like\n" +
             "                      papaya, kiwifruit and pineapple, are most often candied fruit.\n" +
             "                      Dried fruits retain most of the nutritional value of fresh fruits.\n" +
             "                      The specific nutrient content of the different dried fruits reflects\n" +
             "                      their fresh counterpart and the processing method.",
      },
      {
         title: "",
         img: require("../../../images/BlogPage/OneBlogCart/paragraph1.jpg"),
         text: "Dried fruit is fruit from which the majority of the original water content\n" +
             "                      has been removed either naturally, through sun drying, or through the use\n" +
             "                      of specialized dryers or dehydrators. Dried fruit has a long tradition of\n" +
             "                      use dating back to the fourth millennium BC in Mesopotamia, and is prized\n" +
             "                      because of its sweet taste, nutritive value, and long shelf life.\n" +
             "                      Today, dried fruit consumption is widespread. Nearly half of the dried\n" +
             "                      fruits sold are raisins, followed by dates, prunes, figs, apricots,\n" +
             "                      peaches, apples, and pears. These are referred to as \"conventional\"\n" +
             "                      or \"traditional\" dried fruits: fruits that have been dried in the\n" +
             "                      sun or in heated wind tunnel dryers. Many fruits such as cranberries,\n" +
             "                      blueberries, cherries, strawberries, and mango are infused with a\n" +
             "                      sweetener prior to drying. Some products sold as dried fruit, like\n" +
             "                      papaya, kiwifruit and pineapple, are most often candied fruit.\n" +
             "                      Dried fruits retain most of the nutritional value of fresh fruits.\n" +
             "                      The specific nutrient content of the different dried fruits reflects\n" +
             "                      their fresh counterpart and the processing method.",
      },
      {
         title: "",
         img: require("../../../images/BlogPage/OneBlogCart/paragraph1.jpg"),
         text: "Dried fruit is fruit from which the majority of the original water content\n" +
             "                      has been removed either naturally, through sun drying, or through the use\n" +
             "                      of specialized dryers or dehydrators. Dried fruit has a long tradition of\n" +
             "                      use dating back to the fourth millennium BC in Mesopotamia, and is prized\n" +
             "                      because of its sweet taste, nutritive value, and long shelf life.\n" +
             "                      Today, dried fruit consumption is widespread. Nearly half of the dried\n" +
             "                      fruits sold are raisins, followed by dates, prunes, figs, apricots,\n" +
             "                      peaches, apples, and pears. These are referred to as \"conventional\"\n" +
             "                      or \"traditional\" dried fruits: fruits that have been dried in the\n" +
             "                      sun or in heated wind tunnel dryers. Many fruits such as cranberries,\n" +
             "                      blueberries, cherries, strawberries, and mango are infused with a\n" +
             "                      sweetener prior to drying. Some products sold as dried fruit, like\n" +
             "                      papaya, kiwifruit and pineapple, are most often candied fruit.\n" +
             "                      Dried fruits retain most of the nutritional value of fresh fruits.\n" +
             "                      The specific nutrient content of the different dried fruits reflects\n" +
             "                      their fresh counterpart and the processing method.",
      },
      {
         title: "",
         img: require("../../../images/BlogPage/OneBlogCart/paragraph1.jpg"),
         text: "Dried fruit is fruit from which the majority of the original water content\n" +
             "                      has been removed either naturally, through sun drying, or through the use\n" +
             "                      of specialized dryers or dehydrators. Dried fruit has a long tradition of\n" +
             "                      use dating back to the fourth millennium BC in Mesopotamia, and is prized\n" +
             "                      because of its sweet taste, nutritive value, and long shelf life.\n" +
             "                      Today, dried fruit consumption is widespread. Nearly half of the dried\n" +
             "                      fruits sold are raisins, followed by dates, prunes, figs, apricots,\n" +
             "                      peaches, apples, and pears. These are referred to as \"conventional\"\n" +
             "                      or \"traditional\" dried fruits: fruits that have been dried in the\n" +
             "                      sun or in heated wind tunnel dryers. Many fruits such as cranberries,\n" +
             "                      blueberries, cherries, strawberries, and mango are infused with a\n" +
             "                      sweetener prior to drying. Some products sold as dried fruit, like\n" +
             "                      papaya, kiwifruit and pineapple, are most often candied fruit.\n" +
             "                      Dried fruits retain most of the nutritional value of fresh fruits.\n" +
             "                      The specific nutrient content of the different dried fruits reflects\n" +
             "                      their fresh counterpart and the processing method.",
      },
      {
         title: "",
         img: "",
         text: "Dried fruit is fruit from which the majority of the original water content\n" +
             "                      has been removed either naturally, through sun drying, or through the use\n" +
             "                      of specialized dryers or dehydrators. Dried fruit has a long tradition of\n" +
             "                      use dating back to the fourth millennium BC in Mesopotamia, and is prized\n" +
             "                      because of its sweet taste, nutritive value, and long shelf life.\n" +
             "                      Today, dried fruit consumption is widespread. Nearly half of the dried\n" +
             "                      fruits sold are raisins, followed by dates, prunes, figs, apricots,\n" +
             "                      peaches, apples, and pears. These are referred to as \"conventional\"\n" +
             "                      or \"traditional\" dried fruits: fruits that have been dried in the\n" +
             "                      sun or in heated wind tunnel dryers. Many fruits such as cranberries,\n" +
             "                      blueberries, cherries, strawberries, and mango are infused with a\n" +
             "                      sweetener prior to drying. Some products sold as dried fruit, like\n" +
             "                      papaya, kiwifruit and pineapple, are most often candied fruit.\n" +
             "                      Dried fruits retain most of the nutritional value of fresh fruits.\n" +
             "                      The specific nutrient content of the different dried fruits reflects\n" +
             "                      their fresh counterpart and the processing method.",
      },
   ]

}

export default function OneBlogCard() {
   const [paragraphList, setparagraphList] = useState({date:"never"})
   const [loading, setLoading] = useState(true)
   let navigate = useNavigate()

   const goToBlog = (props) =>{
      navigate("/blogs/" + props)
   }

   const loadingPage = async () => {
      try{
         setparagraphList(blogPageJson)
         if( paragraphList !== {}){
            setLoading(false)
         }

      }catch (err){

      }
   }

   useEffect(() => {
      loadingPage()
      //refresher(loadingPage)
   },[])

   function showPage(props){
      const paras = props.paragraphs.slice(1,props.paragraphs.length-1)
      let lrDistinguisher = false

      const incMod = () => {
         lrDistinguisher = !lrDistinguisher
      }

      return(
          <div className="OBCTextPart">
             <h1 className="OBCcontainer2_h1">{props.title}</h1>
             <div className="OnlyParagraph">
                <p>
                   {props.paragraphs[0].text}
                </p>
             </div>
             {paras.map((para,index) => {
                incMod()
                if(lrDistinguisher){
                   return(
                       <div className="ParagraphWithLeftImage" key={index}>
                          <div className="ParagraphWithLeftImage_img">
                             <img src={para.img} alt="paragraph1.jpg" className="paragraphImage" />
                          </div>
                          <div className="ParagraphWithLeftImage_p">
                             <p>
                                {para.text}
                             </p>
                          </div>
                       </div>
                   )
                }else{
                   return (
                       <div className="ParagraphWithRightImage" key={index}>
                          <div className="ParagraphWithRightImage_p">
                             <p>
                                {para.text}
                             </p>
                          </div>
                          <div className="ParagraphWithRightImage_img">
                             <img src={para.img} alt="paragraph1.jpg" className="paragraphImage" />
                          </div>
                       </div>
                   )
                }
             })}
             <div className="OnlyParagraph">
                <p>
                   {props.paragraphs[props.paragraphs.length-1].text}
                </p>
             </div>
          </div>
      )

   }

   function ShowOneBlogCardList(props) {
      return (
          props.map( oneblogcard => {
             return (
                    <div className="oneBlogCardDivision" key = {oneblogcard.id}>
                       <div className="oneBlogCardimage">
                          <img src={oneblogcard.image} alt={`blogImg${oneblogcard.id + 1}.jpg`} />
                       </div>
                       <div className="oneBlogCardTextPart">
                          <div className="oneBlogCardtitle"><h3>{oneblogcard.title}</h3></div>
                          <button className="oneBlogCardBtn" onClick={(e) => {goToBlog(oneblogcard.id)}}>See more</button>
                       </div>
                    </div>
             )
          })
      )
   }

   return (
      <>
         <div className="OBCcontainer">
            <div className="OBCcontainer2">
               {!loading && paragraphList.date !== "never"? showPage(paragraphList) : "" }
               <div className="OtherBlogCarts">
                  <div className="OtherBlogCart">
                     {!loading && paragraphList.date !== "never"? ShowOneBlogCardList(paragraphList.similar) : "" }
                  </div>
               </div>

               <div className="OBComments">
                  <Comments currentUserId="1"/>
               </div>
            </div>
         </div>
      </>
   )
}