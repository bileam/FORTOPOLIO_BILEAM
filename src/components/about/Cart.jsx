const Cart = ({ children, Number, logo }) => {
  return (
    <div className="bg-white py-1 space-x-3 px-5 flex shadow rounded-md hover:scale-105  transition duration-150">
      <img src={logo} alt="" className="w-10 object-cover" />
      <div className="flex flex-col text-[#6d6767]">
        <h1 className="text-[1.3rem]  font-bold text-blue-600">
          {Number} <span className="font-extrabold">+</span>
        </h1>
        <p className="text-[0.9rem]">{children}</p>
      </div>
    </div>
  );
};

export default Cart;
