"use client";

import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="ringCircle h-[200px] w-[200px] animate-ping" />
      <div className="ringCircle h-[300px] w-[300px]" />
      <div className="ringCircle h-[500px] w-[500px]" />
      <div className="ringCircle h-[650px] w-[650px] animate-pulse border-[#F7AB0A] opacity-20" />
      <div className="ringCircle w-[800px] h-[800px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
