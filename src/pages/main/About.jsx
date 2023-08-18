import { Link } from "react-router-dom";
import profileImg from "../../data/media/images/profile.jpg";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import BtnAction from "../../componets/BtnAction";
import {
  whileInView,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import he from "../../data/text/he";

import { useTranslation } from "react-i18next";
import { type } from "@testing-library/user-event/dist/type";

export default function About() {
  const { t } = useTranslation();
  const castomwhileInView = {
    hidden: { opacity: 0.4, filter: "blur(4px)" },
    show: {
      opacity: 1,
      filter: "blur(0)",
      transition: {
        delayChildren: 2,
        staggerDirection: 4,
      },
    },
  };
  return (
    <motion.div className="flex flex-col lg:flex-row-reverse min-h-screen w-screen lg:w-full overflow-hidden bg-slate-100">
      <motion.div
        className="p-4 h-90vh md:h-screen mx-auto my-auto"
        initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
        whileInView={{ x: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 0.4 }}
      >
        <img
          className="max-h-full w-ful mx-auto object-cover"
          src={profileImg}
          alt="profile-img"
        />
      </motion.div>
      <motion.div className="p-4 max-w-lg mx-auto lg:w-1/2 lg:my-auto ">
        <motion.h2
          className="text-2xl lg:text-4xl pb-8 overflow-hidden"
          initial={{ y: -100, x: -100, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ stiffness: 150, type: "spring", delay: 0.3 }}
        >
          {t("about.h1")}
        </motion.h2>
        <motion.div
          className="overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ stiffness: 150, type: "spring", delay: 0.6 }}
        >
          {he.about.p.map((p, i) => (
            <p key={i} className="py-1 text-gray-400 y-5">
              {t(`about.p.${i}`)}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="py-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ stiffness: 150, type: "spring", delay: 0.9 }}
        >
          <Link to={"/contact-us"}>
            <BtnAction field={t("about.btnAction")} className={"my-4"} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
