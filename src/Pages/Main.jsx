import Button from "../components/Button";
import GlowBlue from "../components/GlowBLue";


const Main = () => {
  return (
    <div className="flex flex-col  gap-3 relative md:order-1 order-2">
      {/* <GlowBlue /> */}
      <h1 className="text-[2rem] font-bold">
        Hi, I'm <span className="text-[#a5e3fc]">Bileam</span>{" "}
      </h1>
      <p className="font-bold text-[1.1rem]">FullStack Developer website</p>
      <span className="inline-block border border-[#aca5a5]"></span>
      <p className="text-[0.9rem] text-[#4c358a]">
        I build modern, clean, and scalable web applications with a focus on
        performance and user experience.
      </p>
      <div className="flex gap-5">
        <a
          href=""
          className="p-2 bg-white text-indigo-600 rounded-md hover:scale-105 transition"
        >
          My Github
        </a>

        <a
          href=""
          className="border scale-110 py-2 px-4 rounded-md cursor-pointer bg-linear-to-r from-[#444dfa] shadow-2xl to-[#d339da]/40 hover:scale-105 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Main;
