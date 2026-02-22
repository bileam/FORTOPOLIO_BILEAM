import { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { skillME } from "../datas/skill";

const Skill = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(skillME.map(() => 0));

  /* === OBSERVER === */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* === ANIMATION === */
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
    }, 18);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="
        bg-white/15 backdrop-blur-xl
        border border-white/30
        rounded-2xl sm:rounded-3xl
        p-4 sm:p-6 lg:p-8
      "
    >
      <Title>Skill</Title>

      <p className="mb-6 text-sm sm:text-base text-[#2f2b55]">
        Here are the technologies I work with
      </p>

      {/* GRID */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4 sm:gap-6
        "
      >
        {skillME.map((item, index) => (
          <div
            key={item.id}
            className="
              bg-white/20 backdrop-blur-xl   animate-fadeUp
              border border-white/30
              rounded-xl sm:rounded-2xl
              p-4 sm:p-5
              transition
              hover:scale-[1.03]
              hover:shadow-xl
              flex items-center gap-4
            "
          >
            {/* ICON */}
            <div className="shrink-0">
              <img
                src={item.logo}
                alt={item.name}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  {item.name}
                </h3>
                <span className="text-xs sm:text-sm font-medium">
                  {progress[index]}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="relative w-full h-2 sm:h-2.5 bg-white/30 rounded-full overflow-hidden">
                <span
                  className={`
                    absolute left-0 top-0 h-full rounded-full
                    transition-all duration-300
                    ${
                      progress[index] < 70
                        ? "bg-white"
                        : "bg-linear-to-r from-[#a5e3fc] to-red-500"
                    }
                  `}
                  style={{ width: `${progress[index]}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
