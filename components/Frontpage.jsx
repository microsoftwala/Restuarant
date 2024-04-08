"use client"
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card1 } from "./Card1";

const Frontpage = ({ buy,menuitems}) => {
  const router = useRouter();
  const [showIndex, setShowIndex] = useState(null);

  // console.log(menuitems,"fornt")


  const food_item = ["Dal", "Gravy", "Bread","Sweet"];

  return (
    <div className="w-full p-2">
      <div className="flex justify-center p-6 rounded-xl bg-gradient-to-r from-slate-200 to-red-200 text-black md:text-8xl text-6xl font-dance shadow-xl">
        Menu Items
      </div>
      <br></br>
      <div className="p-6 rounded-xl">
        {food_item.map((item1, index1) => (
          <div key={index1} style={{ position: "relative" }}>
            <div className="light mr-1">
              <div className="lineh6 w-full"></div>
            </div>
            <div className="flex justify-center mb-2">
              <p className="md:text-6xl text-4xl font-dance flex justify-center items-center text-zinc-100 pl-2 w-full bg-gradient-to-r from-red-400 to-red-600 rounded-xl pt-2 pb-2 mb-2 shadow-xl">
                – {item1} –
              </p>
            </div>
            <div className="light">
              <div className="lineh1 w-full"></div>
              <div className="lineh1 w-full"></div>
            </div>
            <div className="bg-gradient-to-r from-slate-100 to-slate-200 pl-6 pr-6 pt-2 pb-2 rounded-md shadow-xl mb-8">
              {menuitems.map((item, index2) =>
                item.category === item1 ? (
                  <div key={index2} className="py-2 w-full px-2 mt-2 mb-3">
                    <Card1
                      itemname={item.itemname}
                      itemprice={item.itemprice}
                      url = {item.imageurl}
                      buy={buy}
                    />
                  </div>
                ) : null
              )}
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontpage;
