const Button = ({ children, type, onClick, className = " " }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} py-2 px-4  rounded-md`}
    >
      {children}
    </button>
  );
};
export default Button;
