import "./OneBlogCard.scss"
import Comments from "../Comments/Comments";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {refresher} from "../../../Utils/axios";
import {useTranslation} from "react-i18next";

let blogPageJson = {
   title: "Why is fruit useful?",
   date: "2002-02-02",
   paragraphs: [
      {
         title: "",
         img: "",
         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ligula non justo condimentum scelerisque. Donec laoreet blandit purus, sit amet ornare dui commodo at. Donec at fermentum massa. Nullam tincidunt in felis eu efficitur. Mauris rhoncus porttitor nibh non volutpat. Etiam porttitor odio malesuada, tincidunt risus vel, sodales erat. Nam sem eros, iaculis non eros euismod, fringilla malesuada lectus. Duis eget suscipit elit, nec condimentum lacus. Mauris mollis massa lacus, ac vestibulum ligula dapibus vitae.",
      },
      {
         title: "",
         img: "https://media.discordapp.net/attachments/1030113417811472404/1030113495976521750/paragraph1.jpg",
         text: "Curabitur egestas laoreet est vel suscipit. Phasellus risus turpis, laoreet a mollis vitae, scelerisque finibus erat. Nunc elementum cursus ipsum, nec imperdiet lectus egestas sed. Etiam vulputate, lorem id sollicitudin vestibulum, velit quam vehicula dui, eget efficitur odio nibh vitae libero. Nunc eget facilisis tortor. Nulla pharetra, lorem eget viverra tempor, eros nulla finibus sapien, in maximus enim felis quis enim. Quisque at sapien et nisl varius molestie sit amet posuere purus. Ut sit amet lobortis ipsum. Sed nec purus maximus, volutpat sem varius, viverra nunc. Duis risus ex, pulvinar ac lobortis vitae, tincidunt sit amet justo. Donec pulvinar augue ac interdum rutrum. Vivamus non sem in velit cursus mollis sed vitae augue. Suspendisse potenti. Morbi rutrum condimentum nisi, dictum pellentesque ligula eleifend sed. Maecenas eleifend arcu nec massa ullamcorper lacinia.",
      },
      {
         title: "",
         img: "https://media.discordapp.net/attachments/1030113417811472404/1030113496211402772/paragraph2.jpg",
         text: "Etiam rutrum cursus est, nec egestas risus auctor quis. Duis varius metus neque, sit amet pulvinar neque malesuada non. Fusce eget finibus nulla. Phasellus sollicitudin turpis ex, placerat bibendum velit suscipit faucibus. Nulla id feugiat magna. Sed luctus finibus leo ac gravida. Nulla turpis turpis, lacinia quis arcu vel, dictum tempus eros. Fusce erat dolor, sollicitudin in ullamcorper eget, lacinia quis est. Vivamus fermentum auctor arcu, et laoreet risus blandit quis. Cras ut ex commodo, efficitur erat ut, dapibus orci. Vestibulum ullamcorper felis quis odio dapibus ultrices. Quisque finibus ex vitae sapien sollicitudin, vitae pharetra libero accumsan. Curabitur malesuada leo neque, a egestas tellus bibendum eu.",
      },
      {
         title: "",
         img: "https://media.discordapp.net/attachments/1030113417811472404/1030113470550642748/blogImg4.jpg",
         text: "Praesent feugiat neque vel velit bibendum, et viverra dui ornare. Cras dignissim scelerisque nunc ac imperdiet. Nunc viverra et orci at euismod. Ut volutpat faucibus orci, ullamcorper porttitor tortor convallis eu. Sed sed libero nulla. Proin et lacus sed felis convallis cursus. Nulla a eros erat. Ut tempor, eros ac laoreet blandit, nulla eros dignissim odio, id scelerisque lectus mauris in lorem. Morbi in nibh suscipit, aliquam orci nec, bibendum nulla. Cras consequat tortor a nibh aliquam venenatis. Mauris eu dui at leo finibus laoreet id ac diam. In nisl ex, ultrices vulputate sagittis condimentum, pellentesque id velit.",
      },
      {
         title: "",
         img: "",
         text: "Pellentesque suscipit consectetur nisi quis aliquam. Phasellus et consequat libero. Vestibulum ultrices viverra felis, elementum egestas quam faucibus a. Morbi cursus est est, at consectetur eros sodales venenatis. Vestibulum suscipit lacinia eros vitae ultrices. Pellentesque egestas arcu sit amet nisi dignissim, malesuada mattis lacus venenatis. Sed quis justo massa. Nunc suscipit cursus sem quis ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sodales augue massa, ut aliquam nisi rhoncus vitae. Pellentesque rutrum est non ligula convallis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
   ]

}

export default function OneBlogCard() {
   const [paragraphList, setparagraphList] = useState({date:"never"})
   const [loading, setLoading] = useState(true)
   const {t} = useTranslation()
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
                          <button className="oneBlogCardBtn" onClick={(e) => {goToBlog(oneblogcard.id)}}>{t('seemore')}</button>
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
                     {/*!loading && paragraphList.date !== "never"? ShowOneBlogCardList(paragraphList.similar) : "" */}
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