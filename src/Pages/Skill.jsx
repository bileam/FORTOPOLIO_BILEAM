import Title from "../components/Title";
import express from "../assets/IconSkill/expres.svg";

import { skillME } from "../datas/skill";
const Skill = () => {
  return (
    <div
      className=" bg-white/15  backdrop-blur-xl
            border border-white/30
            rounded-3xl p-5"
    >
      <Title>Skill</Title>
      <p className="mb-2 text-[#2f2b55]">
        Here are the technologogies i work with:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {skillME.map((items) => (
          <div
            key={items.id}
            className="bg-linear-to-r from-[#444dfa] shadow-2xl to-purple-400 backdrop-blur-xl
                  border border-white/30
                  rounded-2xl p-6 
                  hover:scale-105 transition flex items-center gap-2"
          >
            <img src={items.logo} alt="" className="w-10  h-10 object-cover" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between w-full">
                <h1>{items.name}</h1>
                <h1>{items.persen} %</h1>
              </div>

              <div className=" relative w-full h-2 border rounded-md">
                <span
                  className={`absolute left-0 bottom-0 h-full ${
                    items.persen < 70
                      ? "bg-[#FFFFFF]"
                      : "bg-linear-to-r from-[#a5e3fc] to-red-600"
                  } rounded-full transition-all duration-300`}
                  style={{ width: `${items.persen}%` }}
                ></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
