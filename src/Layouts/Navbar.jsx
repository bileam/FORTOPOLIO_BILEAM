import { useEffect, useState } from "react";

const menus = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Works", id: "works" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Navbar blur + scroll spy (AMAN)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">
      <div
        className={`
          transition-all duration-300 mt-5 w-[90%] rounded-3xl
          ${scrolled ? "backdrop-blur-xl bg-black/30  " : " bg-black/30"}
        `}
      >
        <div className="max-w-7xl mx-auto  px-2 md:px-0 py-2 flex justify-between items-center w-[90%] ">
          <h1 className="text-xl font-bold text-white">Bileam</h1>
          <ul className="hidden md:flex gap-8 text-sm">
            {menus.map((menu) => (
              <li
                key={menu.id}
                onClick={() => scrollTo(menu.id)}
                className={`
                  cursor-pointer relative transition group  
                  ${
                    active === menu.id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {menu.name}
                {active === menu.id && (
                  <span className="absolute -bottom-2 bg-linear-to-r from-[#444dfa] to-[#d339da] left-0 w-full h-0.5  rounded-full" />
                )}
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <div className="lg:block hidden">
            <button
              className="flex  items-center gap-2 cursor-pointer
                px-6 py-2 rounded-xl
               bg-linear-to-r from-[#444dfa] to-[#d339da]
                font-semibold shadow-lg
                hover:scale-105 transition"
            >
              Contect
            </button>
          </div>
        </div>
        {/* = */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="px-6 pb-6 flex flex-col gap-4 text-white/90">
            {menus.map((menu) => (
              <li
                key={menu.id}
                onClick={() => scrollTo(menu.id)}
                className={`
                  pb-2 border-b border-white/20
                  ${active === menu.id ? "font-semibold text-white" : ""}
                `}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
