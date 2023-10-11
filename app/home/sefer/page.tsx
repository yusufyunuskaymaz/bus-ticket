"use client";
import React from "react";
import { ISeferler } from "../page";
import seat from "@/assets/images/seat.png";
import Bus from "@/components/Bus";

export type ISeferProps = {
  searchParams: ISeferler;
  params:object;
};

const Sefer = (props: ISeferProps) => {
  const { searchParams } = props;

  return (
    <div className="text-center mt-10 max-w-[1100px] mx-auto">
      <div className="border flex-between p-5 py-10 bg-white rounded-lg shadow my-10 hover:shadow-lg cursor-pointer transition-shadow">
        <img width={100} height={50} src={searchParams.firmaResmi} />
        <div className="flex flex-col">
          <p className="font-normal text-xl">{searchParams.kalkisSaat}</p>
          <p className="font-normal text-sm text-gray-400">{searchParams.sure}</p>
        </div>
        <div className="flex flex-col text-center">
          <div className="flex-center mb-3">
            <img src={seat.src} alt="" width={25} height={25} className="" />
            <p className="ps-1">2+1</p>
          </div>
          <p>
            {searchParams.kalkisOtogari} {">"} {searchParams.varisOtogari}
          </p>
        </div>
        <p className="text-xl font-bold">{searchParams.fiyat} ₺</p>
        {/* <button className="w-auto">Bileti Al {"->"}</button> */}
      </div>
      <Bus />
    </div>
  );
};

export default Sefer;