//local
import mainVideo from "../../data/media/videos/main-video-1080p.mp4";
//npms
import ReactPlayer from "react-player";
import Footer from "../../componets/Footer";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export default function Photos() {
  return (
    <motion.div className="snap-y snap-mandatory h-90vh md:h-screen overflow-scroll divide-y ">
      {bestImagesNames.map((image, i) => (
        <Media key={i} image={image} i={i} />
      ))}
    </motion.div>
  );
}

const Media = ({ image, i }) => {
  return (
    <div
      className={`snap-start h-full flex justify-center items-center  ${
        i % 2 === 0 ? "bg-slate-100" : "bg-light"
      } `}
    >
      <img
        src={require(`../../data/media/images/${image}.jpg`)}
        alt={image}
        className="md:h-90vh w-full h-full object-contain"
      />
    </div>
  );
};
const bestImagesNames = [
  "zebra",
  "africa-girls",
  "bus-stop",
  "misgad",
  "old-city-jerusalem",
  "foods",
  "shnizel",
  "yossi",
  "model1",
  "model2",
  "romantic",
];
