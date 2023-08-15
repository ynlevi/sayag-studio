import { motion } from "framer-motion";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";
// import LogoBtn from "./LogoBtn";
import dArr from "../data/media/icons/logo-obj";

export default function Logo({ className, primaryRef }) {
  const [isHover, setHover] = useState(false);
  const svgVarient = {};
  const pathVarient = {
    initial: {
      fill: "var(--primary)",
    },
    hover: {
      fill: "var(--primary-hover)",
    },
  };
  //go to the main page;
  const scrollTo = () =>
    primaryRef.current.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  return (
    <Link to={"/"} onClick={scrollTo}>
      <motion.div
        className={`${className} relative overflow-hidden svg-container`}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <div>
          <motion.svg
            width={"100%"}
            height={"50%"}
            viewBox="0 80 430 272"
            xmlns="http://www.w3.org/2000/svg"
            variants="svgVarient"
          >
            {dArr.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                variants={pathVarient}
                initial="initial"
                animate={isHover ? "hover" : "initial"}
              />
            ))}
          </motion.svg>
        </div>
      </motion.div>
    </Link>
  );
}
