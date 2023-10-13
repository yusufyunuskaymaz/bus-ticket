"use client";
import React, { useState } from "react";
import { ILoginFormProps } from "./LoginForm";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/Toastify";
import { ToastContainer } from "react-toastify";
import { INewUser } from "@/types";

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
  console.log(newUser);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newUser.password !== newUser.password2) {
      toastErrorNotify("Şifreler uyuşmuyor lütfen kontrol edin...");
    } else {
      if (localStorage.getItem("users")) {
        allUsers = JSON.parse(localStorage.getItem("users") || "");
        // check if user exists
        if (allUsers.some((user) => user.mail == newUser.mail)) {
          toastErrorNotify("Bu e postayla kayıtlı kullanıcı var!");
          return;
        }
      } else {
        allUsers = [];
      }
      localStorage.setItem("users", JSON.stringify([...allUsers, newUser]));
      toastSuccessNotify("Tebrikler! Kullanıcı kaydı oluşturuldu");
      setTimeout(() => {
        setLogin(true);
      }, 3000);
    }
  };

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
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
