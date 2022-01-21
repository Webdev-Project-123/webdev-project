import { useState } from "react";
import Input from "./components/Input";
import Label from "./components/Label";

function SignUp() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
  });

  const inputStyle =
    "w-full mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#6e5339] bg-transparent placeholder:text-[#51050F] placeholder:font-ubuntu focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle = "w-full flex justify-center items-center gap-3";

  const handleOnChange = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleOnSignUp = () => {};

  return (
    <div className=" w-screen h-screen flex gap-0">
      <div className="w-2/3">
        <img
          className="rounded-l-xl h-screen w-full"
          src="https://images.unsplash.com/photo-1632404960568-e06732a0b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJvb2tzJTIwYW5pbWF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="flex flex-wrap flex-col justify-center gap-[30px] w-1/3 p-12 bg-gradient-to-tr to-[#ffffff] via-[#ffd59a] from-[#da8207]">
        <div className="h-auto">
          <h1 className="p-0 h-content ml-8 inline-block text-[40px] text-[#51050F] font-ubuntu font-bold">
            Đăng ký ngay
          </h1>
        </div>
        <div className="flex flex-wrap justify-between items-stretch gap-4">
          <Label className={labelStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Input
              type={"text"}
              name="username"
              placeholder={"Tài khoản"}
              onChange={handleOnChange}
              value={input.username}
              className={inputStyle}
            />
          </Label>
          <Label className={labelStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <Input
              type={"password"}
              name="password"
              placeholder={"Mật khẩu"}
              onChange={handleOnChange}
              value={input.password}
              className={inputStyle}
            />
          </Label>
          <Label className={labelStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <Input
              type={"password"}
              name="password"
              placeholder={"Xác nhận mật khẩu"}
              onChange={handleOnChange}
              value={input.password}
              className={inputStyle}
            />
          </Label>
          <Label className={labelStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <Input
              type={"email"}
              name="email"
              placeholder={"Email"}
              onChange={handleOnChange}
              value={input.email}
              className={inputStyle}
            />
          </Label>
        </div>
        <div className="self-end justify-self-end flex justify-center items-center">
          <div className="text-[#6e5339] float-right flex justify-center items-center">
            <span className="mr-2">Đã có tài khoản? </span>
            <a
              href="#"
              className="text-[#6e5339] rounded-md float-right font-bold mr-5 hover:text-[#be3149]"
            >
              Đăng nhập
            </a>
          </div>
          <button className="border-none outline-none w-[100px] h-[40px] bg-[#e7b56e] text-[#6e5339] rounded-md float-right shadow-phuongCustom font-bold active:translate-y-1 active:shadow-phuongCustomActive hover:bg-[#e49f3f]">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
