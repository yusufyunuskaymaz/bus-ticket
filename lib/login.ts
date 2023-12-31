import { toastErrorNotify, toastSuccessNotify } from "@/helpers/Toastify";
import { INewUser, IUser, User } from "@/types";



export const login = (
  e: React.FormEvent<HTMLFormElement>,
  allUsers: INewUser[],
  setCurrentUser:(currentUser: User) => void,
  user: IUser
) => {
  e.preventDefault();
  if (localStorage.getItem("users")) {
    allUsers = JSON.parse(localStorage.getItem("users") || "");
    let currentUser: INewUser[] = allUsers.filter(
      (item) => item.mail === user.mail
    );
    console.log(currentUser, "annn");
    if (currentUser.length == 1) {
      if (
        currentUser[0].mail === user.mail &&
        currentUser[0].password === user.password
      ) {
        setCurrentUser({ ...user, gender: currentUser[0].gender,name: currentUser[0].name});
        localStorage.setItem("currentUser",JSON.stringify({...user, gender: currentUser[0].gender,name: currentUser[0].name} ))
        toastSuccessNotify("Giriş başarılı! Ana sayfaya gidiliyor...");
          return {push:true}
      } else {
        toastErrorNotify("Kullanıcı adı ya da şifre yanlış");
      }
    } else {
      toastErrorNotify("Böyle bir kullanıcı yok");
    }
  } else {
    allUsers = [];
    toastErrorNotify("Böyle bir kullanıcı yok");
  }
};
