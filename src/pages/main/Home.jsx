//local
import mainVideo from "../../data/media/videos/main-vidoe.mp4";
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
export default function Home() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "start 90vh"],
    container: containerRef,
  });
  const opacity = useTransform(scrollYProgress, [1, 0.2], [1, 0]);
  return (
    <motion.div
      className=" overflow-x-hidden overflow-y-scroll h-screen snap-y snap-mandatory bg-slate-100"
      ref={containerRef}
    >
      <MainVideo opacity={opacity} />
      <BestImages imageRef={imageRef} />
    </motion.div>
  );
}

const MainVideo = ({ opacity }) => (
  <motion.div className="snap-start h-screen " style={{ opacity }}>
    <motion.div className="p-3 mx-auto h-90vh md:h-screen ">
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
  </motion.div>
);

const BestImages = ({ imageRef }) => {
  return (
    <motion.div ref={imageRef} className="snap-start h-screen ">
      <motion.div className="snap-y snap-mandatory h-screen overflow-auto ">
        {bestImagesNames.map((name, i) => (
          <div
            className="snap-start h-90vh md:h-screen flex justify-center items-center "
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
    </motion.div>
  );
};
const bestImagesNames = [
  "zebra",
  "africa-girls",
  "truck-and-view",
  "bus-stop",
  "romantic",
];
// "old-city-jerusalem",
