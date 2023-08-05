import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function HomePage() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// export default function Home() {
//   return (
//     <main className="h-screen md:h-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
//       <section id="hero" className="snap-start">
//         <Hero />
//       </section>
//       <section id="about" className="snap-center">
//         <About />
//       </section>
//       <section id="experience" className="snap-center">
//         <WorkExperience />
//       </section>
//       <section id="skills" className="snap-start">
//         <Skills />
//       </section>
//       <section id="projects" className="snap-start">
//         <Projects />
//       </section>
//       <section id="contact" className="snap-start">
//         <ContactMe />
//       </section>
//     </main>
//   );
// }
