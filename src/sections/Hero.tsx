import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";

export const Hero: any = (props: any) => {
  const { theme, toggleTheme } = props;
  return (
    <section
      className={`pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]
       dark:bg-gradient-to-b dark:from-black dark:to-[#001E80] overflow-x-clip`}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] dark:bg-gradient-to-b dark:from-[#001E80] dark:to-white text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] dark:text-white/80 tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[1.875rem]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={Cylinder}
              height={220}
              width={220}
              alt="Cylinder Image"
              className="animate-pulse hidden md:block md:absolute -top-8 -left-32"
            />
            <Image
              src={Noodle}
              height={220}
              width={220}
              alt="Nooddle Image"
              className="hidden lg:block lg:absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
