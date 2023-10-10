"use client"
import Image from "next/image";
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex h-screen">
      <div className="w-3/5 h-screen bg-gray-50 flex-center p-20">
        <img
          src="https://app.spechy.com/static/media/coverpage.bb2c31f3.png"
          alt="bus"
        />
      </div>
      <div className="w-2/5 ">{isLogin ? <LoginForm setLogin={setIsLogin} /> : <SignUpForm setLogin={setIsLogin} />}</div>
    </div>
  );
};
