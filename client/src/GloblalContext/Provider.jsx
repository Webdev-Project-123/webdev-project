import { isLoginContext } from "./context";
import { useEffect, useState } from "react";
import loginApi from "../apiClient/loginApi";

function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  // const [info, setInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  // useEffect(() => {
  //   let timerID;
  //   if (isLogin) {
  //     timerID = setTimeout(() => {
  //       localStorage.removeItem("accessToken");
  //       localStorage.removeItem("userID");
  //     }, 5000);
  //     // (async () => {
  //     //   try {
  //     //     const token = localStorage.getItem("refreshToken");
  //     //     const res = await loginApi.patch(token);
  //     //     console.log(res);
  //     //   } catch (error) {
  //     //     console.error(error);
  //     //   }
  //     // })();
  //   }
  //   return () => {
  //     clearTimeout(timerID);
  //   };
  // }, [isLogin]);
  return (
    <isLoginContext.Provider value={[isLogin, setIsLogin]}>
      {children}
    </isLoginContext.Provider>
  );
}

export default LoginProvider;
