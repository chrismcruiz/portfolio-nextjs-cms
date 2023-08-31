"use client";

import { DM_Mono, Poppins } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
const dmMono = DM_Mono({ weight: ["400"], subsets: ["latin"] });

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const {
    title_first_sentence,
    title_second_sentence,
    title_third_sentence,
    subtitle,
    description,
    button_text,
  } = slice.primary;
  const [text] = useTypewriter({
    words: [
      `"${title_first_sentence}"`,
      `"${title_second_sentence}"`,
      `"${title_third_sentence}"`,
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section
      id="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container px-6 mx-auto xl:px-0 xl:max-w-5xl h-screen">
        <div className="flex flex-col justify-center h-full">
          <h1
            className={`text-[clamp(32px,_8vw,_80px)] xl:pr-7 font-semibold ${dmMono.className}`}
          >
            <span>{text}</span>
            <Cursor cursorColor="#64FFDA" />
          </h1>
          <div className="mt-5 lg:mt-14 space-y-8 lg:space-y-12">
            <PrismicRichText
              field={subtitle}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
                    {children}
                  </h2>
                ),
              }}
            />
            {/* text-[#8892b0] */}
            <PrismicRichText
              field={description}
              components={{
                paragraph: ({ children }) => (
                  <p className="max-w-[540px] text-lg lg:text-xl leading-relaxed">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
          <div>
            <Link
              href="#projects"
              className={`inline-block mt-10 lg:mt-16 text-[#64ffda] px-6 py-4 border border-solid border-[#64ffda] rounded-[4px] text-sm lg:text-lg`}
            >
              {button_text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
