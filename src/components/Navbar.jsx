import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, useAnimationControls } from "framer-motion";

const containerVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 9999, damping: 999 },
  },
  close: { opacity: 0, y: -100, transition: { duration: 0.2 } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [isOpen]);

  return (
    <>
      <div className="sticky top-0 flex w-full h-20 items-center justify-between px-10 md:px-20 bg-white border border-[#f5f6f7] z-50">
        <div className="flex gap-8 items-center">
          <img src={logo} alt="logo" className="w-56" />
          <div className="relative hidden xl:block">
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl text-[#99a4af]" />
            <input
              type="text"
              placeholder="Search resources"
              className="bg-[#f5f6f7] rounded-md h-11 w-[350px] pl-10 placeholder:text-xl border border-transparent hover:border-[#99a4af] duration-300"
            />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-7">
          <p className="text-xl font-semibold text-[#646b72] hover:text-[#1d1d48] duration-300 cursor-pointer">
            All Resources
          </p>
          <p className="text-xl font-semibold text-[#646b72] hover:text-[#1d1d48] duration-300 cursor-pointer">
            Login
          </p>
          <button
            type="button"
            className="text-white bg-[#1d1d1d] hover:bg-[#33383f] font-semibold rounded-xl text-xl px-5 py-2 duration-300 cursor-pointer active:translate-y-0.5"
          >
            Free Sign Up
          </button>
        </div>
        <RxHamburgerMenu
          className="text-4xl text-[#7e868f] lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <motion.div
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="fixed w-full z-40 bg-white flex flex-col items-center py-12 px-9 gap-7 lg:hidden border border-[#f5f6f7]"
      >
        <p className="text-xl font-semibold text-[#646b72] hover:text-[#1d1d48] duration-300 cursor-pointer">
          All Resources
        </p>
        <p className="text-xl font-semibold text-[#646b72] hover:text-[#1d1d48] duration-300 cursor-pointer">
          Login
        </p>
        <button
          type="button"
          className="text-white bg-[#1d1d1d] hover:bg-[#33383f] font-semibold rounded-xl text-xl w-full py-3.5 duration-300 cursor-pointer active:translate-y-0.5"
        >
          Free Sign Up
        </button>
      </motion.div>
    </>
  );
}

export default Navbar;
