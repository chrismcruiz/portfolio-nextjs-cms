import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";

const BackToTop = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");

  const { image } = footer.data;
  return (
    <section className="sticky bottom-5 w-full">
      <div className="flex items-center justify-center">
        <Link href="#hero">
          <PrismicNextImage
            field={image}
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};

export default BackToTop;
