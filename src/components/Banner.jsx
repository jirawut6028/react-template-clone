import React from "react";
import banner from "../assets/banner.svg";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="grid lg:flex justify-between pl-10 md:pl-20 md:pr-44 w-full h-[80vh] bg-gradient-to-tr from-[#f7dbda] via-[#f5f6f7] to-[#f3deed]">
      <div className="flex flex-col h-full items-start justify-center gap-9">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={banner}
          alt="banner"
          className="w-[150px]"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[61px] font-semibold leading-tight"
        >
          Access a library of
          <br className="hidden md:block" /> free design resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[27px] leading-snug"
        >
          The best resources and books from around the web,
          <br className="hidden md:block" />
          collected and curated for your reading.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          type="button"
          className="text-white bg-[#1d1d1d] hover:bg-[#33383f] font-semibold rounded-xl text-2xl px-10 py-2.5 duration-300 cursor-pointer active:translate-y-0.5"
        >
          Get Access Now
        </motion.button>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={banner}
        alt="banner"
        className="w-[420px] hidden lg:block"
      />
    </div>
  );
}

export default Banner;
