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

export type ISeferler = {
  kalkisOtogari: string;
  varisOtogari: string;
  kalkisSehri: string;
  varisSehri: string;
  tarih: string;
  kalkisSaat: string;
  varisSaat: string;
  sure: string;
  bosKoltukSayisi: string;
  fiyat: string;
  firma: string;
  firmaResmi: string;
};

export type IValues = {
  fromWhere: string;
  toWhere: string;
  date: string;
};

export const fetchData = async (data: IValues) => {
  const res = await fetch(`http://localhost:3000/api/users`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const Home = () => {
  const date = new Date().toISOString().slice(0, 10);
  const initialState = {
    fromWhere: "",
    toWhere: "",
    date: date,
  };
  const [data, setData] = useState<IValues>(initialState);
  const [seferler, setSeferler] = useState<ISeferler[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (isDataFetched) {
      const getData = async () => {
        const res = await fetchData(data);
        setSeferler(res.seferler);
      };
      getData();
      setIsDataFetched(false)
    }
  }, [isDataFetched]);

  const handleSubmit = () => {
    if (!data.toWhere || !data.fromWhere || !data.date) {
      toastWarnNotify("Lütfen bütün alanları doldurun...");
      return;
    }
    setIsDataFetched(true);

    window.scroll({
      top: 500,
      behavior: "smooth",
    });
  };
  // const { currentUser } = useUserContext();
  // console.log(currentUser, "deeee");
  console.log(data,"eeee");
  return (
    <div className="">
      <div
        className={`${styles.hero} text-white font-bold text-3xl border-white`}
      >
        <div className={styles.cardWrapper}>
          <div className="pb-3">
            <h6 className="text-white text-2xl font-bold pb-3">
              Ucuz Otobüs Bileti Bulun
            </h6>
            <h6 className="text-white text-lg font-normal">
              Fiyatları karşılaştırın ve online otobüs bileti rezervasyonu yapın
            </h6>
          </div>
          <div className={styles.ticketCard}>
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
                  <div className="flex-1 gap-3 flex items-end ">
                    <button className="bg-gray-600 px-0 text-white border button">
                      Bugün
                    </button>
                    <button className="bg-white px-0 text-black border button">
                      Yarın
                    </button>
                  </div>
                </div>
              </div>
              <button className="button" onClick={() => handleSubmit()}>
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
                <div className="border flex-between p-5 py-10 bg-white rounded-lg shadow my-10 hover:shadow-lg cursor-pointer transition-shadow">
                  <img width={100} height={50} src={item.firmaResmi} />
                  <div className="flex flex-col">
                    <p className="font-normal text-xl">{item.kalkisSaat}</p>
                    <p className="font-normal text-sm text-gray-400">
                      {item.sure}
                    </p>
                  </div>
                  <div className="flex flex-col text-center">
                    <div className="flex-center mb-3">
                      <img
                        src={seat.src}
                        alt=""
                        width={25}
                        height={25}
                        className=""
                      />
                      <p className="ps-1">{item.bosKoltukSayisi} boş koltuk</p>
                    </div>
                    <p>
                      {item.kalkisOtogari} {">"} {item.varisOtogari}
                    </p>
                  </div>
                  <p className="text-xl font-bold">{item.fiyat} ₺</p>
                  <button className="button">Bileti Al {"->"}</button>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
