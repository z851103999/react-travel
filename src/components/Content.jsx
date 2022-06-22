import {CONTENT_INFO} from "../data";
import Video from "./Video/Video";
import VideoDescription from "./Video/VideoDescription";

const Content = ({currentIndex}) => {
  return (
    <div className="content">
      {Object.keys(CONTENT_INFO).map((item,index)=>{
        return <Video key={index} active={currentIndex===index} src={CONTENT_INFO[item].src} />
      })}
      <div className={`video-overlay video-overlay-${Object.keys(CONTENT_INFO)[currentIndex]}`}></div>
      <VideoDescription currentIndex={currentIndex} />
    </div>
  )
}

export default Content;
