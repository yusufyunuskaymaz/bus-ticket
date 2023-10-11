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

const Bus = () => {
  const [selectedSeat, setSelectedSeat] = useState(0);
  const [imgState, setImgState] = useState(seatBlue)

  let isSeatSelected;

  const handleClick = (index: number) => {
    setSelectedSeat(index);
  };

  const handleGender = (id:number,gender:string)=>{
    console.log(id,gender);


  }

  return (
    <div className="">
      <div
        className="flex flex-col justify-between  max-w-[700px] h-[350px] mx-auto p-5 ps-20 rounded-l-3xl"
        style={{ backgroundColor: "#F3F6F9" }}
      >
        <div className="flex flex-wrap h-full flex-col-reverse gap-3 ">
          {seatInfos.map((item, index) => {
            // handleGender(item.id,item.gender)
            isSeatSelected = selectedSeat === index;

            return (
              <>
                <div
                  onClick={() => handleClick(index)}
                  className="relative my-3"
                >
                  <Image
                    className="mb-2 relative"
                    width={33}
                    height={33}
                    src={
                      item.isEmpty
                        ? seatWhite.src
                        : item.gender === "male"
                        ? seatBlue.src
                        : seatPing.src
                    }
                    alt="seat"
                  />
                  <p
                    className="absolute l-5 font-normal text-base text-gray-500"
                    style={{ bottom: "13px", left: "8px" }}
                  >
                    {item.id}
                  </p>

                  {isSeatSelected && (
                    <div
                      style={{ top: "-130px", zIndex: "1", left: "-50px" }}
                      className="absolute bg-white p-5 flex gap-3 shadow-xl rounded-lg"
                    >
                      <div className="pe-3">
                        <Image
                          src={male.src}
                          width={40}
                          height={40}
                          alt="male"
                          onClick={()=>handleGender(item.id,"male")}
                        />
                        <p>Erkek</p>
                      </div>
                      <div>
                        <Image
                          src={female.src}
                          width={40}
                          height={40}
                          alt="female"
                          onClick={()=>handleGender(item.id,"female")}

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
        {/* <div className="flex flex-wrap gap-3 items-end">
          {bottomSeats.map((item, index) => {
            return (
              <div key={index + 1} className="relative">
                <img
                  className="mb-2 relative"
                  width={33}
                  height={33}
                  src={
                    item.isEmpty
                      ? seatWhite.src
                      : item.gender === "male"
                      ? seatBlue.src
                      : seatPing.src
                  }
                  alt="seat"
                />
                <p
                  className="absolute l-5 font-normal text-base text-gray-500"
                  style={{ bottom: "13px", left: "5px", right: "15px" }}
                >
                  {item.id}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Bus;
