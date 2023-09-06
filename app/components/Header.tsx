"use client";

import Link from "next/link";
import { DM_Mono } from "next/font/google";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/client";

const dmMono = DM_Mono({ weight: ["400"], subsets: ["latin"] });

const Header = async () => {
  const client = createClient();
  const header = await client.getSingle("header");

  const { icons, navigation } = header.data;

  const ICON_EMAIL = "email";

  return (
    // dmMono.className
    <header className="sticky top-0 z-10 bg-[rgb(36,36,36)]">
      <Disclosure as="nav">
        {({ open }) => (
          <div className="container px-6 py-4 mx-auto">
            <div className="flex justify-between items-center h-12">
              {/* Social Icons */}
              <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                }}
              >
                {icons?.map(({ url, type }, index) => (
                  <SocialIcon
                    key={index}
                    url={type === ICON_EMAIL ? "#contact" : url || ""}
                    network={type || ""}
                    fgColor="gray"
                    bgColor="transparent"
                    target={type === ICON_EMAIL ? "_self" : "_blank"}
                  />
                ))}
              </motion.div>
              {/* Navigation */}
              <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                }}
              >
                <ul className="hidden sm:flex items-center space-x-10 text-sm">
                  {navigation?.map(({ label }, index) => {
                    const anchorLabel = asText(label).toLowerCase() || "";
                    return (
                      <li key={index}>
                        <Link href={`#${anchorLabel}`}>
                          <PrismicRichText
                            field={label}
                            components={{
                              label: ({ children }) => (
                                <span className="text-[#64ffda] p-2 border border-solid border-[#64ffda] rounded-[4px] hover:border-gray-900 hover:text-gray-900 hover:bg-[#64ffda]">
                                  {children}
                                </span>
                              ),
                            }}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
              {/* Hamburguer Menu */}
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="block w-6 h-6" aria-hidden="true">
                    {open ? <RxCross2 /> : <FaBars />}
                  </span>
                  <span className="sr-only">
                    {open ? "Close" : "Open"} main menu
                  </span>
                </Disclosure.Button>
              </div>
            </div>
            {/* Mobile Nav */}
            <Disclosure.Panel className="absolute left-0 right-0 z-10 bg-[rgb(36,36,36)]">
              {navigation?.map(({ label }, index) => {
                const anchorLabel = asText(label).toLowerCase() || "";
                return (
                  <Link
                    key={index}
                    href={`#${anchorLabel}`}
                    className="pt-2 pb-3 sm:hidden gap-2 grid"
                  >
                    <Disclosure.Button>
                      <PrismicRichText
                        field={label}
                        components={{
                          label: ({ children }) => (
                            <span className="text-[#64ffda] p-2 border border-solid border-[#64ffda] rounded-[4px] hover:border-gray-900 hover:text-gray-900 hover:bg-[#64ffda]">
                              {children}
                            </span>
                          ),
                        }}
                      />
                    </Disclosure.Button>
                  </Link>
                );
              })}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
