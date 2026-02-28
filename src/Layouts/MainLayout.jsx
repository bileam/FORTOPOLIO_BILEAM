import { useEffect } from "react";
import Navbar from "./Navbar";

import GlowPink from "../components/Glow";
import GlowBlue from "../components/GlowBLue";
import Bulat from "../components/Bulat";

import Main from "../Pages/Main";
import About from "../Pages/About";
import Skill from "../Pages/Skill";
import Works from "../Pages/Works";

import MagneticCard from "../components/MagneticCard";
import person from "../assets/Gambar/pers.png";
import wa from "../assets/wa1.svg";
import Media from "../components/SosialMedia";
import Desktop from "../components/Mediadesktop";
import Opening from "../Pages/Opening";

const MainLayout = () => {
  useEffect(() => {
    // Reveal animation
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    // SAFE PARALLAX (BACKGROUND ONLY)
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll(".parallax").forEach((el) => {
        const speed = Number(el.dataset.speed || 0.2);
        el.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    //  bg-linear-to-br  from-[#6366f1] via-[#8b5cf6] to-[#a855f7]
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-[#a855f7]  via-[#312e81]  to-[#a855f7]">
      <Opening />

      <GlowPink className="parallax" data-speed="0.2" />
      <GlowBlue className="parallax" data-speed="0.15" />
      <Bulat className="parallax" data-speed="0.1" />

      <div className="relative z-10 text-white">
        <Navbar />
        <section
          id="home"
          className="scroll-mt-28 px-6 py-24 min-h-screen grid md:grid-cols-2 gap-16 items-center reveal"
        >
          <Main />

          <div className="flex justify-center">
            <img
              src={person}
              alt="Profile"
              className="
                w-72 h-72 md:w-80 md:h-80
                rounded-3xl object-cover
                bg-white/20 backdrop-blur-xl
                border border-white/30
                shadow-2xl
                animate-float
              "
            />
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-6 py-20 reveal">
          <About />
        </section>

        <section id="skills" className="scroll-mt-28 px-6 py-20 reveal">
          <Skill />
        </section>

        <section id="works" className="scroll-mt-28 px-6 py-20 reveal">
          <Works />
        </section>
        <div className="fixed left-5 hidden md:block top-[45%]">
          <Media className="animate-float delay-300 bg-black/60 py-3 px-2 rounded-2xl" />
        </div>
        <Desktop className="md:hidden block" />
      </div>
    </div>
  );
};

export default MainLayout;
