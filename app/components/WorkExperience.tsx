"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const WorkExperience = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  const mockData = [0, 1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen md:h-full text-left flex flex-col overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="w-full flex space-x-5 p-10">
          {/* {mockData.map((item) => (
            <ExperienceCard key={item} />
          ))} */}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
