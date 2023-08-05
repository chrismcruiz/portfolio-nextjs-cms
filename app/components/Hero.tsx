"use client";

import { DM_Mono, Poppins } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Link from "next/link";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
const dmMono = DM_Mono({ weight: ["400"], subsets: ["latin"] });

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is <Christian />",
      'I\'m a { "full-stack" : web dev }',
      "And I-like-to-make-cool-stuff.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="container px-6 mx-auto xl:px-0 xl:max-w-5xl h-screen">
      <div className="flex flex-col justify-center h-full">
        <h1
          className={`text-[clamp(32px,_8vw,_80px)] xl:pr-7 font-semibold ${dmMono.className}`}
        >
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-5 lg:mt-10 space-y-8">
          <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
            Software Engineer
          </h2>
          <p className="max-w-[540px] text-lg lg:text-xl leading-relaxed text-[#8892b0]">
            I can make your dream website come true. Reach out to me and
            let&apos;s make it happen!
          </p>
        </div>
        <div>
          <Link
            href=""
            className={`${dmMono.className} mt-10 lg:mt-16 text-[#64ffda] px-6 py-4 border border-solid border-[#64ffda] rounded-[4px] inline-block text-sm lg:text-lg`}
          >
            Check out my projects!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
