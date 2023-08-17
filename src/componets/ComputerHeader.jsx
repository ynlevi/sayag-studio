import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
export default function ComputerHeader({ navLinks }) {
  const { t } = useTranslation();
  return (
    <div className="hidden md:block">
      <div className="ml-3 mt-4 mb-8 text-primary font-light ">
        <LanguageSwitcher />
      </div>
      <motion.nav>
        <ul className="flex flex-col gap-4 my-6 ml-2 w-fit text-sm">
          {navLinks.map((link, i) => (
            <NavLink key={i} exact={"true"} to={link}>
              {({ isActive }) => (
                <motion.li
                  className={`p-2 list-none  tracking-widest ${
                    isActive
                      ? "font-light text-primary-hover"
                      : " text-primary font-extralight"
                  }`}
                  whileHover={!isActive && { color: "var(--primary-hover)" }}
                  whileTap={{ y: -4 }}
                >
                  {t(`navbar.${link}`)}
                </motion.li>
              )}
            </NavLink>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
