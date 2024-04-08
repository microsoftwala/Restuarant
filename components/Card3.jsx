"use client";
import React from "react";
import "../styles/cart.css";

const Card3 = ({
  itemname,
  price,
  quantity,
  Counterplus,
  Counterminus,
  index2,
  count,
  url,
}) => {
  return (
    <div className="w-full bg-white rounded-lg  m-4 shadow-xl shadow-slate-400 px-4 py-2">
      <div className="md:flex w-full">
        <div className="flex w-full">
          <div className="items-center flex md:w-1/5 w-full md:justify-start justify-start">
            <img
              src={url}
              className="shadow-2xl rounded-tr-3xl rounded-bl-3xl pt-3 md:pt-0 h-28 border border-zinc-900 border-l-8 border-t-4 w-36"
              alt="avatar"
            ></img>
          </div>
          <div className="md:w-3/5 w-full md:pl-8">
            <p className="text-1xl p-1 md:p-0 flex md:justify-start justify-end">
              <span className="text-yellow-600">★★★</span>★★
            </p>
            <p className="font-serif text-2xl font-bold md:p-1 p-2 flex md:justify-start justify-end">
              {itemname}
            </p>
            <p className="font-dance text-1xl font-bold text-yellow-600 md:p-1 p-2 flex md:justify-start justify-end">
              Each:₹{price}
            </p>
          </div>
        </div>
        <div className="flex md:flex-col md:justify-center justify-between md:w-1/5 w-full">
          <div className="flex md:ml-0 ml-5 mt-2">
            <div className="bg-red-200 flex p-1 rounded-xl">
              {count[index2] || 0 ? (
                <button
                  className="px-1 hover:bg-red-400 hover:text-red-800 font-bold rounded-md w-8 md:mx-1 text-2xl"
                  onClick={() => Counterminus(index2)}
                >
                  {" "}
                  -{" "}
                </button>
              ) : null}
              <p className="px-2 text-2xl flex items-center text-red-600">
                {" "}
                {count[index2] || 0}{" "}
              </p>
              <button
                className="px-1 hover:bg-red-400 rounded-md w-8 hover:text-red-600 font-bold md:mx-1 text-2xl"
                onClick={() => Counterplus(index2)}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div className="text-1xl text-yellow-600 p-2 flex justify-center">
            Total:₹{quantity * price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
