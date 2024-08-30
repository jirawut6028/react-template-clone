import React from "react";
import logo from "../assets/logo.svg";
import resoures from "../assets/resources.svg";
import { motion } from "framer-motion";

function Resources() {
  return (
    <div className="my-[100px] w-[88%] mx-auto md:mx-[82px]">
      <div className="flex justify-between items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-semibold text-4xl"
        >
          Featured Resources
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          type="button"
          className="text-gray-400 border border-[#e7ecf0] bg-[#f5f6f7] hover:bg-[#e7ecf0] font-semibold rounded-xl text-2xl px-9 py-2.5 duration-300 cursor-pointer hidden md:block active:translate-y-1"
        >
          See All Resources
        </motion.button>
      </div>
      <div className="flex flex-wrap mt-10 justify-between gap-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[430px] hover:-translate-y-1 duration-200"
        >
          <div className="h-[750px] md:h-[550px] mb-4">
            <div className="h-[45%] flex flex-col rounded-t-lg justify-around pl-6 bg-gradient-to-tr from-[#eedff9] via-[#f5f6f7] to-[#f5e9f3]">
              <img src={logo} alt="logo" className="w-60 md:w-52" />
              <p className="text-5xl md:text-4xl font-semibold">
                Design Systems <br />
                in Product Teams
              </p>
            </div>
            <img
              src={resoures}
              alt="resoures"
              className="rounded-b-lg w-full h-[55%] object-cover"
            />
          </div>
          <p className="text-[#6e6f6f] text-lg">By Franko Realguy</p>
          <p className="text-3xl font-semibold my-3">
            Design Systems in Product Teams
          </p>
          <p className="text-[#6e6f6f] text-lg leading-7">
            Ut libero molestias excepturi veniam et dicta assumenda tenetur
            voluptatem. Qui dolor officiis eum. Doloribus odit qui quia
            blanditiis omnis asperiores perspiciatis qui deleniti.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[430px] hover:-translate-y-1 duration-200"
        >
          <div className="h-[750px] md:h-[550px] mb-4">
            <div className="h-[45%] flex flex-col rounded-t-lg justify-around pl-6 bg-gradient-to-tr from-[#eedff9] via-[#f5f6f7] to-[#f5e9f3]">
              <img src={logo} alt="logo" className="w-60 md:w-52" />
              <p className="text-5xl md:text-4xl font-semibold">
                Design Systems <br />
                in Product Teams
              </p>
            </div>
            <img
              src={resoures}
              alt="resoures"
              className="rounded-b-lg w-full h-[55%] object-cover"
            />
          </div>
          <p className="text-[#6e6f6f] text-lg">By Franko Realguy</p>
          <p className="text-3xl font-semibold my-3">
            Design Systems in Product Teams
          </p>
          <p className="text-[#6e6f6f] text-lg leading-7">
            Ut libero molestias excepturi veniam et dicta assumenda tenetur
            voluptatem. Qui dolor officiis eum. Doloribus odit qui quia
            blanditiis omnis asperiores perspiciatis qui deleniti.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[430px] hover:-translate-y-1 duration-200"
        >
          <div className="h-[750px] md:h-[550px] mb-4">
            <div className="h-[45%] flex flex-col rounded-t-lg justify-around pl-6 bg-gradient-to-tr from-[#eedff9] via-[#f5f6f7] to-[#f5e9f3]">
              <img src={logo} alt="logo" className="w-60 md:w-52" />
              <p className="text-5xl md:text-4xl font-semibold">
                Design Systems <br />
                in Product Teams
              </p>
            </div>
            <img
              src={resoures}
              alt="resoures"
              className="rounded-b-lg w-full h-[55%] object-cover"
            />
          </div>
          <p className="text-[#6e6f6f] text-lg">By Franko Realguy</p>
          <p className="text-3xl font-semibold my-3">
            Design Systems in Product Teams
          </p>
          <p className="text-[#6e6f6f] text-lg leading-7">
            Ut libero molestias excepturi veniam et dicta assumenda tenetur
            voluptatem. Qui dolor officiis eum. Doloribus odit qui quia
            blanditiis omnis asperiores perspiciatis qui deleniti.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[430px] hover:-translate-y-1 duration-200"
        >
          <div className="h-[750px] md:h-[550px] mb-4">
            <div className="h-[45%] flex flex-col rounded-t-lg justify-around pl-6 bg-gradient-to-tr from-[#eedff9] via-[#f5f6f7] to-[#f5e9f3]">
              <img src={logo} alt="logo" className="w-60 md:w-52" />
              <p className="text-5xl md:text-4xl font-semibold">
                Design Systems <br />
                in Product Teams
              </p>
            </div>
            <img
              src={resoures}
              alt="resoures"
              className="rounded-b-lg w-full h-[55%] object-cover"
            />
          </div>
          <p className="text-[#6e6f6f] text-lg">By Franko Realguy</p>
          <p className="text-3xl font-semibold my-3">
            Design Systems in Product Teams
          </p>
          <p className="text-[#6e6f6f] text-lg leading-7">
            Ut libero molestias excepturi veniam et dicta assumenda tenetur
            voluptatem. Qui dolor officiis eum. Doloribus odit qui quia
            blanditiis omnis asperiores perspiciatis qui deleniti.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Resources;
