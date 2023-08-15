//components
import MobileHeader from "./MobileHeader";
import ComputerHeader from "./ComputerHeader";
import Logo from "./Logo";

///npms
import { AnimatePresence, delay, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// icons

export default function Header({ primaryRef }) {
  return (
    // md:fixed md:top-0 md:left-0
    <motion.div className=" w-full pt-0 flex justify-between md:justify-normal md:gap-12 top-0 left-0 md:flex-col md:w-fit bg-white md:pt-3 md:h-screen sticky md:shadow-xl">
      <Logo className={"h-20 w-40 top-0 -left-10"} primaryRef={primaryRef} />
      <MobileHeader primaryRef={primaryRef} />
      <ComputerHeader />
    </motion.div>
  );
}

function ChangeLang() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => i18n.changeLanguage(lang);
  return (
    <>
      <nav>
        <button
          className={`${i18n.resolvedLanguage === "en" && "font-bold"}`}
          onClick={() => handleClick("en")}
        >
          English
        </button>
        <button onClick={() => handleClick("he")}>Hebrow</button>
        <button onClick={() => handleClick("fr")}>French</button>
      </nav>
      <div>{t("h1.0")}</div>
      <p>{t("activeBtn.first")}</p>
    </>
  );
}
///mobile code until here
