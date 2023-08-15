//local
import mainVideo from "../../data/media/videos/main-video-1080p.mp4";
//npms
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionValue,
  useInView,
} from "framer-motion";
export default function Photos() {
  return (
    <motion.div className=" bg-slate-100">
      <motion.div className="snap-y snap-mandatory h-90vh md:h-screen overflow-auto divide-y">
        {bestImagesNames.map((imageObj, i) => (
          <Media key={i} {...imageObj} i={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

const Media = ({ type, name, i }) => {
  return type === "img" ? (
    <div
      className={`snap-start h-full flex justify-center items-center  ${
        i % 2 === 0 ? "bg-slate-100" : "bg-light"
      } `}
    >
      <img
        src={require(`../../data/media/images/${name}.jpg`)}
        alt={name}
        className=" md:h-90vh object-fit"
      />
    </div>
  ) : (
    <ReactPlayer
      url={mainVideo}
      playing={true}
      loop={true}
      muted={true}
      className="player p-3 "
      width={"100%"}
      height={"100%"}
      playsinline
    />
  );
};

const bestImagesNames = [
  { name: "zebra", type: "img" },
  { name: "africa-girls", type: "img" },
  { name: "truck-and-view", type: "img" },
  { name: "bus-stop", type: "img" },
  { name: "romantic", type: "img" },
];
