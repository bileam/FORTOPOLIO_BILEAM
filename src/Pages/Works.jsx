import Title from "../components/Title";
import Button from "../components/Button";
import { worksme } from "../datas/Works";
import { useState } from "react";
import Modals from "../components/works/Modal";

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section
      className="
        bg-white/15 backdrop-blur-xl border border-white/30
        rounded-2xl sm:rounded-3xl
        p-4 sm:p-6 lg:p-8
      "
    >
      <Title>WORKS</Title>

      <p className="mb-4 text-sm sm:text-base text-[#2f2b55]">
        Some of my recent project
      </p>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 sm:gap-6 lg:gap-8
        "
      >
        {worksme.map((item) => (
          <div
            key={item.id}
            className="
              bg-white/15 backdrop-blur-xl border border-white/30
              rounded-2xl
              p-4 sm:p-5 lg:p-6
              transition
              hover:scale-[1.03]
              hover:shadow-xl
            "
          >
            {/* IMAGE */}
            <img
              src={item.foto}
              alt={item.name}
              className="
                w-full
                h-40 sm:h-44 lg:h-48
                object-cover
                rounded-xl
                bg-black/20
                mb-4
              "
            />

            {/* TITLE */}
            <h4 className="font-extrabold text-lg sm:text-xl text-blue-700 mb-1">
              {item.name}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-[0.95rem] text-[#2f2b55] opacity-80 line-clamp-2">
              {item.deskription}
            </p>

            {/* BUTTON */}
            <div className="mt-4 flex justify-end">
              <Button
                onClick={() => setSelectedWork(item)}
                className="
                  text-xs sm:text-sm
                  px-4 py-2
                  cursor-pointer
                  active:scale-95
                  bg-linear-to-r from-[#444dfa] to-[#d339da]/40
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                VIEW
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Modals
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        data={selectedWork}
      />
    </section>
  );
};

export default Works;
