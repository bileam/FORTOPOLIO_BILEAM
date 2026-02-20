const GlowBlue = ({ className = " " }) => {
  return (
    <div
      className={` ${className} absolute  w-150 h-150 
        bg-blue-400/30 rounded-full blur-[140px]`}
    />
  );
};

export default GlowBlue;
