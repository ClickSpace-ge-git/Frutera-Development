import "./BlogCard.scss"
import {useEffect, useState} from "react";
import axios, {refresher} from "../../../Utils/axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

let blogCardsList = [
   {
      id: "0",
      title: "Why dried fruit is useful?",
      description: `Dried fruit is fruit that has had 
                    almost all of the water content 
                    removed through drying methods. 
                    The fruit shrinks during this 
                    process, leaving a small, energy-dense 
                    dried fruit. Raisins are the most common 
                    type, followed by dates, prunes, figs and apricots.`,
      image: require("../../../images/BlogPage/blogImg1.jpg")
   },
   {
      id: "1",
      title: "What vitamins do black plums contain?",
      description: `Dried fruit is fruit that has had 
                    almost all of the water content 
                    removed through drying methods. 
                    The fruit shrinks during this 
                    process, leaving a small, energy-dense 
                    dried fruit. Raisins are the most common 
                    type, followed by dates, prunes, figs and apricots.`,
      image: require("../../../images/BlogPage/blogImg2.jpg")
   },
   {
      id: "2",
      title: "What do scientists say about dried fruit?",
      description: `Dried fruit is fruit that has had 
                    almost all of the water content 
                    removed through drying methods. 
                    The fruit shrinks during this 
                    process, leaving a small, energy-dense 
                    dried fruit. Raisins are the most common 
                    type, followed by dates, prunes, figs and apricots.`,
      image: require("../../../images/BlogPage/blogImg3.jpg")
   },
   {
      id: "3",
      title: "What is dried fruit good for?",
      description: `Dried fruit is fruit that has had 
                    almost all of the water content 
                    removed through drying methods. 
                    The fruit shrinks during this 
                    process, leaving a small, energy-dense 
                    dried fruit. Raisins are the most common 
                    type, followed by dates, prunes, figs and apricots.`,
      image: require("../../../images/BlogPage/blogImg4.jpg")
   },
]

export default function BlogCard() {
   const [blogList, setBlogList] = useState([])
   const [loading, setLoading] = useState(true)
   const {t} = useTranslation()
   let navigate = useNavigate()

   const goToBlog = (props) =>{
      navigate("/blogs/" + props)
   }

   const loadingPage = async () => {
      try{
         setBlogList(blogCardsList)
         if( blogList!= null){
            setLoading(false)
         }
      }catch (err){

      }
   }

   useEffect(() => {
      loadingPage()
      refresher(loadingPage)
   },[])

   function ShowBlogCardList(props) {

      return (
          props.map( blogcard => {
             return (
                 <>
                    <div className="blogCardDivision">
                       <div className="blogCardimage">
                          <img src={blogcard.image} alt={`blogImg${blogcard.id + 1}.jpg`} />
                       </div>
                       <div className="blogCardTextPart">
                          <h1 className="blogCardtitle">{blogcard.title}</h1>
                          <div className="blogCardText">
                             <p>{blogcard.description}</p>
                          </div>
                          <button className="blogCardBtn" onClick={(e) => {goToBlog(blogcard.id)}}>{t('seemore')}</button>
                       </div>
                    </div>
                 </>
             )
          })
      )
   }

   return (
      <>
         <div className="BCcontainer">
            <div className="BCcontainer2">
               <h2 className="HeaderTitle">{t('blog')} {t('news')}</h2>
               <div className="blogCards">
                  {!loading && blogList.length > 0? ShowBlogCardList(blogList) : ""}
               </div>
            </div>

         </div>
      </>
   )
}