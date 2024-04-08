"use client"
import React from "react";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

export const Card1 = ({ itemprice, itemname, url, buy }) => {
  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-xl shadow-slate-400">
      <div className="lg:flex w-full">
        <div className="md:flex w-full">
          <motion.div
            className="md:items-center flex md:w-2/5 w-full justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.9 } }}
          >
            <img
              src={url}
              className="shadow-xl w-48 md:w-40 h-40 md:h-32  rounded-3xl border border-zinc-900 border-b-8"
              alt="avatar"
            ></img>
          </motion.div>
          <div className="w-full">
            <p className="text-2xl p-2 flex md:justify-end justify-center lg:justify-start">
              <span className="text-yellow-600">★★★</span>★★
            </p>
            <p className="font-dance text-4xl font-bold p-2 flex md:justify-end justify-center lg:justify-start">
              {itemname}
            </p>
            <p className="font-dance text-4xl font-bold text-black p-2 flex md:justify-end justify-center lg:justify-start">
              ₹{itemprice}
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/5 w-full">
          <button onClick={buy} className="btn first">
            — Try ones —
          </button>
        </div>
      </div>
    </div>
  );
};
