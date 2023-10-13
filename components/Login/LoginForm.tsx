"use client";
import React, { useState } from "react";
import { INewUser } from "@/types";
import Image from "next/image";
import { useUserContext } from "@/contexts/user-context";
import { login } from "@/lib/login";
import { IUser, ILoginFormProps } from "@/types";
import { useRouter } from "next/navigation";

export const LoginForm = (props: ILoginFormProps) => {
  const router = useRouter();
  const { setLogin } = props;
  let allUsers: INewUser[];

  const { setCurrentUser } = useUserContext();
  const [user, setUser] = useState<IUser>({ mail: "", password: "" });

  const handleSubmit = (e: any) => {
    const value = login(e, allUsers, setCurrentUser, user);
    console.log(value, "value");
    if (value?.push) {
      setTimeout(() => {
        router.push("/home");
      }, 3000);
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
            <button type="submit" className="button w-full">
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
