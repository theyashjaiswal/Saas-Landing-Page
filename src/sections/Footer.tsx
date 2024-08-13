import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPinterest from "@/assets/social-pin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = (props: any) => {
  return (
    <footer
      id="footer"
      className="py-10 bg-black text-sm text-[#BCBCBC] text-center"
    >
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:left-0 before:right-0 before:blur-md before:bg-gradient-to-r before:from-[#F87BFF] before:via-[#FB92CF] before:to-[#2FD8FE] before:absolute">
          <Image src={Logo} alt="logo" height={40} className="relative"></Image>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center mt-6  gap-6">
          <a href="https://yashjaiswal.com" className="  hover:text-gray-100">
            About
          </a>
          <a href="#product" className="hover:text-gray-100">
            Features
          </a>
          <a href="#testimonials" className="hover:text-gray-100">
            Customers
          </a>
          <a href="#pricing" className="hover:text-gray-100">
            Pricing
          </a>
          <a href="#footer" className="hover:text-gray-100">
            Help
          </a>
        </nav>
        <div className="flex flex-row justify-center gap-6 mt-6">
          <SocialX onClick={() => window.open("https://yashjaiswal.com")} />
          <SocialInsta onClick={() => window.open("https://yashjaiswal.com")} />
          <SocialLinkedin
            onClick={() => window.open("https://yashjaiswal.com")}
          />
          <SocialPinterest
            onClick={() => window.open("https://yashjaiswal.com")}
          />
          <SocialYoutube
            onClick={() => window.open("https://yashjaiswal.com")}
          />
        </div>
      </div>
      <p className="mt-6">
        &copy; 2024 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  );
};
