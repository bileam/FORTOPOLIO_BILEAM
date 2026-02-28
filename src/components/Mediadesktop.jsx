import { useState } from "react";
import share from "../assets/share.svg";
import cancel from "../assets/cansel.svg";
import Media from "./SosialMedia";
import MagneticCard from "./MagneticCard";
const Desktop = ({ className = " " }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={`fixed bottom-8 ${className} right-10 flex flex-col justify-center `}
    >
      <div
        className={`overflow-hidden transform origin-bottom transition-transform duration-500 ${
          isOpen ? "scale-y-100 mb-2" : "scale-y-0 mb-2"
        }`}
      >
        <Media />
      </div>

      <MagneticCard>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`w-10 h-10 p-2 group ${
            isOpen ? "rotate-180" : "rotate-360 animate-float "
          } transition-all duration-500  cursor-pointer rounded-full bg-linear-to-r from-[#444dfa] to-[#d339da]`}
        >
          <img
            src={isOpen ? cancel : share}
            alt=""
            className={`group-hover:scale-105   transition-all duration-500`}
          />
        </button>
      </MagneticCard>
    </div>
  );
};

export default Desktop;
