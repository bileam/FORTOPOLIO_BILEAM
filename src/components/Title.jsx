const Title = ({ children }) => {
  return (
    <div className="mb-3">
      <h3 className="text-[1.5rem] font-bold text-blue-700">{children}</h3>
      <span className="inline-block border w-full border-[#aca5a5]"></span>
    </div>
  );
};

export default Title;
