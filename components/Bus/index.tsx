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
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { handleClick } from "@/lib/bus";
import { useUserContext } from "@/contexts/user-context";

type IBusProps = {
  searchParams: any;
};

const Bus = (props: IBusProps) => {
  const {currentUser} =  useUserContext()
  const { searchParams } = props;
  

  const [selectedSeat, setSelectedSeat] = useState<number | boolean>();
  const [customerSeats, setCustomerSeats] = useState<any[]>([]);

  let isSeatSelected;
  let greenSeat;
  let gender = currentUser.gender

  return (
    <div className="flex  ">
      <div
        className="flex w-8/12 flex-col justify-between  max-w-[700px] h-[380px] mx-auto p-5 ps-20 rounded-l-3xl"
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
                  key={item.id}
                  onClick={(e) =>
                    handleClick(
                      e,
                      item,
                      customerSeats,
                      setCustomerSeats,
                      setSelectedSeat,
                      seatInfos
                    )
                  }
                  className={`relative my-3 ${
                    item.id % 2 == 0 ? "pt-5 border-t-2" : ""
                  }`}
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
      <div className="w-4/12 flex flex-col justify-between border-l-2 ms-10 ps-5">
        <div className="flex flex-col items-start">
          <h5>
            {customerSeats.length >= 1
              ? "Seçtiğiniz koltuklar"
              : "Lütfen koltuk seçiniz"}
          </h5>
          <div className="mt-3 flex gap-3 f">
            {customerSeats.map((item) => {
              let imgSrc = item.gender === "male" ? seatBlue.src : seatPing.src;
              return (
                <div
                  key={item.id}
                  onClick={(e) =>
                    handleClick(
                      e,
                      item,
                      customerSeats,
                      setCustomerSeats,
                      setSelectedSeat,
                      seatInfos
                    )
                  }
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
                </div>
              );
            })}
          </div>
          {customerSeats.length >= 1 && (
            <div className="flex flex-col items-start mt-5">
              <p className="text-base">Toplam fiyat:</p>
              <p className="font-bold text-2xl text-gray-500">
                {customerSeats.length * searchParams.price} Tl
              </p>
            </div>
          )}
        </div>

        <Link
          href={{
            pathname: "/payment",
            query: { price: searchParams.price * customerSeats.length },
          }}
        >
          <button
            className={`button mb-5 ${
              customerSeats.length == 0 && "cursor-not-allowed opacity-50"
            }`}
          >
            Onayla ve Devam Et
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bus;
