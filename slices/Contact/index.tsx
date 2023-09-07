"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  const { title, subtitle, phone_number, email, location } = slice.primary;
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:chrismcruiz@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <section
      id="contact"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container md:h-full flex flex-col items-center text-center md:text-left max-w-7xl px-6 md:px-10 py-20 justify-evenly mx-auto">
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="sectionHeading">{children}</h2>
            ),
          }}
        />
        <div className="flex flex-col space-y-10 w-full">
          <PrismicRichText
            field={subtitle}
            components={{
              paragraph: ({ children }) => (
                <h3 className="text-2xl md:text-4xl font-semibold text-center">{children}</h3>
              ),
              label: ({ node, children }) => (
                <span className={`${node.data.label} decoration-[#27B2BA]/50`}>
                  {children}
                </span>
              ),
            }}
          />

          <div className="space-y-10">
            <div className="flex justify-center items-center space-x-5">
              <PhoneIcon className="text-[#64FFDA] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{phone_number}</p>
            </div>
            <div className="flex justify-center items-center space-x-5">
              <EnvelopeIcon className="text-[#64FFDA] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{email}</p>
            </div>
            <div className="flex justify-center items-center space-x-5">
              <MapPinIcon className="text-[#64FFDA] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{location}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-1/2"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-1/2"
                type="email "
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#64ffda] py-5 px-10 rounded-md text-gray-900 font-bold text-lg hover:bg-transparent hover:text-[#64ffda] border border-gray-900 hover:border-[#64ffda]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
