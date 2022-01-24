import { isLoginContext } from "./context";
import { useEffect, useLayoutEffect, useState } from "react";
import loginApi from "../apiClient/loginApi";

function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    let timerID;
    if (isLogin) {
      const hadleResetToken = async () => {
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          if (!refreshToken) throw new Error("Can't get refreshToken");
          const res = await loginApi.patch({ refreshToken: refreshToken });
          localStorage.setItem("accessToken", res.accessToken);
          console.log(res);
        } catch (error) {
          alert("Can not extend your login time");
          localStorage.removeItem("userID");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("accessToken");
          setIsLogin(false);
          console.log(error);
        }
      };

      timerID = setInterval(() => {
        localStorage.removeItem("accessToken");
        hadleResetToken();
      }, (9 * 60 + 30) * 1000);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [isLogin]);

  return (
    <isLoginContext.Provider value={[isLogin, setIsLogin]}>
      {children}
    </isLoginContext.Provider>
  );
}

export default LoginProvider;
