import { Link } from "react-router-dom";
import profileImg from "../../data/media/images/profile.jpg";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import BtnAction from "../../componets/BtnAction";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-100  md:static">
      <div className="flex flex-col lg:flex-row-reverse min-h-screen w-screen">
        <div className="p-4 h-90vh md:h-screen mx-auto my-auto">
          <img
            className="max-h-full w-ful mx-auto object-cover"
            src={profileImg}
            alt="profile-img"
          />
        </div>
        <div className="p-4 max-w-lg mx-auto lg:w-1/2 lg:my-auto">
          <h2 className="text-2xl lg:text-4xl">{t("about.h1")}</h2>
          <p className="py-8 text-gray-400 y-5">{t("about.p")}</p>
          <div>
            <Link to={"/contact-us"}>
              <BtnAction field={t("about.btnAction")} className={"my-4"} />
            </Link>
          </div>
        </div>
      </div>
      <Footer className={"mt-8"} />
    </div>
  );
}
