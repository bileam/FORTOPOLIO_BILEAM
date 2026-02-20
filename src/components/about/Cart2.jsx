const Cart2 = ({ children, logo }) => {
  return (
    <div className="flex gap-2 items-center px-3 py-2 bg-white rounded text-[#6d6767]">
      <img src={logo} alt="" className="w-7 object-cover" />
      <h1 className="text-[0.9rem]">{children}</h1>
    </div>
  );
};

export default Cart2;
