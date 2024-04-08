import React from "react";

const Form = ({ Setinfo, setInfo, info }) => {
  return (
    <form onSubmit={Setinfo}>
      <div className="w-full flex flex-col items-center justify-center mb-10 h-4/5 p-4">
        <div className="text-center font-serif md:text-6xl font-bold mb-10 text-4xl">
          Welcome to Restaurant
        </div>
        <div
          className="flex flex-col bg-gradient-to-r from-black to-slate-700 p-10 rounded-xl font-dance font-bold"
          style={{
            border: "1px solid black",
            boxShadow: "4px 4px 4px 6px rgba(0,0,0,0.3)",
          }}
        >
          <p
            className="text-white rounded-lg"
            style={{
              fontSize: "20px",
              boxShadow: "0 0 6px 6px rgba(100,100,100,0.3)",
              padding: "4px",
            }}
          >
            !!!😊Please Give Your Basic Information😊!!!
          </p>
          <label
            className="text-center mt-4 text-zinc-100"
            style={{ fontSize: "25px" }}
          >
            Email
          </label>
          <input
            type="email"
            className="bg-zinc-100 pt-2 pb-2 pl-4 pr-4 border border-e-red-300 rounded-lg"
            placeholder="Email"
            required
            onChange={(e) =>
              setInfo({
                ...info,
                customerId: e.target.value,
              })
            }
          />
          <label
            className="text-center mt-8 text-zinc-100"
            style={{ fontSize: "25px" }}
          >
            Your Name
          </label>
          <input
            type="text"
            className="bg-zinc-100 pt-2 pb-2 pl-4 pr-4 border border-e-red-300 rounded-lg"
            placeholder="Name"
            required
            onChange={(e) =>
              setInfo({
                ...info,
                name: e.target.value,
              })
            }
          />
          <div className="flex justify-center">
            <button type="submit" className="button3 mt-8  rounded-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
