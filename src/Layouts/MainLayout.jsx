import GlowPink from "../components/Glow";
import GlowBlue from "../components/GlowBLue";
import About from "../Pages/About";
import Main from "../Pages/Main";
import Navbar from "./Navbar";
import person from "../assets/Gambar/pers.png";
import Title from "../components/Title";
import Skill from "../Pages/Skill";

import Works from "../Pages/Works";
import Bulat from "../components/Bulat";

const MainLayout = () => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden overflow-y-hidden
      bg-linear-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7]"
    >
      {/* ===== GLOW BACKGROUND ===== */}
      <GlowPink className="top-[-25%] left-[-15%] " />
      <GlowBlue className="bottom-[-25%] right-[-15%]" />
      <Bulat className="top-100 left-120" />
      <Bulat className="top-230 left-120" />
      <Bulat className="top-300 left-120" />
      <Bulat className="top-400 left-120" />
      <Bulat className="top-500 left-120" />
      <Bulat className="bottom-40 left-50" />

      <div className=" z-10 text-white">
        <Navbar />
        {/* ===== HERO ===== */}
        <section className="px-6 py-24 grid md:grid-cols-2 gap-16 items-center  ">
          <Main />
          <div className="flex justify-center md:order-2 order-1">
            <img
              src={person}
              alt=""
              className="md:w-72 md:h-72 w-80 shadow-blue-600   h-72 rounded-3xl  object-center object-cover
              bg-white/20 backdrop-blur-xl
              border border-white/30
              shadow-2xl
              flex items-center justify-center"
            />
          </div>
        </section>

        <section className="px-6 py-20">
          <About />
        </section>
        <section className="px-6 py-20">
          <Skill />
        </section>

        {/* ===== WORKS ===== */}
        <section className="px-6 py-20">
          <Works />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
