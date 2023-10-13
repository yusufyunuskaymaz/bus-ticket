"use client";
import React, { useState } from "react";
import { ILoginFormProps } from "@/types"; 
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/Toastify";
import { ToastContainer } from "react-toastify";
import { INewUser } from "@/types";
import { signUp } from "@/lib/signUp";

export const SignUpForm = (props: ILoginFormProps) => {
  const { setLogin } = props;
  const user = {
    name: "",
    surname: "",
    mail: "",
    gender: "",
    birthDate: "",
    password: "",
    password2: "",
  };

  let allUsers: INewUser[];

  const [newUser, setNewUser] = useState<INewUser>(user);

  const handleSubmit = (e:any)=>{
      signUp(e,newUser,allUsers,setLogin)
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 pt-4 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Aramıza Katıl 🚀
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-3">
          <div className="flex gap-3">
            <div className="">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                İsim
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name..."
                  required
                  className="input py-2"
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Soyisim
              </label>
              <div className="mt-2">
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="surname"
                  placeholder="Surname..."
                  required
                  className="input py-2"
                  onChange={(e) =>
                    setNewUser({ ...newUser, surname: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-posta Adresi
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Mail..."
                required
                className="input py-2"
                onChange={(e) =>
                  setNewUser({ ...newUser, mail: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cinsiyet
              </label>
              <div className="mt-2">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  autoComplete="gender"
                  placeholder="Gender..."
                  required
                  className="input py-2"
                  onChange={(e) =>
                    setNewUser({ ...newUser, gender: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Doğum Tarihi
              </label>
              <div className="mt-2">
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  autoComplete="birthDate"
                  required
                  className="input py-2"
                  onChange={(e) =>
                    setNewUser({ ...newUser, birthDate: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Şifre
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password..."
                required
                minLength={6}
                className="input py-2"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Şifre Tekrar
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password..."
                required
                minLength={6}
                className="input py-2"
                onChange={(e) =>
                  setNewUser({ ...newUser, password2: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="button w-full"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already Member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            onClick={() => setLogin(true)}
          >
            Login!
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};
