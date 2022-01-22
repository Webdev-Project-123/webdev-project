import { useEffect, useRef, useState } from "react";
import avatar from "./Image/avatar.jpg";
import loginBg from "./Image/loginBg.jpg";
import Input from "./components/Input";
import Label from "./components/Label";
import Upload from "./components/Upload";
import "./Style/custom.css";

function Profile() {
  const [info, setInfo] = useState({
    name: "Nguyen Duc Phuong",
    email: "ducphuong@gmail.com",
    password: "22122003",
    phone: "0123456789",
    address: "50D DTD.st",
    role: "admin",
  });

  const [disabled, setDisabled] = useState([false, false, false, false, false]);

  const [popUp, setPopUs] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef();

  const inputStyle =
    "input float-right peer w-9/10 flex-shirnk-0 flex-grow py-3 pr-2 outline-none border-b-[1px] border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "label w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b] rounded-md";

  const uploadFileRef = useRef();

  const handleShowPassword = () => {
    setShowPassword((prev) => {
      if (!prev) inputRef.current.type = "text";
      else inputRef.current.type = "password";
      return !prev;
    });
  };

  const handleUploadFile = () => {
    setPopUs((prev) => !prev);
  };

  const handleEnableChange = (e) => {
    const enableList = document.querySelectorAll(".enalble");
    const labelList = document.querySelectorAll(".label");
    const inputList = document.querySelectorAll(".input");

    for (let i = 0; i < enableList.length; i++) {
      if (enableList[i] === e.target) {
        labelList[i].classList.remove("bg-[#F0ECE3]");
        inputList[i].classList.remove("border-none");

        setDisabled((prev) => {
          const newDis = [...prev];
          return newDis.map((el, index) => {
            if (index === i) return false;
            return true;
          });
        });
      }
    }
  };

  useEffect(() => {
    const inputList = document.querySelectorAll(".input");
    for (let i = 0; i < inputList.length; i++) {
      inputList[i].focus();
    }
  }, [disabled]);

  const handleChangeInfor = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  useEffect(() => {
    const labelList = document.querySelectorAll(".label");
    const inputList = document.querySelectorAll(".input");

    for (let i = 0; i < inputList.length; i++) {
      labelList[i].classList.add("bg-[#F0ECE3]");
      inputList[i].classList.add("border-none");
    }

    setDisabled((prev) => {
      const newDis = [...prev];
      return prev.map((el) => true);
    });
  }, []);

  return (
    <div className="flex w-screen h-screen justify-center items-center font-robotoS">
      {popUp && <Upload popUp={popUp} setPopUs={setPopUs} />}
      <div className="bg-[#f5f1f1] w-[70%] h-4/5 flex flex-col items-center justify-center rounded-md">
        <div className="bg-[#FF8243] w-full h-[30%] rounded-t-md flex flex-wrap justify-around items-center gap-3">
          <button className="group relative w-[200px] h-[50px] bg-[#FAC082] before:absolute before:left-0 before:top-0 before:bg-[#f09f49] before:h-full before:w-full hover:before:w-0 before:rounded-md before:transition-all before:ease-in-out flex justify-center items-center gap-2 rounded-md shadow-phuongProfileBtn">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-0 transition-all ease-out">
              Hover me!
            </span>
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Your cart
          </button>
          <div className="flex justify-center items-center flex-col gap-3">
            <div className=" group relative rounded-full w-[70px] h-[70px]">
              <div
                onClick={handleUploadFile}
                className="absolute w-full h-full rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out scale-0 group-hover:scale-100 bg-[rgba(0,0,0,0.65)] flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <img src={avatar} className="w-full h-full rounded-full" />
            </div>
            <p className="text-[#612319] first">Welcome! Nguyen Duc Phuong</p>
          </div>
          <button className="group relative w-[200px] h-[50px] bg-[#FAC082] before:absolute before:right-0 before:top-0 before:bg-[#f09f49] before:h-full before:w-full hover:before:w-0 before:rounded-md before:transition-all before:ease-in-out flex justify-center items-center gap-2 rounded-md shadow-phuongProfileBtn">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-0 transition-all ease-out">
              Hover me!
            </span>
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Bought list
          </button>
        </div>
        <div className="w-full h-auto flex-grow flex flex-col justify-around items-center">
          <div className="w-3/5 h-full justify-center flex flex-col gap-8 ">
            <div className="flex justify-center items-center gap-1">
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
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <Input
                  onChange={handleChangeInfor}
                  type={"text"}
                  name={"name"}
                  value={info.name}
                  className={inputStyle}
                  disabled={disabled[0]}
                />
              </Label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer enalble"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleEnableChange}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center gap-1">
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
                  onChange={handleChangeInfor}
                  type={"email"}
                  name={"email"}
                  value={info.email}
                  className={inputStyle}
                  disabled={disabled[1]}
                />
              </Label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer enalble"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleEnableChange}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center gap-1">
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <Input
                  onChange={handleChangeInfor}
                  ref={inputRef}
                  type={"password"}
                  name={"password"}
                  value={info.password}
                  className={inputStyle}
                  disabled={disabled[2]}
                />
              </Label>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer enalble"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={handleShowPassword}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={handleShowPassword}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer enalble"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleEnableChange}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center gap-1">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Input
                  onChange={handleChangeInfor}
                  type={"tel"}
                  name={"phone"}
                  value={info.phone}
                  className={inputStyle}
                  disabled={disabled[3]}
                />
              </Label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer enalble"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleEnableChange}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center gap-1">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <Input
                  onChange={handleChangeInfor}
                  type={"text"}
                  name={"address"}
                  value={info.address}
                  className={inputStyle}
                  disabled={disabled[4]}
                />
              </Label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer enalble"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleEnableChange}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
