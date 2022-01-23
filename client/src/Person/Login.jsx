import { useState, useContext, useEffect } from "react";
import Input from "./components/Input";
import Label from "./components/Label";
import loginBg from "./Image/loginBg.jpg";
import loginApi from "../apiClient/loginApi";
import { isLoginContext } from "../GloblalContext/context";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useContext(isLoginContext);

  const navigate = useNavigate();

  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const handleChangeInput = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleLogin = async () => {
    try {
      const res = await loginApi.post(input);
      setIsLogin(true);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("userID", res.id);
      navigate("/upload");
      console.log(res);
    } catch (error) {
      alert("Error email or password");
      console.error(error);
    }
  };

  const hadleResetToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) throw new Error("Can't get refreshToken");
      const res = await loginApi.patch(refreshToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen relative flex justify-center items-center font-robotoS">
      <img className="h-full w-full absolute object-cover" src={loginBg} />
      <div className="relative xl:w-2/5 xl:h-3/5 md:w-4/5 md:h-3/5 sm:h-3/5 w-11/12 h-5/6 md:px-10 px-7 bg-[rgb(252,236,221,0.95)] rounded-md flex justify-center gap-5 md:gap-8 flex-col text-[#2b2727] z-10">
        <div className="absolute top-5 left-5 w-auto h-auto flex group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:-translate-x-3 transition-all ease-linear"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>
        <div className="mx-auto flex justify-center items-center gap-2 mt-12 xl:mt-[3rem] md:mt-0 h-auto">
          <h1 className="font-robotoS lg:text-3xl md:text-3xl">
            Login to Wordy
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <Label className={labelStyle}>
            <Input
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              value={input.email}
              onChange={handleChangeInput}
              className={inputStyle}
            />
            <p className="invisible peer-invalid:visible peer-invalid:italic text-sm text-[#b6642e] block w-full p-0 -mt-6 mb-1">
              Invalid Email*
            </p>
          </Label>
          <Label className={labelStyle}>
            <Input
              type={"password"}
              name={"password"}
              placeholder={"Mật khẩu"}
              value={input.password}
              onChange={handleChangeInput}
              className={inputStyle}
            />
            <p className="invisible peer-invalid:visible peer-invalid:italic block w-full p-0 -mt-6">
              Invalid password*
            </p>
          </Label>
          <a href="#" className="hover:text-[#c55d2c]">
            Forgotten password ?
          </a>
        </div>
        <div className="self-end flex justify-center items-center gap-4 mt-3 md:mt-0">
          <button
            onClick={hadleResetToken}
            className="relative w-[120px] h-10 before:bg-[#c55d2c] before:bottom-0 before:left-0 before:absolute before:w-full before:scale-0 before:h-[1px] hover:before:scale-100 before:transition-all before:ease-in-out"
          >
            Reset Token
          </button>
          <Link to="/sign-up">
            <button className="relative w-[120px] h-10 before:bg-[#c55d2c] before:bottom-0 before:left-0 before:absolute before:w-full before:scale-0 before:h-[1px] hover:before:scale-100 before:transition-all before:ease-in-out">
              Sign up
            </button>
          </Link>
          <button
            onClick={handleLogin}
            className="w-[120px] relative h-10 bg-[#fcd3ac] rounded-md transition-all ease-linear after:ease-out after:absolute after:bottom-0 after:left-0 after:rounded-md after:w-full after:h-0 after:bg-[#FEA82F] hover:after:h-full after:transition-all"
          >
            <span className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-50">
              Login
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
