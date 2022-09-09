import './Video.scss'
import VideoPlayer from 'react-video-js-player'

export default function Video() {
   const videoSrc = require("../../../videos/demo.mp4")
   const videoPoster = require('../../../images/Frutera/original/background1.PNG')

   return (
      <>
         <div className="videoContainer">
            <VideoPlayer src={videoSrc} poster={videoPoster} width="1250"/>
         </div>
      </>
   )
}