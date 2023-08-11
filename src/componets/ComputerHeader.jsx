import navLinks from "../data/links/navLinks";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function ComputerHeader() {
  const castumLinkList = {};
  const castumLinkItem = {};
  return (
    <div className="hidden md:block">
      <ul>
        <motion.nav
          className="flex flex-col gap-4 my-6 ml-2 w-fit text-sm"
          variants={castumLinkList}
          initial="closed"
          animate="open"
        >
          {navLinks.map((obj, i) => (
            <NavLink key={i} exact={"true"} to={obj.path}>
              {({ isActive }) => (
                <motion.li
                  variants={castumLinkItem}
                  className={`p-2 list-none  tracking-widest ${
                    isActive
                      ? "font-light text-primary-hover"
                      : " text-primary font-extralight"
                  }`}
                  whileHover={!isActive && { color: "var(--primary-hover)" }}
                  whileTap={{ y: -4 }}
                >
                  {obj.name}
                </motion.li>
              )}
            </NavLink>
          ))}
        </motion.nav>
      </ul>
    </div>
  );
}
