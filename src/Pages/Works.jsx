import Title from "../components/Title";
import foto from "../assets/works/listtas.png";
import Button from "../components/Button";
import { worksme } from "../datas/Works";

const Works = () => {
  return (
    <div
      className=" bg-white/15  backdrop-blur-xl
              border border-white/30
              rounded-3xl p-5"
    >
      <Title>WORKS</Title>
      <p className="mb-2 text-[#2f2b55]">Some of my recent project</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {worksme.map((item) => (
          <div
            key={item.id}
            className="bg-white/15 backdrop-blur-xl
                  border border-white/30
                  rounded-2xl p-6
                  hover:scale-105 transition"
          >
            <img
              src={item.foto}
              className="h-40 rounded-xl bg-black/20 mb-4 w-full object-cover "
            />
            <h4 className="font-extrabold mb-1 text-blue-700 text-[1.2rem]">
              {item.name}
            </h4>
            <p className="text-sm opacity-80 text-[#2f2b55] h-10 overflow-hidden">
              {item.deskription}
            </p>
            <div className="mt-4 w-full justify-end flex">
              <Button className="cursor-pointer active:scale-90 text-[0.9rem] bg-linear-to-r from-[#444dfa] shadow-2xl to-[#d339da]/40 hover:scale-105 transition">
                VIEW
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Works;
