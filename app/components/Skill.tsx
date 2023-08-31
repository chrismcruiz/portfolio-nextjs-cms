import { SkillsSliceDefaultItem } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

interface Props extends SkillsSliceDefaultItem {
  directionLeft?: boolean;
}

const Skill = ({ skill, proficiency, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      {/* <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale  transition duration-300 ease-in-out"
      /> */}
      <PrismicNextImage
        field={skill}
        className="rounded-full border border-gray-500 object-contain h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale  transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 rounded-full">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
