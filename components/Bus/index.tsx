"use client";
import React, { useEffect, useState } from "react";
import seatBlue from "@/assets/images/bus-seat-blue.svg";
import seatGreen from "@/assets/images/bus-seat-green.svg";
import seatPing from "@/assets/images/bus-seat-ping.svg";
import seatWhite from "@/assets/images/bus-seat-white.svg";
import SvgComponent from "./SvgComponent";
import { seatInfos } from "./dummyData";
import Image from "next/image";
import male from "./male.svg";
import female from "./female.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bus = () => {
  const error = (message: string) => toast.error(message);
  const warning = (message: string) => toast.warning(message);
  const success = (message: string) => toast.success(message);

  const [selectedSeat, setSelectedSeat] = useState<number | boolean>();
  const [customerSeats, setCustomerSeats] = useState<any[]>([]);

  let isSeatSelected;
  let greenSeat;

  const handleClick = (e: any, item: any) => {
    // If the user clicks on the seat of his choice delete it from customerSeats
    if (customerSeats.some((seat) => seat.id === item.id)) {
      const newC = customerSeats.filter((seat) => seat.id !== item.id);
      setCustomerSeats([...newC]);
      setSelectedSeat(false)
      return
    }

    if (item.isEmpty) {
      if (customerSeats.length >= 5) {
        warning("En fazla 5 koltuk seçebilirsiniz!");
        return;
      }
      // open popper
      setSelectedSeat(item.id);

      // if user clicks to gender icons set ticket to customerSeats
      if (e.target.className.includes("male")) {
        const gender = e.target.className;
        setCustomerSeats([
          ...customerSeats,
          { id: item.id, gender: gender, isEmpty: false },
        ]);
        // close popper
        setSelectedSeat(false);
      }
    } else {
      error("Bu koltuk zaten alınmış");
    }
  };

  console.log(customerSeats, "cuss");

  return (
    <div className="">
      <div
        className="flex flex-col justify-between  max-w-[700px] h-[350px] mx-auto p-5 ps-20 rounded-l-3xl"
        style={{ backgroundColor: "#F3F6F9" }}
      >
        <div className="flex flex-wrap h-full flex-col-reverse gap-3 ">
          {seatInfos.map((item, index) => {
            isSeatSelected = selectedSeat === item.id;
            greenSeat = customerSeats.some((seat) => seat.id == item.id);

            let imgSrc = greenSeat
              ? seatGreen.src
              : item.isEmpty
              ? seatWhite.src
              : item.gender === "male"
              ? seatBlue.src
              : seatPing.src;
            return (
              <>
                <div
                  onClick={(e) => handleClick(e, item)}
                  className="relative my-3"
                >
                  <Image
                    className="mb-2 relative cursor-pointer"
                    width={33}
                    height={33}
                    src={imgSrc}
                    alt="seat"
                  />
                  <p
                    className="absolute l-5 font-normal text-base text-gray-500 cursor-pointer"
                    style={{ bottom: "13px", left: "8px" }}
                  >
                    {item.id}
                  </p>

                  {isSeatSelected && (
                    <div
                      style={{ top: "-130px", zIndex: "1", left: "-50px" }}
                      className="absolute bg-white p-5 flex gap-3 shadow-xl rounded-lg cursor-pointer"
                    >
                      <div className="pe-3">
                        <Image
                          className="male"
                          src={male.src}
                          width={40}
                          height={40}
                          alt="male"
                        />
                        <p>Erkek</p>
                      </div>
                      <div>
                        <Image
                          className="female"
                          src={female.src}
                          width={40}
                          height={40}
                          alt="female"
                        />
                        <p className="mt-1">Kadın</p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bus;
