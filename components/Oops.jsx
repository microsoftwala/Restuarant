import React from "react";
import "../styles/oops.css";

const Oops = ({ goBack }) => {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="No Food"
        />
        <span>No Food Selected</span>
        <p className="font-dance text-2xl">
          First you should select some food.
        </p>
        <button onClick={() => goBack()} class="back">
          Go back ←
        </button>
      </div>
    </div>
  );
};

export default Oops;
