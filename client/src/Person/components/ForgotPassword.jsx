import { useEffect, useState } from "react";
import Input from "./Input";
import Label from "./Label";
function ForgotPassword({ handlePopForgotPass }) {
  const [email, setEmail] = useState({ email: "" });

  const inputStyle =
    "block lg:w-2/5 md:w-3/5 w-4/5 mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  useEffect(() => {
    window.onclick = () => {
      handlePopForgotPass();
    };
    return () => {
      window.onclick = () => {};
    };
  }, []);

  const handleChangeInput = (e) => {
    const newEmail = { ...email };
    newEmail[e.target.name] = e.target.value;
    setEmail(newEmail);
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.47)] flex justify-center items-center z-20">
      <div
        onClick={(e) => e.stopPropagation()}
        className="lg:w-3/5 md:w-[90%] w-full h-3/5 rounded-md bg-[#ffdab8] relative flex justify-center flex-col gap-6 items-center"
      >
        <button
          onClick={handlePopForgotPass}
          className="absolute top-5 right-7 w-auto h-auto"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Label className={labelStyle}>
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Enter your registered email"}
            value={email.email}
            onChange={handleChangeInput}
            className={inputStyle}
          />
          <p className="invisible peer-invalid:visible peer-invalid:italic text-sm text-[#b6642e] block w-full p-0 -mt-6 mb-1">
            Invalid Email*
          </p>
        </Label>
        <button className="bg-[#fcd07e] lg:w-[15%] md:w-[20%] w-[30%] h-[8%] rounded-md shadow-phuongProfile active:shadow-none active:translate-y-1">
          Next
        </button>
      </div>
    </div>
  );
}
export default ForgotPassword;
