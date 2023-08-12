//local
import mainVideo from "../../data/media/videos/main-vidoe.mp4";
//npms
import ReactPlayer from "react-player";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionValue,
} from "framer-motion";
export default function Home() {
  const imageRef = useRef(1);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start", "start end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (l) => console.log(l));
  const opacity = useTransform(scrollYProgress, [0.8, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 0.3], [1, 2]);
  return (
    <motion.div className="overflow-clip">
      <MainVideo opacity={opacity} scale={scale} />
      <BestImages imageRef={imageRef} />
    </motion.div>
  );
}

const MainVideo = ({ opacity, scale }) => (
  <motion.div
    className="p-3 mx-auto sticky inset-0 h-90vh md:h-screen"
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
    <motion.div className=" w-full bg-slate-100 " ref={imageRef}>
      {bestImagesNames.map((name, i) => (
        <div className="h-screen bg-slate-100" key={i}>
          <img
            src={require(`../../data/media/images/${name}.jpg`)}
            alt={name}
            className="p-4 mx-auto"
            style={{ maxHeight: "90vh" }}
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
