"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const CallToAction = (props: any) => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // useMotionValueEvent(translateY, "change", (latestValue) => {
  //   console.log("mouse", latestValue);
  // });

  return (
    <div className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] dark:from-[#000000] dark:to-[#001E80] overflow-x-clip relative pb-10">
      <div className="container section-heading relative ">
        <h2 className="section-title mt-5">Sign up for free today</h2>
        <p className="section-description mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <motion.img
          src={StarImage.src}
          alt="Star Image"
          width={360}
          className="z-20 absolute -left-[350px] -top-[137px]"
          style={{ translateY: translateY, rotate: translateY }}
        ></motion.img>
        <motion.img
          src={SpringImage.src}
          alt="Spring Image"
          width={360}
          className="absolute -right-[331px] -top-[19px]"
          style={{ translateY: translateY }}
        ></motion.img>
        <div className="flex justify-center gap-2 items-center mt-[1.875rem]">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
