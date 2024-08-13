import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const TestimonialCardsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6"
    >
      {[...new Array(2)].fill(0).map((_, testimonialIndex) => (
        <React.Fragment key={testimonialIndex}>
          {props.testimonials.map((testimonial, index) => (
            <div className={"card"} key={index}>
              <div>{testimonial.text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className=""
                ></Image>
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {testimonial.name}
                  </div>
                  <div className="leading-5 tracking-tight">
                    {testimonial.username}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = (props: any) => {
  return (
    <section id="testimonials" className="py-6 bg-white dark:bg-black ">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Version 2.0 is here</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 dark:text-white [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialCardsColumn
            duration={13}
            testimonials={firstCol}
          ></TestimonialCardsColumn>
          <TestimonialCardsColumn
            duration={18}
            testimonials={secondCol}
            className="hidden md:block"
          ></TestimonialCardsColumn>
          <TestimonialCardsColumn
            duration={17}
            testimonials={thirdCol}
            className="hidden lg:block"
          ></TestimonialCardsColumn>
        </div>
      </div>
    </section>
  );
};
