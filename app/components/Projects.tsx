"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const Projects = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  const projects = [0, 1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionHeading">Projects</h3>
      <div className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Some of them are a little bit outdated (I&apos;m working on it!)
      </div>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        ref={emblaRef}
      >
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[400px] w-[400px]"
              src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                velit reprehenderit temporibus voluptatem debitis alias
                consequatur dolore earum! Perspiciatis dolores nostrum incidunt
                vitae voluptas temporibus rem, quos, officiis recusandae
                eligendi eius porro numquam, quisquam a delectus repellendus
                saepe iusto pariatur.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30px] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
