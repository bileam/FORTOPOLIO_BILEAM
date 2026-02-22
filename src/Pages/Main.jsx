import Button from "../components/Button";

const Main = () => {
  return (
    <div
      className="
        flex flex-col gap-4 relative
        md:order-1 order-2
        animate-fadeUp
      "
    >
      <h1
        className="
          text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem]
          font-extrabold leading-tight
        "
      >
        Hi, I'm{" "}
        <span
          className="
            text-[#a5e3fc]
            drop-shadow-[0_0_12px_rgba(165,227,252,0.6)]
          "
        >
          Bileam
        </span>
      </h1>
      <p
        className="
          font-semibold
          text-[1rem] sm:text-[1.1rem]
          text-[#2f2b55]
        "
      >
        Fullstack Web Developer
      </p>

      {/* DIVIDER */}
      <span className="w-24 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></span>

      {/* DESCRIPTION */}
      <p
        className="
          text-[0.9rem] sm:text-[1rem]
          text-[#4c358a]
          max-w-lg
          leading-relaxed
        "
      >
        I build modern, clean, and scalable web applications with a strong focus
        on performance, UI detail, and user experience.
      </p>

      <div className="flex gap-4 mt-3 flex-wrap">
        <a
          href=""
          className="
            px-5 py-2 rounded-lg
            bg-white text-indigo-600 font-semibold
            shadow-md
            hover:scale-105 hover:shadow-xl
            transition-all duration-300
          "
        >
          My GitHub
        </a>

        <a
          href=""
          className="
            px-6 py-2 rounded-lg
            font-semibold text-white
            bg-linear-to-r from-[#444dfa] to-[#d339da]
            shadow-xl
            hover:scale-105 hover:brightness-110
            transition-all duration-300
          "
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Main;
