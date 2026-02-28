import wa from "../assets/wa1.svg";
import ig from "../assets/ig1.svg";
import github from "../assets/github1.svg";
const Media = ({ className = "" }) => {
  return (
    <div className={`flex flex-col ${className} gap-4 `}>
      <a
        href="https://wa.me/6281242922597?text=Hallo%20Bileam%20Mangalla"
        target="_blank"
        className="w-10 h-10 p-2  rounded-full group   bg-linear-to-r from-[#444dfa] to-[#d339da] transition-colors duration-400 ease-in"
      >
        <img
          src={wa}
          alt="whatsapp"
          className="group-hover:scale-105 transition-all duration-500"
        />
      </a>
      <a
        href="#"
        target="_blank"
        className="w-10 h-10 p-2  rounded-full group   bg-linear-to-r from-[#444dfa] to-[#d339da] transition-colors duration-400 ease-in"
      >
        <img
          src={ig}
          alt="whatsapp"
          className="group-hover:scale-105 transition-all duration-500"
        />
      </a>
      <a
        href="https://github.com/bileam"
        target="_blank"
        className="w-10 h-10 p-2  rounded-full group   bg-linear-to-r from-[#444dfa] to-[#d339da] transition-colors duration-400 ease-in"
      >
        <img
          src={github}
          alt="whatsapp"
          className="group-hover:scale-120 transition-all duration-500"
        />
      </a>
    </div>
  );
};
export default Media;
