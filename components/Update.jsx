'use client'
import { useSearchParams } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Menu from "@components/Menu";
import Loading from "@components/Loading";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import Nav from '@components/Nav';

const Update = ({menuitems}) => {

  
    const { data: session } = useSession();
   
    const [formvisible, setFormVisible] = useState(false);
  
    
  
    const ItemAdd = () => {
      setFormVisible(!formvisible);
    };
  
    const [submitting, setSubmtting] = useState(false);
    const [item, setItem] = useState({
      itemname: "",
      itemprice: "",
      available: true,
      category: "",
      imageurl: "",
    });
  
    const router = useRouter();
  
    const createItem = async (e) => {
      setSubmtting(true);
  
      try {
        const response = await fetch("api/item/new", {
          method: "POST",
          body: JSON.stringify({
            itemname: item.itemname,
            userId: session?.user.id,
            itemprice: item.itemprice,
            available: item.available,
            category: item.category,
            imageurl: item.imageurl,
          }),
        });
  
        if (response.ok) {
          setItem({
            itemname: "",
            itemprice: "",
            available: true,
            category: "",
            imageurl: "",
          });
          router.push("/update-menu");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmtting(false);
      }
    };

   
  return (
    <>

    <Nav type="rest"/>
      {session?.user.name ? (
        <>
          <div
            onClick={ItemAdd}
            className="flex flex-row cursor-pointer text-lg sm:text-xl w-full justify-end"
          >
            <button className="bg-black text-white font-anta w-25 p-2 rounded-lg">
              Add Item
              <br />
              {!formvisible ? (
                <AddBoxIcon style={{ fontSize: "40px" }} />
              ) : (
                <CancelPresentationIcon style={{ fontSize: "40px" }} />
              )}
            </button>
          </div>
          {formvisible && (
            <Paper elevation={24} className="w-5/6 p-3">
              <div className="flex flex-col w-full justify-center">
                <p className="flex w-full justify-center font-dance text-3xl sm:text-4xl">
                  Create Item
                </p>
                <motion.div
                  className="w-full h-1 mt-3 mb-3 bg-black"
                  animate={{
                    scaleX: [0, 1, 1, 0], // Scale animation from 0 to 1 and back to 0
                    transition: { duration: 6, repeat: Infinity }, // Repeat the animation infinitely
                  }}
                />
                <form onSubmit={createItem}>
                  <div className="flex flex-col md:flex-row font-space text-xl">
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-2 md:p-4">
                      <div className="w-11/12 m-1 p-3 flex justify-center">
                        <label>
                          <span>Item Name :</span>
                          <input
                            value={item.itemname}
                            placeholder="Name"
                            required
                            className="w-56 rounded-lg h-10"
                            onChange={(e) =>
                              setItem({
                                ...item,
                                itemname: e.target.value,
                              })
                            }
                          ></input>
                        </label>
                      </div>

                      <div className="w-11/12 m-1 p-3 flex justify-center">
                        <label for="cars">
                          <span>Category :</span>
                          <select
                            id="cars"
                            name="cars"
                            className="w-56"
                            onChange={(e) =>
                              setItem({
                                ...item,
                                category: e.target.value,
                              })
                            }
                            value={item.category}
                          >
                            <option value="">None</option>
                            <option value="Bread">Bread</option>
                            <option value="Dal">Dal</option>
                            <option value="Gravy">Gravy</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Sweet">Sweet</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-2 md:p-4">
                      <div className="w-11/12 m-1 p-3 flex justify-center">
                        <label>
                          <span>Item Price :</span>
                          <input
                            value={item.itemprice}
                            placeholder="Price"
                            required
                            className="w-56 rounded-lg h-10"
                            onChange={(e) =>
                              setItem({
                                ...item,
                                itemprice: e.target.value,
                              })
                            }
                          ></input>
                        </label>
                      </div>

                      <div className="w-11/12 m-1 p-3 flex justify-center">
                        <label>
                          <span>Image Url :</span>
                          <input
                            value={item.imageurl}
                            placeholder="Url"
                            required
                            className="w-56 rounded-lg h-10"
                            onChange={(e) =>
                              setItem({
                                ...item,
                                imageurl: e.target.value,
                              })
                            }
                          ></input>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-center mx-3 mb-5 gap-4">
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-1.5 text-xl bg-blue-500 rounded-xl w-24 text-white shadow-2xl"
                      whileHover={{
                        borderRadius: "100px",
                        transition: { duration: 1.5 },
                      }}
                    >
                      Add
                    </motion.button>
                  </div>
                </form>
              </div>
            </Paper>
          )}
          <Menu confirms={false} type="update" menuitems={menuitems}/>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Update