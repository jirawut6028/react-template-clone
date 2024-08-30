import React from "react";
import { motion } from "framer-motion";

function Service() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-[#37435b] to-[#341a1a] h-[450px] text-white">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[42px] md:text-[44px] font-semibold pb-6"
      >
        Get more great resources
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[24px] md:text-[26px] text-center"
      >
        Get the latest design resources from across the web. <br />
        Straight to your inbox.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex gap-5 mt-10"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="rounded-xl pl-4 w-[280px] text-xl placeholder:text-[#cbd5df]"
        />
        <button
          type="button"
          className="text-white bg-[#495158] hover:bg-[#33383f] font-semibold rounded-xl text-2xl px-9 py-2.5 duration-300 cursor-pointer active:translate-y-0.5 active:bg-[#99a4af]"
        >
          Subscribe
        </button>
      </motion.div>
    </div>
  );
}

export default Service;
