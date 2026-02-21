import { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { skillME } from "../datas/skill";

const Skill = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(skillME.map(() => 0));

  // DETECT SAAT MASUK VIEWPORT
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // jalan sekali
        }
      },
      { threshold: 0.3 } // 30% terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ANIMASI PROGRESS
  useEffect(() => {
    if (!hasStarted) return;

    let current = skillME.map(() => 0);

    const interval = setInterval(() => {
      let done = true;

      current = current.map((value, index) => {
        if (value < skillME[index].persen) {
          done = false;
          return value + 1;
        }
        return value;
      });

      setProgress([...current]);

      if (done) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <div
      ref={sectionRef}
      className="bg-white/15 backdrop-blur-xl relative
      border border-white/30
      rounded-3xl p-5"
    >
      <Title>Skill</Title>
      <p className="mb-2 text-[#2f2b55]">
        Here are the technologogies i work with
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillME.map((items, index) => (
          <div
            key={items.id}
            className="bg-linear-to-r from-[#444dfa] shadow-2xl to-purple-400 backdrop-blur-xl
            border border-white/30
            rounded-2xl p-6 
            hover:scale-105 transition flex items-center gap-2"
          >
            <img src={items.logo} alt="" className="w-10 h-10 object-cover" />

            <div className="flex flex-col w-full">
              <div className="flex justify-between w-full">
                <h1>{items.name}</h1>
                <h1>{progress[index]} %</h1>
              </div>

              <div className="relative w-full h-2 border rounded-md overflow-hidden">
                <span
                  className={`absolute left-0 bottom-0 h-full ${
                    progress[index] < 70
                      ? "bg-white"
                      : "bg-linear-to-r from-[#a5e3fc] to-red-600"
                  } rounded-full transition-all duration-300`}
                  style={{ width: `${progress[index]}%` }}
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
