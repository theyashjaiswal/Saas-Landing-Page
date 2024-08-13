"use client";
import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLog from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import PulseLogo from "@/assets/logo-pulse.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const LogoTicker = (props: any) => {
  const { theme } = props;
  const logoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) => {
    console.log("mouse", latestValue);
  });

  return (
    <section ref={logoRef} className="py-8 md:py-12 bg-white dark:bg-black">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14 dark:invert"
            animate={{ translateX: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto " />
            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image src={QuantumLog} alt="Quantum Logo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto " />
            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image src={QuantumLog} alt="Quantum Logo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
