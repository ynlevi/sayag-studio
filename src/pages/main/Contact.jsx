import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Contact() {
  const targetRef = useRef(null);
  const scrollTo = () =>
    targetRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div className="bg-slate-100 min-h-screen">
      <div className="h-screen w-3/4 bg-lime-500"></div>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae
        fugiat aliquam fuga asperiores quaerat delectus cum architecto ut
        assumenda pariatur hic consectetur, mollitia molestias? Atque illo
        ducimus iure esse.
      </p>
      <div ref={targetRef} className=" w-2/5 h-52 bg-red-400"></div>
      <div className="h-screen w-40 bg-lime-300"></div>

      <button className="h-8 relative z-40" onClick={scrollTo}>
        click
      </button>
    </motion.div>
  );
}
