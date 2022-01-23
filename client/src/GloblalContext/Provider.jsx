import { isLoginContext } from "./context";
import { useState } from "react";

function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <isLoginContext.Provider value={[isLogin, setIsLogin]}>
      {children}
    </isLoginContext.Provider>
  );
}

export default LoginProvider;
