"use client";
import React, { useState } from "react";
import { INewUser } from "@/types";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/Toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUserContext,UserContext } from "@/contexts/user-context";


export type ILoginFormProps = {
  setLogin: (value: boolean) => void;
};

export const LoginForm = (props: ILoginFormProps) => {
  const {setCurrentUser,currentUser} = useUserContext()

  const router = useRouter();
  type IUser = {
    mail: string;
    password: string;
  };
  let allUsers: INewUser[];

  const [user, setUser] = useState<IUser>({ mail: "", password: "" });
  const { setLogin } = props;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (localStorage.getItem("users")) {
      allUsers = JSON.parse(localStorage.getItem("users") || "");
      let currentUser2: INewUser[] = allUsers.filter(
        (item) => item.mail === user.mail
      );
      console.log(currentUser2,"annn");
      if (currentUser2.length == 1) {
        if (
          currentUser2[0].mail === user.mail &&
          currentUser2[0].password === user.password
        ) {
          setCurrentUser({...user,gender:currentUser2[0].gender})
          toastSuccessNotify("Giriş başarılı! Ana sayfaya gidiliyor...");
          setTimeout(() => {
            router.push("/home");
          }, 3000);
        } else {
          toastErrorNotify("Kullanıcı adı ya da şifre yanlış");
        }
      } else {
        toastErrorNotify("Böyle bir kullanıcı yok");
      }
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
      <div className="">
        <Image
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
          width={45}
          height={45}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Giriş Yap
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="E-Mail..."
                className="input py-2"
                onChange={(e) => setUser({ ...user, mail: e.target.value })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="*******************"
                className="input py-2"
                // minLength={6}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            onClick={() => setLogin(false)}
          >
            Create Account!
          </a>
        </p>
      </div>
    </div>
  );
};
