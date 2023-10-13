"use client"
import { toastSuccessNotify } from "@/helpers/Toastify";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Payment = (props:any) => {
  console.log(props);
  const {searchParams} = props
  console.log(searchParams);
 const router =  useRouter()
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      toastSuccessNotify("Başarılı")
    }, 2000);
    
  };
  useEffect(() => {
    
  }, [loading])
  
  return (
    <form className="bg-gray-100" onSubmit={(e)=>handleSubmit(e)}>
      <div className=" flex pb-20">
        <div className="mx-auto bg-white p-10 rounded mt-10 ">
          <h1 className="text-3xl text-center">Ödeme Formu</h1>
          <div className="flex flex-col mt-10 gap-3">
            <div>
              <label htmlFor="cardNumber">Kart Numarası</label>
              <input
                maxLength={19}
                type="tel"
                placeholder="**** **** **** ****"
                className="input  py-3"
                required
              />
            </div>
            <div>
              <label htmlFor="cardNumber">İsim Soyisim</label>
              <input
                type="text"
                placeholder="Yusuf Kaymaz"
                className="input  py-3"
                required
              />
            </div>
            <div className="flex gap-3">
              <div>
                <label htmlFor="cardNumber">Son Kullanma Tarihi</label>
                <input
                  maxLength={5}
                  type="text"
                  placeholder="10/25"
                  className="input  py-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="cardNumber">CVC</label>
                <input
                  type="tel"
                  maxLength={3}
                  placeholder="555"
                  className="input  py-3"
                  required
                />
              </div>
            </div>
              <div>
                <p >Toplam Fiyat : <span className="font-bold text-gray-700">{searchParams.price} Tl</span> </p>
              </div>
          </div>
          <div className={`${loading  && "opacity-50" } `}>

        
          <button
            className="button mt-5 bg-green-500 flex items-center gap-3 "
            style={{ background: "#0ab285" }}
            // onClick={() => handleSubmit()}
          >
            <p>Güvenli Ödeme </p>
            {loading && (
              <div
                className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}
          </button>
          </div>
        </div>
        <ToastContainer />  
      </div>
      </form>
  );
};

export default Payment;
