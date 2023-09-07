"use client";

import { WorkExperienceSliceDefaultItem } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCard = ({
  company_logo,
  company_name,
  role,
  start_date,
  end_date,
  skill_1,
  skill_2,
  skill_3,
  task_1,
  task_2,
  task_3,
}: WorkExperienceSliceDefaultItem) => {
  const skill_images = [skill_1, skill_2, skill_3];
  const tasks = [task_1, task_2, task_3];
  return (
    // cursor-grab snap-x snap-mandatory
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] bg-[#292929] p-6 md:p-10 hover:opacity-100 opacity-40  transition-opacity duration-200 overflow-hidden embla__slide">
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/D4E0BAQG2Q9lZTPodjw/company-logo_200_200/0/1682349871217?e=1691020800&v=beta&t=BjfgcZXONFL7kvjB_LlFZsbKKbblAljV9YDB9js98pw"
        alt=""
      /> */}
      <PrismicNextImage
        field={company_logo}
        className="block w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <PrismicRichText
          field={role}
          components={{
            paragraph: ({ children }) => (
              <h4 className="text-4xl font light">{children}</h4>
            ),
          }}
        />
        <PrismicRichText
          field={company_name}
          components={{
            preformatted: ({ children }) => (
              <p className="font-bold text-2xl mt-1">{children}</p>
            ),
          }}
        />
        <div className="flex space-x-2 my-2">
          {skill_images.map((image, index) => (
            <PrismicNextImage
              key={index}
              field={image}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {start_date} - {end_date}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
