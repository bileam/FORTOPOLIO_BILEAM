const GlowPink = ({ className = " " }) => {
  return (
    <div
      className={` ${className} absolute  w-250 h-150 
        bg-pink-400/50 rounded-full blur-[140px]`}
    />
  );
};

export default GlowPink;
