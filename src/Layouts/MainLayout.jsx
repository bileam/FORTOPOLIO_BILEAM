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
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7]">
      {/* BACKGROUND PARALLAX */}
      <GlowPink className="parallax" data-speed="0.2" />
      <GlowBlue className="parallax" data-speed="0.15" />
      <Bulat className="parallax" data-speed="0.1" />

      <div className="relative z-10 text-white">
        <Navbar />

        {/* HERO */}
        <section
          id="home"
          className="scroll-mt-28 px-6 py-24 min-h-screen grid md:grid-cols-2 gap-16 items-center reveal"
        >
          <Main />

          <MagneticCard className="flex justify-center">
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
          </MagneticCard>
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

        <a
          href="https://wa.me/6281242922597?text=Hallo%20Bileam%20Mangalla%3F"
          className="fixed bottom-10 right-10 cursor-pointer"
          target="_blank"
        >
          <MagneticCard className="animate-float">
            <img src={wa} alt="" className="w-10" />
          </MagneticCard>
        </a>
      </div>
    </div>
  );
};

export default MainLayout;
