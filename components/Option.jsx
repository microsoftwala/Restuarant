import React, { useState } from "react";
// import "../../styles/cart.css";

const Option = ({ food_item, scrollToSection }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col justify-center text-4xl font-bold text-black bg-gradient-to-r from-slate-200 to-slate-100 p-10 rounded-2xl w-screen">
      {food_item.map((item, index) => (
        <button
          key={index}
          className="p-4 font-dance hover:text-gray-500 font-bold"
          onClick={() => {
            scrollToSection(index);
            handleToggle();
          }}
        >
          {item}
          {!toggle ? (
            <div className="light">
              <div className="lineh1"></div>
            </div>
          ) : (
            <div className="light">
              <div className="lineh6"></div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Option;
