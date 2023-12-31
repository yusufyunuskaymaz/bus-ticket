"use client"
import { User } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
// import { userObserver } from '../auth/firebase';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContext = {
  currentUser: User ;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
};



export const UserContext = createContext<UserContext | null>(null);

const user = {
  mail: "",
  password: "",
  gender: "",
  name:""
}


export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(user);

  return (
    <UserContext.Provider value={{ currentUser,setCurrentUser }}>
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