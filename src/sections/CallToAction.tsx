import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";

export const CallToAction = (props: any) => {
  return (
    <section className="overflow-x-clip py-24 bg-gradient-to-b from-white to-[#D2DCFF] dark:bg-gradient-to-b dark:from-black dark:to-[#0c1842] ">
      <div className="flex justify-center">
        <div className="container">
          <div className="">
            <div className="section-heading">
              <h2 className="section-title mt-5">Sign up for free today</h2>
              <p className="section-description mt-5">
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts.
              </p>
            </div>
            <div className="flex justify-center gap-2 items-center mt-[1.875rem]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={StarImage}
              alt=";t"
              width={360}
              className="hidden lg:block absolute -left-[350px] -top-[137px]"
            ></Image>
            <Image
              src={SpringImage}
              alt=";t"
              width={360}
              className="hidden lg:block absolute -right-[331px] -top-[19px]"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
