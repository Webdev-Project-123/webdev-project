import { useRef, useState } from "react";
import avatar from "./Image/avatar.jpg";
import loginBg from "./Image/loginBg.jpg";
import Input from "./components/Input";
import Label from "./components/Label";
import Upload from "./components/Upload";
import "./Style/custom.css";

function Profile() {
  const [popUp, setPopUs] = useState(false);

  const uploadFileRef = useRef();

  const handleUploadFile = () => {
    // uploadFileRef.current.click();
    setPopUs((prev) => !prev);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center font-robotoS">
      {popUp && <Upload setPopUs={setPopUs} />}
      <div className="bg-[#f5f1f1] w-4/5 h-4/5 flex flex-col items-center justify-center shadow-phuongProfile rounded-md">
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
            <p className="text-[#612319] first">Welcome! Squid Game Soiciety</p>
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
        <div className="w-full h-auto flex-grow">
          <Label>
            Your name
            <Input type={"text"} name={"name"} placeholder={"hi"} />
          </Label>
          <Label>
            Your email
            <Input type={"email"} name={"email"} placeholder={"hi"} />
          </Label>
          <Label>
            Your password
            <Input type={"password"} name={"password"} placeholder={"hi"} />
          </Label>
          <Label>
            Your phone
            <Input type={"tel"} name={"phone"} placeholder={"hi"} />
          </Label>
          <Label>
            Your address
            <Input type={"text"} name={"address"} placeholder={"hi"} />
          </Label>
        </div>
      </div>
    </div>
  );
}
export default Profile;
