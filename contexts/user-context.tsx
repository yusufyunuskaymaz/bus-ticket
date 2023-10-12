"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
// import { userObserver } from '../auth/firebase';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContext = {
  currentUser: User ;
};

type User = {
  name: string;
  surname: string;
  gender: string;
};

export const UserContext = createContext<UserContext | null>(null);

const user = {
  name: "Yusuf",
  surname: "Kaymaz",
  gender: "male",
}


export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(user);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext (){
  const context = useContext(UserContext)
  if(!context){
    throw new Error (
      "useUserContext must be used within a UserContextProvider"
    )
  }
  return context
}