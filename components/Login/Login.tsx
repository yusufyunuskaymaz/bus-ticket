import Image from "next/image";
import React from "react";
import Form from "./Form";

export const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 h-screen bg-gray-50 flex-center p-20">
        <img src="https://app.spechy.com/static/media/coverpage.bb2c31f3.png" alt="bus"  />
      </div>
      <div className="w-2/5 ">

      <Form />
      </div>
    </div>
  );
};

