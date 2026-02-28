import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Opening = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease-in-out",
      once: true, // animasi hanya sekali
    });
  }, []);
  return (
    <div
      className="h-screen bg-linear-to-b from-black via-[#312e81] to-[#a855f7]
          text-white flex items-center justify-center"
    >
      <h1
        data-aos="fade-up"
        className=" 
    text-[5rem] md:text-[6rem] font-extrabold
    text-[#e9d5ff]
    drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]
    drop-shadow-[0_0_60px_rgba(99,102,241,0.6)]
  "
      >
        Portofolio
      </h1>
    </div>
  );
};

export default Opening;
