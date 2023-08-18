import { motion } from "framer-motion";
export default function BtnAction({ field, className, onClick, href }) {
  return (
    <motion.div
      className={`text-md h-full px-3 py-2  border-primary rounded-lg font-bold md:font-light border-2 md:border cursor-pointer text-primary w-fit ${className}`}
      whileTap={{ scale: 0.8 }}
      whileHover={{
        backgroundColor: "var(--primary)",
        color: "var(--light)",
      }}
      onClick={onClick}
    >
      {href ? <a href={href}>{field}</a> : field}
    </motion.div>
  );
}
