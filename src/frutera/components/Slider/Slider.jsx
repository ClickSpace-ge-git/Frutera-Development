import './Slider.scss'
import {useState} from 'react';

// -------------------- Public Variables --------------------

let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const progressLines = document.getElementsByClassName("moveLine");
const controller = document.getElementsByClassName("controller");
const moveButtons = document.getElementsByClassName("moveBtns");
var isChecked2 = true;
var auto = null;
var whiteList = [true, true, true]
// ----------------------------------------------------------

// -------------------- Auto Move Mode Functions --------------------

function ChangeAutoMoveBtn() {
   const [isChecked, setIsChecked] = useState(false);

   const handleChange = () => {
      setIsChecked(current => !current);
      isChecked2 = isChecked;
   };

   if(isChecked) {
      for(var k = 0; k < progressLines.length; k++) {
         progressLines[k].className = "moveLine";
      }
      AutoMover(false);
   } else {
      if(progressLines.length !== 0){progressLines[slideIndex-1].className += " progress";}
      AutoMover(true, NextSlide, 8000);   
   }
   return (
      <div className='autoMode'>
         <input type="checkbox" className='hide' value={isChecked} onChange={handleChange} id="checkbx"/>
         <label htmlFor="checkbx" className='autoModeBtn'>
            {isChecked ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
         </label>
      </div> 
   );
}

function AutoMover(flag, animate, time) {
   if(flag) auto = setInterval(animate, time);
   else {
      clearInterval(auto);
   }
}
// ------------------------------------------------------------------

// -------------------- Slide Shower/Changer --------------------

function NextSlide() {
   AutoMover(false);
   slideIndex++;
   if(slideIndex === slides.length + 1) {slideIndex = 1;}
   ShowSlide(slideIndex);
   if(isChecked2) AutoMover(true, NextSlide, 8000);
}

function BeforSlide() {
   AutoMover(false);
   slideIndex--;
   if(slideIndex === 0) {slideIndex = slides.length;};
   ShowSlide(slideIndex);
   if(isChecked2) AutoMover(true, NextSlide, 8000);
}

function MoveCurrentSlide(s) {
   AutoMover(false);
   ShowSlide(slideIndex = s);
   if(isChecked2) AutoMover(true, NextSlide, 8000);
}

function ShowSlide(index) {
   index--;

   for(var i = 0; i < slides.length; i++) {
      slides[i].className = "slide hide";
   }
   
   for(var k = 0; k < progressLines.length; k++) {
      progressLines[k].className = "moveLine";
   }

   if(isChecked2) progressLines[index].className += " progress";

   slides[index].className = slides[index].className.replace(" hide", " show");

   if(whiteList[index]) {
      controller[0].className += " whiteMode";
      moveButtons[0].className += " whiteMode";
      slides[index].className += " whiteMode";
   } else {
      controller[0].className = "controller";
      moveButtons[0].className = "moveBtns";
      slides[index].className = slides[index].className.replace(" whiteMode", "");
   };

}
// --------------------------------------------------------------



// -------------------- Main Function --------------------
export default function Slider() {
   return (
      <>
         <div className='Scontainer'>
            {/* ------------------------------ Slide 1 ------------------------------ */}
            <div className='slide show whiteMode'>
               <img src={require("../../../images/Frutera/Slider/slider_background1.png")} alt="Slide 1" />
               <div className='slide_text'>
                  <h1 className='Title'>Title 1</h1>
                  <p className='text'>
                     Dried fruit is fruit from which the majority of the original water content has 
                     been removed either naturally, through sun drying, or through the use of specialized 
                     dryers or dehydrators.
                  </p>
                  <div className="slideBtns">
                     <a className="slideBtn1 moreStyle" href="/#">Learn more</a>
                     <a className="slideBtn2 moreStyle" href="/#">Buy now</a>
                  </div>
               </div>
            </div>
            {/* ------------------------------ Slide 2 ------------------------------ */}
            <div className='slide'>
               <img src={require("../../../images/Frutera/Slider/slider_background2.png")} alt="Slide 2" />
               <div className='slide_text'>
                  <h1 className='Title'>Title 2</h1>
                  <p className='text'>
                     Dried fruit is fruit from which the majority of the original water content has 
                     been removed either naturally, through sun drying, or through the use of specialized 
                     dryers or dehydrators.
                  </p>
                  <div className="slideBtns">
                     <a className="slideBtn1 moreStyle" href="/#">Learn more</a>
                     <a className="slideBtn2 moreStyle" href="/#">Buy now</a>
                  </div>
               </div>
            </div>
            {/* ------------------------------ Slide 3 ------------------------------ */}
            <div className='slide'>
               <img src={require("../../../images/Frutera/Slider/slider_background3.png")} alt="Slide 3" />
               <div className='slide_text'>
                  <h1 className='Title'>Title 3</h1>
                  <p className='text'>
                     Dried fruit is fruit from which the majority of the original water content has 
                     been removed either naturally, through sun drying, or through the use of specialized 
                     dryers or dehydrators.
                  </p>
                  <div className="slideBtns">
                     <a className="slideBtn1 moreStyle" href="/#">Learn more</a>
                     <a className="slideBtn2 moreStyle" href="/#">Buy now</a>
                  </div>
               </div>
            </div>
            <div className="moveBtns">
               <button className="moveBtn" onClick={BeforSlide}><i className="fa-solid fa-angle-left"></i></button>
               <button className="moveBtn" onClick={NextSlide}><i className="fa-solid fa-angle-right"></i></button>
            </div>
            {/* ------------------------------ Controller ------------------------------ */}

            <div className='controller whiteMode'>
               <div className='lineBox' onClick={() => {MoveCurrentSlide(1)}}>
                  <p>(Slide Name 1)</p>
                  <div className="line">
                     <div className="moveLine progress"></div>
                  </div>
               </div>
               <div className='lineBox' onClick={() => {MoveCurrentSlide(2)}}>
                  <p>(Slide Name 2)</p>
                  <div className="line">
                     <div className="moveLine"></div>
                  </div>
               </div>
               <div className='lineBox' onClick={() => {MoveCurrentSlide(3)}}>
                  <p>(Slide Name 3)</p>
                  <div className="line">
                     <div className="moveLine"></div>
                  </div>
               </div>
            {/* ------------------------------ Auto Move Mode ------------------------------ */}
               <ChangeAutoMoveBtn />
            </div>
         </div>
      </>
   )
}




/*
<div>
<div className='tester'>
   <button onClick={() => {BeforSlide()}}>Before</button>
   <button onClick={() => {NextSlide()}}>Next</button>
</div>
</div>
*/