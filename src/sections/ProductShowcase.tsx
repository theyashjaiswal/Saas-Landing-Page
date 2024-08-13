import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = (props: any) => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) => {
    console.log("mouse", latestValue);
  });

  return (
    <section ref={productRef} id="product" className="py-24 overflow-x-hidden">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="dark:invert font-bold">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="product image" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            alt="pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY: translateY }}
          />
          <motion.img
            src={TubeImage.src}
            alt="tube image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY: translateY }}
          />
        </div>
      </div>
    </section>
  );
};
