import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <h1 className="text-xl font-bold text-white">Bileam</h1>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-8 text-sm text-white/80">
            {["Home", "About", "Skills", "Works", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTON MOBILE */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden px-6 pb-6">
            <ul className="flex flex-col gap-4 text-white/90">
              {["Home", "About", "Skills", "Works", "Contact"].map((item) => (
                <li
                  key={item}
                  className="border-b border-white/20 pb-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
