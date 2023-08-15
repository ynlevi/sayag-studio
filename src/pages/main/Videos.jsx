import { motion } from "framer-motion";
import ReactPlayer from "react-player";

import Main from "../../data/media/videos/main-video-1080p.mp4";
import Video2 from "../../data/media/videos/video2-1080p.mp4";
import Video3 from "../../data/media/videos/video3-1080p.mp4";
export default function Videos() {
  return (
    <motion.div className="h-90vh md:h-screen snap-x snap-mandatory overflow-x-scroll w-full divide-x flex  p-4 gap-4 bg-secondary">
      {urls.map((url, i) => (
        <Media key={i} name={url} i={i} className={null} />
      ))}
    </motion.div>
  );
}
const urls = [Main, Video2, Video3];
const Media = ({ name, i, className }) => {
  return (
    <motion.div
      className={` h-full md:h-full p-4 snap-center flex justify-center items-center min-w-[96%] md:min-w-[98%] shadow-md  ${
        i % 2 === 0 ? "bg-slate-100" : "bg-light"
      }`}
    >
      <ReactPlayer
        url={name}
        playing={true}
        loop={true}
        muted={true}
        className="player p-3 border-2 border-secondary"
        width={"100%"}
        height={"100%"}
        playsinline
      />
    </motion.div>
  );
};
