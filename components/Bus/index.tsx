import React from "react";
import seatBlue from "@/assets/images/bus-seat-blue.svg";
import seatGreen from "@/assets/images/bus-seat-green.svg";
import seatPing from "@/assets/images/bus-seat-ping.svg";
import seatWhite from "@/assets/images/bus-seat-white.svg";
import SvgComponent from "./SvgComponent";
import { seatInfos } from "./dummyData";

console.log(seatInfos, "infof");

const Bus = () => {
  const topSeats = seatInfos.slice(20);
  const bottomSeats = seatInfos.slice(0, 20);
  return (
    <div className="">
      <div
        className="flex flex-col justify-between  max-w-[700px] h-[300px] mx-auto p-5 ps-20 rounded-l-3xl"
        style={{ backgroundColor: "#F3F6F9" }}
      >
        <div className="flex flex-wrap gap-3 ">
          {topSeats.map((item, index) => {
            return (
              <>
                {index === 6 ? (
                  <div className="px-3"></div>
                ) : (
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
                )}
              </>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 items-end">
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
        </div>
      </div>
    </div>
  );
};

export default Bus;
