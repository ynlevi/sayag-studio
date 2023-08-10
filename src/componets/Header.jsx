//components
import MobileHeader from "./MobileHeader";
import ComputerHeader from "./ComputerHeader";
import Logo from "./Logo";
///npms
import { AnimatePresence, delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

// icons

export default function Header() {
  return (
    <>
      <motion.div className=" bg-secondary w-full p-4 flex justify-between ">
        <Logo className={"text-5xl"} />
        <MobileHeader />
        <ComputerHeader />
      </motion.div>
    </>
  );
}

///mobile code until here
