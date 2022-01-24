import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Input from "./components/Input";
import Label from "./components/Label";

function ResetPassword() {
  const [input, setInput] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const { token } = useParams();

  useEffect(() => {
    console.log(token);
  }, [token]);

  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-2/5 flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const handleOnChange = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    if (
      e.target.name === "confirmNewPassword" ||
      e.target.name === "newPassword"
    ) {
      if (newInput.newPassword !== newInput.confirmNewPassword) {
        document.getElementById("confirmPass").classList.remove("opacity-0");
        document.getElementById("confirmPass").classList.add("opacity-100");
      } else {
        document.getElementById("confirmPass").classList.remove("opacity-100");
        document.getElementById("confirmPass").classList.add("opacity-0");
      }
    }
    setInput(newInput);
  };

  useEffect(() => {
    document.getElementById("confirmPass").classList.add("opacity-0");
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.47)] flex justify-center items-center z-20">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-3/5 h-3/5 rounded-md bg-[#ffdab8] relative flex justify-center flex-col gap-6 items-center"
      >
        <div className="absolute top-5 right-7 w-auto h-auto flex group cursor-pointer">
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
        <div className="flex flex-wrap justify-center flex-col items-center w-full">
          <Label className={labelStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#47392b]"
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
              name={"newPassword"}
              placeholder={"Your new password"}
              value={input.newPassword}
              onChange={handleOnChange}
              className={inputStyle}
            />
            <p className="invisible peer-invalid:visible peer-invalid:italic text-sm text-[#b6642e] block w-full p-0 -mt-6 mb-1">
              Invalid pasowrd*
            </p>
          </Label>{" "}
          <Label className={labelStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#47392b]"
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
              name="confirmNewPassword"
              placeholder={"Confirm your password"}
              onChange={handleOnChange}
              value={input.confirmNewPassword}
              className={inputStyle}
            />
            <p
              id="confirmPass"
              className="italic block w-full p-0 -mt-6 mb-2 text-sm ml-9"
            >
              Invalid Comfirm Password*
            </p>
          </Label>
        </div>
        <button className="bg-[#fcd07e] w-[15%] h-[8%] rounded-md shadow-phuongProfile active:shadow-none active:translate-y-1">
          Change
        </button>
      </div>
    </div>
  );
}
export default ResetPassword;
