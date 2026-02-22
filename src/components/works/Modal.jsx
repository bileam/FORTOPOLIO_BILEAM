import { createPortal } from "react-dom";
import { X, ExternalLink, Code } from "lucide-react";

const Modals = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return createPortal(
    <div
      className="fixed  inset-0 z-9999 bg-black/50 backdrop-blur-md flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-3xl animate-scaleIn
          bg-white/20 backdrop-blur-xl
          border border-white/30
          shadow-[0_25px_80px_rgba(0,0,0,0.4)]
          overflow-hidden animate-scaleIn"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10
            w-10 h-10 rounded-full bg-black/70
            flex items-center justify-center
            hover:bg-black/90 transition"
        >
          <X className="text-white" size={20} />
        </button>

        <div className="relative">
          <img
            src={data.foto}
            alt={data.name}
            className="w-full h-64 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{data.name}</h2>
          <p className="text-white/80 leading-relaxed mb-6 max-w-2xl">
            {data.deskription}
          </p>
          <div className="flex md:flex-wrap md:text-[1.rem] text-[0.8rem] gap-4">
            <a
              href={data.link}
              target="_blank"
              className="flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-linear-to-r from-indigo-500 to-purple-600
                font-semibold shadow-lg
                hover:scale-105 transition"
            >
              <ExternalLink size={18} />
              View Project
            </a>

            <a
              href={data.github}
              target="_blank"
              className="flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-linear-to-r from-purple-500 to-pink-500
                font-semibold shadow-lg
                hover:scale-105 transition"
            >
              <Code size={18} />
              Source Code
            </a>
          </div>
        </div>

        {/* ANIMATION */}
        {/* <style>
          {`
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-scaleIn {
              animation: scaleIn 0.35s ease-out;
            }
          `}
        </style> */}
      </div>
    </div>,
    document.body
  );
};

export default Modals;
