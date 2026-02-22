import useMagnetic from "../hooks/useMagnetic";

const MagneticCard = ({ children, className }) => {
  const magnetic = useMagnetic(20);

  return (
    <div
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className={`relative magnetic ${className}`}
    >
      <div className="magnetic-glow rounded-3xl" />
      <div className="magnetic-inner">{children}</div>
    </div>
  );
};

export default MagneticCard;
