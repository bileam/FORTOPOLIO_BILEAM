import { X, Code, ExternalLink } from "lucide-react";

const ProjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[90%] max-w-3xl rounded-3xl bg-gradient-to-br from-purple-400/40 via-indigo-400/30 to-pink-400/40 p-6 shadow-2xl backdrop-blur-xl border border-white/30 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          <X className="text-white" />
        </button>

        {/* Image */}
        <div className="relative mx-auto mb-6 overflow-hidden rounded-2xl bg-white/20 p-4">
          <img
            src="/project-aura.png" // ganti dengan gambar kamu
            alt="Project Preview"
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-2">
            Aura & Co – E-Commerce Website
          </h2>

          <p className="text-sm text-white/80 max-w-xl mx-auto mb-6">
            Desain website e-commerce untuk brand tas online, mencakup halaman
            produk, detail, checkout, dan riwayat pesanan. Dibangun dengan UI
            modern dan responsif.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold shadow-lg hover:scale-105 transition"
            >
              <ExternalLink size={18} />
              View
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold shadow-lg hover:scale-105 transition"
            >
              <Code size={18} />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
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
            animation: scaleIn 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectModal;
