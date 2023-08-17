import Logo from "./Logo";
import BtnXMotion from "./BtnXMotion";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
// icons
import { GiFullPizza } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
export default function MobileHeader({ primaryRef, navLinks }) {
  ////
  const [isOpen, setOpen] = useState(false);
  const toggleVisible = () => setOpen((prev) => !prev);
  return (
    <div className="md:hidden">
      <AnimatePresence>
        {!isOpen && (
          <BtnXMotion
            icon={<RxHamburgerMenu />}
            handleClick={toggleVisible}
            className={"p-4"}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <SideMenu
            handleClick={toggleVisible}
            isOpen={isOpen}
            primaryRef={primaryRef}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const SideMenu = ({ handleClick, primaryRef, navLinks }) => {
  const castomSideMenu = {
    isClose: { x: "100%", transition: { delay: 0, type: "tween" } },
    isOpen: { x: 0, transition: { duration: 0.15, type: "tween", delay: 0.3 } },
  };
  const castomOverlay = {
    isClose: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.15 },
    },
    isOpen: {
      opacity: 0.5,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.45,
      },
    },
  };
  return (
    <>
      <motion.div
        key={0}
        className="absolute top-0 right-0 w-1/2 z-50 bg-slate-200 h-screen shadow-2xl divide-y divide-gray-50 "
        variants={castomSideMenu}
        initial="isClose"
        animate="isOpen"
        exit="isClose"
      >
        <motion.ul className="text-4xl flex justify-between py-5 px-3 ">
          <motion.li onClick={handleClick}>
            <Logo
              className={" h-10 w-20 top-0 -left-7 "}
              primaryRef={primaryRef}
            />
          </motion.li>

          <motion.li onClick={handleClick}>
            <BtnXMotion icon={<CgClose />} />
          </motion.li>
        </motion.ul>
        <div className="text-primary pl-3 py-3">
          <LanguageSwitcher />
        </div>
        <MenuLinks handleClick={handleClick} navLinks={navLinks} />
      </motion.div>
      <motion.div
        className="z-40 absolute h-screen inset-0 right-1/2 bg-primary cursor-pointer "
        key={1}
        variants={castomOverlay}
        initial="isClose"
        animate="isOpen"
        exit="isClose"
        onClick={handleClick}
      />
    </>
  );
};

const MenuLinks = ({ handleClick, navLinks }) => {
  const { t } = useTranslation();
  const castumLinkList = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };
  const castumLinkItem = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  return (
    <motion.ul
      className="flex flex-col gap-1"
      variants={castumLinkList}
      initial="closed"
      animate="open"
    >
      {navLinks.map((link, i) => (
        <NavLink key={i} exact={"true"} to={link}>
          {({ isActive }) => (
            <motion.li
              className={`my-3 ml-4 list-none font-bold ${
                isActive ? "text-primary-hover" : "text-primary "
              }`}
              variants={castumLinkItem}
              onClick={handleClick}
            >
              {t(`navbar.${link}`)}
            </motion.li>
          )}
        </NavLink>
      ))}
    </motion.ul>
  );
};
