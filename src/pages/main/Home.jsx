//local
import mainVideo from "../../data/media/videos/main-vidoe.mp4";
import { useInView } from "framer-motion";
//npms
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionValue,
} from "framer-motion";
export default function Home() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start", "start end"],
  });
  const opacity = useTransform(scrollYProgress, [0.8, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.9, 0.3], [1, 2]);
  return (
    <motion.div className=" overflow-x-hidden ">
      <MainVideo opacity={opacity} scale={scale} />
      <BestImages imageRef={imageRef} scrollYProgress={scrollYProgress} />
    </motion.div>
  );
}

const MainVideo = ({ opacity, scale }) => (
  <motion.div
    className="p-3 mx-auto h-90vh md:h-screen top-0 -z-10 sticky "
    style={{ opacity, scale }}
  >
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
  </motion.div>
);

const BestImages = ({ imageRef, scrollYProgress }) => {
  const overflowY = useTransform(scrollYProgress, (y) => {
    return y > 0 ? "hidden" : "auto";
  });

  return (
    <motion.div
      className="w-full snap-y snap-mandatory h-screen bg-slate-100 "
      ref={imageRef}
      style={{ overflowY }}
    >
      {bestImagesNames.map((name, i) => (
        <div
          className="snap-start h-screen  flex justify-center items-center"
          key={i}
        >
          <img
            src={require(`../../data/media/images/${name}.jpg`)}
            alt={name}
            className=" md:h-90vh object-contain"
          />
        </div>
      ))}
    </motion.div>
  );
};
const bestImagesNames = [
  "zebra",
  "africa-girls",

  "old-city-jerusalem",
  "truck-and-view",
  "bus-stop",
  "romantic",
];
