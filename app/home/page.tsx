"use client";
import React, { useContext, useEffect, useState } from "react";
import bgImg from "../../assets/images/bus-bg.jpg";
import styles from "./style.module.css";
import { AutoComplete } from "@/components/AutoComplete";
import DatePicker from "@/components/DatePicker";
import seat from "@/assets/images/seat.png";
import Link from "next/link";
import { UserContext, useUserContext } from "@/contexts/user-context";
import { toastWarnNotify } from "@/helpers/Toastify";
import { ISeferler, IValues } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getData, handleSubmit } from "@/lib/homePage";
import { Navbar } from "@/components";

export const Home = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
 let lStorageUser = JSON.parse(localStorage.getItem("currentUser") || "");

  useEffect(() => {
    lStorageUser?.mail ? router.push("/home") : router.push("/login");
  }, []);

  const date = new Date().toISOString().slice(0, 10);
  const initialState = {
    fromWhere: "",
    toWhere: "",
    date: date,
  };

  const [data, setData] = useState<IValues>(initialState);
  const [seferler, setSeferler] = useState<ISeferler[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  // starting fetch

  useEffect(() => {
    if (isDataFetched) {
      getData(data, setSeferler);
      setIsDataFetched(false);
    }
  }, [isDataFetched]);
  console.log(currentUser,"ccc");

  return (
    <>
      {lStorageUser.mail && <Navbar />}
      <div
        className={`${styles.hero} text-white font-bold text-3xl border-white`}
      >
        <div className={`${styles.cardWrapper} p-3 `}>
          <div className="pb-3">
            <h6 className="text-white text-2xl font-bold pb-3">
              Ucuz Otobüs Bileti Bulun
            </h6>
            <h6 className="text-white text-lg font-normal">
              Fiyatları karşılaştırın ve online otobüs bileti rezervasyonu yapın
            </h6>
          </div>
          <div className={`${styles.ticketCard} w-full sm:w-1/2 p-5 sm:p-10`}>
            <p className="text-black text-xl pb-3">Otobüs Bileti</p>
            <div className="space-y-6">
              <div className="flex-center gap-3">
                <div className="flex-1">
                  <label htmlFor="nereden">Nereden</label>

                  <AutoComplete
                    data={data}
                    setData={setData}
                    direction="nereden"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="nereden">Nereye</label>
                  <AutoComplete data={data} setData={setData} />
                </div>
              </div>
              <div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    {/* <input value="Ankara" className="p-2" type="date" id="date" /> */}
                    <DatePicker data={data} setData={setData} />
                  </div>
                  <div className="flex-1 gap-3 flex items-end flex-wrap">
                    <button
                      onClick={() => setData({ ...data, date: date })}
                      className="flex-1 bg-gray-600 px-0 text-white border button"
                    >
                      Bugün
                    </button>
                    <button
                      onClick={() =>
                        setData({
                          ...data,
                          date: new Date(Date.now() + 86400000)
                            .toISOString()
                            .slice(0, 10),
                        })
                      }
                      className="flex-1 button bg-transparent px-0 text-black border "
                    >
                      Yarın
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="button w-full"
                onClick={() => handleSubmit(data, setIsDataFetched)}
              >
                Otobüs Bileti Bul
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <h3 className="font-bold text-3xl text-center mt-10 mb-10">
          Uygun Seferler
        </h3>
        {seferler &&
          seferler?.map((item, index) => {
            return (
              <Link
                key={index + 1}
                href={{ pathname: "/home/sefer", query: { ...item } }}
              >
                <div className="border flex-between p-1 sm:p-5 py-10 bg-white rounded-lg shadow my-10 hover:shadow-lg cursor-pointer transition-shadow">
                  <Image
                    width={100}
                    height={50}
                    src={item.companyImage}
                    alt="logo"
                    className="w-[50px] sm:w-[100px]"
                  />
                  <div className="flex flex-col">
                    <p className="font-normal text-xl">{item.departureTime}</p>
                    <p className="font-normal text-sm text-gray-400">
                      {item.totalTime}
                    </p>
                  </div>
                  <div className="flex flex-col text-center">
                    <div className=" hidden sm:flex center mb-3">
                      <Image
                        src={seat.src}
                        width={25}
                        height={25}
                        alt="seat-image"
                      />
                      <p className="ps-1">{item.emptySeats} boş koltuk</p>
                    </div>
                    <p className="hidden sm:flex">
                      {item.fromWhere} Otogarı {">"} {item.toWhere} Otogarı
                    </p>
                  </div>
                  <p className="text-xl font-bold">{item.price} ₺</p>
                  <button className="button">Bileti Al {"->"}</button>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="flex items-center justify-center w-full h-full"></div>
    </>
  );
};

export default Home;

export const fetchData = async (data: IValues) => {
  const res = await fetch(`http://localhost:3000/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
