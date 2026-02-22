import MagneticCard from "../components/MagneticCard";
import Button from "../components/Button";
import { worksme } from "../datas/Works";
import { useState } from "react";
import Modals from "../components/works/Modal";
import Title from "../components/Title";

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-5">
      <Title>WORKS</Title>
      <p className="mb-2 text-[#2f2b55]">Some of my recent project</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {worksme.map((item) => (
          <MagneticCard
            key={item.id}
            className="
              bg-white/15 backdrop-blur-xl
              border border-white/30
              rounded-3xl p-6
              hover:shadow-2xl
            "
          >
            <img
              src={item.foto}
              className="h-40 w-full object-cover rounded-xl mb-4"
            />

            <h4 className="font-extrabold text-blue-700 text-lg mb-1">
              {item.name}
            </h4>

            <p className="text-sm text-[#2f2b55] line-clamp-2 mb-4">
              {item.deskription}
            </p>

            <div className="flex justify-end">
              <Button
                onClick={() => setSelectedWork(item)}
                className="bg-linear-to-r from-[#444dfa] cursor-pointer to-[#d339da]/40"
              >
                VIEW
              </Button>
            </div>
          </MagneticCard>
        ))}
      </div>

      <Modals
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        data={selectedWork}
      />
    </div>
  );
};

export default Works;
