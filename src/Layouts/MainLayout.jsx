import GlowPink from "../components/Glow";
import GlowBlue from "../components/GlowBLue";
import About from "../Pages/About";
import Main from "../Pages/Main";
import Navbar from "./Navbar";
import person from "../assets/Gambar/pers.png";
import Skill from "../Pages/Skill";
import Works from "../Pages/Works";
import Bulat from "../components/Bulat";
import { useEffect } from "react";
import MagneticCard from "../components/MagneticCard";

const MainLayout = () => {
  useEffect(() => {
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

    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll(".parallax").forEach((el) => {
        const speed = el.dataset.speed || 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
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
      <Bulat className="parallax" data-speed="0.1 top-100 left-120" />

      <div className="relative z-10 text-white">
        <Navbar />

        {/* HERO */}
        <section className="px-6 py-24 min-h-screen grid md:grid-cols-2 gap-16 items-center reveal">
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

        <section className="px-6 py-20 reveal">
          <About />
        </section>

        <section className="px-6 py-20 reveal">
          <Skill />
        </section>

        <section className="px-6 py-20 reveal">
          <Works />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
