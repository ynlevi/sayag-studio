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
} from "framer-motion";
export default function Home() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start", "start end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (l) => console.log(l));
  const opacity = useTransform(scrollYProgress, [0.8, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 0.3], [1, 2]);
  return (
    <motion.div className="overflow-clip">
      {/* <MainVideo opacity={opacity} scale={scale} /> */}
      <BestImages imageRef={imageRef} />
    </motion.div>
  );
}

const MainVideo = ({ opacity, scale, vdRef }) => (
  <motion.div
    className="p-3 mx-auto h-90vh md:h-screen "
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
    />
  </motion.div>
);
const BestImages = ({ imageRef }) => {
  return (
    <motion.div
      className="md:absolute static lg:static w-full bg-slate-100 snap-y snap-mandatory h-screen overflow-scroll"
      ref={imageRef}
    >
      {bestImagesNames.map((name, i) => (
        <div
          className="snap-start h-screen bg-slate-100 flex justify-center items-center"
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
  "africa-girls",
  "bus-stop",
  // "old-city-jerusalem",
  // "romantic",
  "truck-and-view",
  "zebra",
];
