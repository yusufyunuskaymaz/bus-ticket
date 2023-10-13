import { toastErrorNotify, toastSuccessNotify } from "@/helpers/Toastify";

export const signUp = (e:any,newUser:any,allUsers:any,setLogin:any)=>{
        e.preventDefault();
        if (newUser.password !== newUser.password2) {
          toastErrorNotify("Şifreler uyuşmuyor lütfen kontrol edin...");
        } else {
          if (localStorage.getItem("users")) {
            allUsers = JSON.parse(localStorage.getItem("users") || "");
            // check if user exists
            if (allUsers.some((user:any) => user.mail == newUser.mail)) {
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
      
}