"use client";
import React, { useContext } from "react";
import { ISeferler } from "@/types";
import seat from "@/assets/images/seat.png";
import Bus from "@/components/Bus";
import { UserContext } from "@/contexts/user-context";
import Image from "next/image";
import { Navbar } from "@/components";

let lStorageUser = JSON.parse(localStorage.getItem("currentUser") || "");


export type ISeferProps = {
  searchParams: ISeferler;
  params: object;
};

const Sefer = (props: ISeferProps) => {
  const { searchParams } = props;

  return (
    <>
          {lStorageUser.mail && <Navbar />}

    <div className="text-center mt-10 w-full sm:max-w-[1100px] mx-auto">
      <h2 className="text-3xl">Koltuk Seçimi</h2>
      <div className="border w-full flex-between p-1 sm:p-5 py-10 bg-white rounded-lg shadow my-10 hover:shadow-lg cursor-pointer transition-shadow">
        <Image
          width={100}
          height={50}
          src={searchParams.companyImage}
          alt="logo"
          className="w-[50px] sm:w-[100px]"
        />
        <div className="flex flex-col">
          <p className="font-normal text-xl">{searchParams.departureTime}</p>
          <p className="font-normal text-sm text-gray-400">
            {searchParams.totalTime}
          </p>
        </div>
        <div className="flex flex-col text-center">
          <div className=" hidden sm:flex center mb-3">
            <Image src={seat.src} width={25} height={25} alt="seat-image" />
            <p className="ps-1">{searchParams.emptySeats} boş koltuk</p>
          </div>
          <p className="hidden sm:flex">
            {searchParams.fromWhere} Otogarı {">"} {searchParams.toWhere}{" "}
            Otogarı
          </p>
        </div>
        <p className="text-xl font-bold">{searchParams.price} ₺</p>
      </div>
      <Bus searchParams={searchParams} />
    </div>
    </>

  );
};

export default Sefer;
