import { motion } from "framer-motion";
export default function BtnSocial({ icon, className, href }) {
  return (
    <motion.div
      className={`text-3xl cursor-pointer text-primary w-fit h-fit  p-2 rounded-full border-2 border-primary  ${className} `}
      whileTap={{ scale: 0.8 }}
      whileHover={{
        backgroundColor: "var(--primary)",
        color: "var(--light)",
        scale: 1.1,
      }}
      href={href}
    >
      {icon}
    </motion.div>
  );
}
