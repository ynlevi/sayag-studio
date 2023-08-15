import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Contact() {
  return (
    <motion.div>
      <motion.div>
        <h2>our office</h2>
        <a href="#">addres 234, jerusalem </a>
      </motion.div>
      <motion.div>
        <h2>contact info</h2>
        <p>phone number</p>
        <p>mail@gmail.com</p>
      </motion.div>
      <motion.ul>
        <motion.li>
          <a href></a>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

const contactLinks = [{ href: "google.com", icon: " <Icon />" }];

// const targetRef = useRef(null);
// const scrollTo = () =>
//   targetRef.current.scrollIntoView({ behavior: "smooth", top: 10 });

// return (
//   <motion.div className="">
//     <div className="h-screen w-3/4 bg-lime-500"></div>
//     <p>
//       {" "}
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae
//       fugiat aliquam fuga asperiores quaerat delectus cum architecto ut
//       assumenda pariatur hic consectetur, mollitia molestias? Atque illo
//       ducimus iure esse.
//     </p>
//     <div ref={targetRef} className=" w-2/5 h-52 bg-red-400"></div>
//     <div className="h-screen w-40 bg-lime-300"></div>

//     <button className="h-8 relative z-40" onClick={scrollTo}>
//       click
//     </button>
//   </motion.div>
// );
