"use client";
import React, { useState, useEffect } from "react";
import "../../../styles/cart.css";
import Card3 from "../../../components/Card3";
import Oops from "@components/Oops";
import Lottie from "lottie-react";
import animationData from "../../../components/Animation - 1710692268578.json";
import Back from "../../../components/Back.json";
import Cardfav from "@components/Cardfav";

const Page = ({
  confirmOrder,
  setConfirms,
  submitOrder,
  items,
  Counterminus,
  Counterplus,
  count,
  menuitem,
  buy,
}) => {
  const goBack = () => {
    setConfirms(false);
  };
  const [foodid, setFoodid] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const foodIds = [];
    for (let key in count) {
      if (!isNaN(key) && count[key] > 0) {
        foodIds.push(parseInt(key));
      }
    }
    setFoodid(foodIds);
  }, [count]);

  useEffect(() => {
    submitOrder();
  }, [count]);

  useEffect(() => {
    let newTotal = 0;
    menuitem.forEach((item, index) => {
      if (foodid.includes(index)) {
        newTotal += item.itemprice * count[index];
      }
    });
    setTotal(newTotal);
  }, [count, foodid]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full">
      {toggle && <div className="overlay" />}
      {toggle && (
        <div>
          <Lottie
            animationData={animationData}
            className="lottie-animation"
            onClick={() => {
              buy();
            }}
          />
        </div>
      )}
      {!toggle && (
        <div
          className="m-4 bg-gradient-to-l from-gray-400 to-slate-500 rounded-2xl p-6"
          style={{ background: "linear-gradient(to right, #ffffff, #f0f0f0)" }}
        >
          <div className="flex justify-between items-center bg-gradient-to-b from-gray-700 to-gray-400 rounded-lg p-4 md:text-6xl text-4xl font-dance font-bold text-white shadow-2xl mb-6">
            <button onClick={() => goBack()} className="w-12">
              <Lottie animationData={Back} className="lottie-animation" />
            </button>
            <div className="order-summary">Order Summary</div>
            <div></div>
          </div>

          <div>
            {foodid.length !== 0 ? (
              <div>
                {menuitem.map((item, index) => (
                  <div className="flex w-full" key={index}>
                    {foodid.map((key, index1) => {
                      if (key === index && count[index] !== 0) {
                        return (
                          <div className="flex w-full" key={index1}>
                            <Card3
                              itemname={item.itemname}
                              quantity={count[index]}
                              price={item.itemprice}
                              Counterminus={Counterminus}
                              Counterplus={Counterplus}
                              index2={index}
                              count={count}
                              url={item.imageurl}
                            />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Oops goBack={goBack} />
              </div>
            )}
          </div>

          <div className="w-full h-0.5 bg-gray-300 my-6"></div>
          <div className="mt-10 flex justify-center text-3xl text-white  bg-gradient-to-b from-gray-700 to-zinc-400 rounded-lg p-2 md:text-4xl font-dance font-bold  shadow-2xl mb-4">
            Top Rated
          </div>
          <div>
            <div className="root w-full">
              <div className="scrolling-wrapper-flexbox">
                {menuitem &&
                  menuitem.map(
                    (item, index) =>
                      item.popularity >= 200 && (
                        <Cardfav
                          key={index}
                          itemprice={item.itemprice}
                          popularity={item.popularity}
                          url={item.imageurl}
                          itemname={item.itemname}
                        />
                      )
                  )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="bg-zinc-200 mt-6 p-3 w-10/12 md:w-1/2 md:1/2 text-2xl font-mukta rounded-2xl">
              <div className="flex justify-between">
                <p>Total Price</p>
                <p>₹ {total}</p>
              </div>
              <div className="flex justify-between">
              <p>Total Discount</p>
                <p>24%</p>
              </div>
              <div></div>
              <div className="w-full bg-gray-300 h-0.5"></div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>₹ {total}</p>
              </div>
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-4">
            <button
              className="button"
              onClick={() => {
                handleToggle();
                // confirmOrder();
              }}
            >
              Placed Order

            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
