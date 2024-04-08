"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Form from "@components/Form";
import Menu from "@components/Menu";
import Loading from "@components/Loading";
import Frontpage from "./Frontpage";
import Nav from "@components/Nav";

const CustomerMain = ({ menuitems }) => {
  // console.log(menuitems);
  const [count, setCount] = useState({
    0: 0,
  });
  const [items, setItems] = useState({
    customerId: "",
    name: "",
    itemDetails: [],
    comment: "",
  });
  const [info, setInfo] = useState({
    customerId: "",
    name: "",
  });
  const [check, setCheck] = useState(false);
  const [confirms, setConfirms] = useState(false);
  const Setinfo = (e) => {
    e.preventDefault();
    setItems((prevState) => ({
      ...prevState,
      customerId: info.customerId,
      name: info.name,
    }));
    console.log(info);
    setCheck(true);
  };

  const Counterplus = (index) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) + 1,
    }));
  };

  const Counterminus = (index) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [index]: Math.max((prevCounts[index] || 0) - 1, 0),
    }));
  };
  const [foodcount, setFoodcount] = useState(0);
  const router = useRouter();

  const [newItem, setNewItem] = useState([]);
  const [first, setFirst] = useState(false);

  // const createItem = () => {
  //   const keysCount = Object.keys(count).length;
  //   let updatedItems = [];
  //   for (let counter = 0; counter < keysCount; counter++) {
  //     if (count[counter] >= 0) {
  //       updatedItems.push({
  //         itemName: menuitems[counter].itemname,
  //         quantity: count[counter],
  //         price: menuitems[counter].itemprice,
  //       });
  //     }
  //   }
  //   setNewItem(updatedItems);
  // };

  useEffect(() => {
    let val = 0;
    for (let key in count) {
      if (!isNaN(key)) {
        const j = parseInt(key);
        val += count[j];
      }
    }
    console.log(count);
    console.log(items);
    setFoodcount(val);
  }, [count, items]);

  const submitOrder = () => {
    const keysCount = Object.keys(count).length;
    console.log(count);
    let found = true;
    let newItems = [];
    for (let key in count) {
      if (!isNaN(key)) {
        const j = parseInt(key);
        if (count[j] > 0) {
          newItems.push({
            itemName: menuitems[j].itemname,
            quantity: count[j],
            price: menuitems[j].itemprice,
          });
        }
      }
    }
    setItems((prevState) => ({
      ...prevState,
      itemDetails: "",
    }));
    setItems((prevState) => ({
      ...prevState,
      itemDetails: [...prevState.itemDetails, ...newItems],
    }));
    setConfirms(true);
  };

  const confirmOrder = async (e) => {
    try {
      const response = await fetch("api/order/new", {
        method: "POST",
        body: JSON.stringify({
          customerId: items.customerId,
          name: items.name,
          itemDetails: items.itemDetails,
          comment: "Good",
          finish: true,
        }),
      });
      if (response.ok) {
        setItems(0);
        setFirst(!first);
        setCheck(!check);
        console.log("Order Placed");
      } else {
        console.log("Error: Unexpected response status", response.status);
      }
    } catch (error) {
      console.log("Error occurred during fetch:", error);
    }
    setConfirms(false);
  };

  const buy = () => {
    setFirst(!first);
  };

  return (
    <>
      <Nav type="cus" />
      {!first === false ? (
        <div className="w-full overflow-x-hidden">
          {check === false ? (
            <div className="h-full">
              <Form Setinfo={Setinfo} setInfo={setInfo} info={info} />
            </div>
          ) : (
            <div
              className="w-full mb-10"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              {menuitems.length !== 0 ? (
                <div className="w-full">
                  <Menu
                    Counterminus={Counterminus}
                    Counterplus={Counterplus}
                    submitOrder={submitOrder}
                    confirmOrder={confirmOrder}
                    confirms={confirms}
                    setConfirms={setConfirms}
                    count={count}
                    items={items}
                    foodcount={foodcount}
                    buy={buy}
                    type="cust"
                    menuitems={menuitems}
                  />
                </div>
              ) : (
                <div className="text-white flex justify-center">
                  <Loading />
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <Frontpage buy={buy} menuitems={menuitems} />
      )}
    </>
  );
};

export default CustomerMain;
