"use client";

import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme(theme: any) {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="overflow-clip dark:bg-gradient-to-b dark:from-black dark:to-[#001E80]">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <LogoTicker theme={theme} />
      <ProductShowcase theme={theme} />
      <Pricing theme={theme} />
      <Testimonials theme={theme} />
      <CallToAction theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
