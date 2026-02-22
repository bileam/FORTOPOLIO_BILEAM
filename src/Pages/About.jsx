import Cart from "../components/about/Cart";
import Cart2 from "../components/about/Cart2";
import pengalaman from "../assets/pengalaman.svg";
import project from "../assets/project.svg";
import student from "../assets/graduition.svg";
import intership from "../assets/intership.svg";
import indo from "../assets/indonesia.svg";
import Title from "../components/Title";
import { worksme } from "../datas/Works";
const About = () => {
  return (
    <div
      className="max-w-4xl    animate-fadeUp
            bg-white/15 backdrop-blur-xl
            border border-white/30
            rounded-3xl p-5 "
    >
      <Title>About Me</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2">
        <div className="flex flex-col gap-4 ">
          <p className="max-w-xl text-left md:text-justify leading-relaxed text-[#2f2b55]">
            I am an IT graduate with hands-on experience in building modern web
            applications using React, Tailwind CSS, Express.js, and MongoDB. I
            am passionate about problem-solving and creating clean,
            user-friendly interfaces.
          </p>
          <div className="flex md:flex-row flex-col gap-2">
            <Cart Number="1-3" logo={pengalaman}>
              Year Experience
            </Cart>
            <Cart Number={worksme.length} logo={project}>
              Project Complated
            </Cart>
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <Cart2 logo={student}>IT Graduate</Cart2>
          <Cart2 logo={intership}>Bangun Nusantara emas</Cart2>
          <Cart2 logo={indo}>Based In Tangerang, Banten Indonesia</Cart2>
        </div>
      </div>
    </div>
  );
};
export default About;
