import GlowPink from "../components/Glow";
import GlowBlue from "../components/GlowBLue";
import About from "../Pages/About";
import Main from "../Pages/Main";
import Navbar from "./Navbar";
import person from "../assets/Gambar/person.png";
import Title from "../components/Title";
import Skill from "../Pages/Skill";

const MainLayout = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden 
      bg-linear-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7]"
    >
      {/* ===== GLOW BACKGROUND ===== */}
      <GlowPink className="top-[-25%] left-[-15%] " />
      <GlowBlue className="bottom-[-25%] right-[-15%]" />
      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-white">
        {/* ===== NAVBAR ===== */}
        {/* <nav className="flex justify-between items-center px-12 py-8">
          <h1 className="text-2xl font-bold tracking-wide">Bileam</h1>

          <ul className="flex gap-8 text-sm opacity-90">
            <li className="hover:opacity-100 cursor-pointer">Home</li>
            <li className="hover:opacity-100 cursor-pointer">About</li>
            <li className="hover:opacity-100 cursor-pointer">Skills</li>
            <li className="hover:opacity-100 cursor-pointer">Works</li>
          </ul>
        </nav> */}
        <Navbar />

        {/* ===== HERO ===== */}
        <section className="px-12 py-24 grid md:grid-cols-2 gap-16 items-center  ">
          <Main />
          <div className="flex justify-center md:order-2 order-1">
            <img
              src={person}
              alt=""
              className="md:w-72 md:h-72 w-80  h-72 rounded-3xl  object-center object-cover
              bg-white/20 backdrop-blur-xl
              border border-white/30
              shadow-2xl
              flex items-center justify-center"
            />
          </div>
        </section>

        <section className="px-12 py-20">
          <About />
        </section>

        {/* ===== SKILLS ===== */}
        <section className="px-12 py-20">
          <Skill />
        </section>

        {/* ===== WORKS ===== */}
        <section className="px-12 py-20">
          <h3 className="text-3xl font-bold mb-10">Works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/15 backdrop-blur-xl
                  border border-white/30
                  rounded-2xl p-6
                  hover:scale-105 transition"
              >
                <div className="h-36 rounded-xl bg-black/20 mb-4" />
                <h4 className="font-semibold mb-2">Project {item}</h4>
                <p className="text-sm opacity-80">
                  Short project description here.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
