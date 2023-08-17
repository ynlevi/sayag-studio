//local
import mainVideo from "../../data/media/videos/main-video-1080p.mp4";
//npms
import ReactPlayer from "react-player";
import Footer from "../../componets/Footer";
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
    <>
      <div className="bg-slate-100 absolute md:static">
        <motion.div className="snap-y snap-mandatory h-[90vh] md:h-screen overflow-scroll divide-y">
          {bestImagesNames.map((imageObj, i) => (
            <Media key={i} {...imageObj} i={i} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

const Media = ({ name, i }) => {
  return (
    <div
      className={`snap-start h-full flex justify-center items-center  ${
        i % 2 === 0 ? "bg-slate-100" : "bg-light"
      } `}
    >
      <img
        src={require(`../../data/media/images/${name}.jpg`)}
        alt={name}
        className=" md:h-90vh w-full h-full object-contain"
      />
    </div>
  );
};

const bestImagesNames = [
  { name: "zebra", type: "img" },
  { name: "africa-girls", type: "img" },
  { name: "truck-and-view", type: "img" },
  { name: "old-city-jerusalem", type: "img" },
  { name: "bus-stop", type: "img" },
  { name: "romantic", type: "img" },
];
