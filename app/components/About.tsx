"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen md:h-full flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl"
    >
      <h3 className="sectionHeading">About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://scontent.fbga1-4.fna.fbcdn.net/v/t1.6435-9/138853642_433335221120743_5010146377569514509_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Yu0MigyGfz0AX9bhn3N&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAwtTtaIzCP38lovOytvqldWc8uZBXos_waxizD3J5qiQ&oe=64760A83"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          facilis tempore fugiat aperiam provident, enim dolores iusto quo animi
          illo pariatur qui tempora soluta atque ad voluptates omnis quia earum
          magnam asperiores nihil maiores vel amet! Tempora saepe perferendis
          vitae. Iure porro accusantium aspernatur? Architecto, doloribus iure
          minima sint tenetur maxime provident quidem reiciendis, nihil repellat
          magnam libero laudantium nobis?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
