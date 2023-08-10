import navLinks from "../data/links/navLinks";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function ComputerHeader() {
  const castumLinkList = {};
  const castumLinkItem = {};
  return (
    <div className="hidden md:block">
      <motion.ul
        className="flex gap-2 text-sm"
        variants={castumLinkList}
        initial="closed"
        animate="open"
      >
        {navLinks.map((obj, i) => (
          <Link to={obj.path}>
            <motion.li
              variants={castumLinkItem}
              className="my-5 ml-4 hover:text-primary text-primary list-none font-light"
              whileTap={{ y: -3 }}
            >
              {obj.name}
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </div>
  );
}
