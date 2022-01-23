import { useEffect, useState } from "react";
import Input from "./components/Input";
import Label from "./components/Label";
import signUpBg from "./Image/signUpBg.jpg";
import signUpApi from "../apiClient/signUpApi";

function SignUp() {
  const [input, setInput] = useState({
    password: "",
    confirmPass: "",
    email: "",
    name: "",
  });

  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const handleOnChange = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    if (e.target.name === "confirmPass" || e.target.name === "password") {
      if (newInput.confirmPass !== newInput.password) {
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

  const handleSignUp = async () => {
    try {
      const res = await signUpApi.post({
        email: input.email,
        password: input.password,
        name: input.name,
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreventDefalut = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute w-screen h-screen md:-translate-x-[5rem]">
        <img
          className="rounded-l-xl h-full w-full object-cover"
          src={signUpBg}
        />
      </div>
      <div className="xl:w-[45%] md:w-[65%] sm:w-full relative md:float-right">
        <div className="absolute top-3 right-7 font-robotoS font-semi flex justify-center items-center cursor-pointer group md:text-[20px]">
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
          <h1 className="hidden xsm:block">Home</h1>
        </div>
        <div className="flex flex-wrap flex-col justify-center md:gap-[30px] gap-[20px] w-full h-screen md:px-6 lg:px-12 bg-gradient-to-tr to-[#ffffff] via-[#f1b560] from-[#b83602] sm:text-xl px-3">
          <div className="h-auto">
            <h1 className="p-0 h-content ml-8 inline-block md:text-[40px] text-[30px] text-[#2b2727] font-ubuntu font-bold">
              Sign up now
            </h1>
          </div>
          <div className="flex flex-wrap justify-between items-stretch w-full">
            <Label className={labelStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-1/10 flex-shrink-0 text-[#47392b]"
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
              <p className="invisible peer-invalid:visible peer-invalid:italic block w-full text-sm p-0 -mt-6 mb-2 ml-9">
                Invalid Email*
              </p>
            </Label>
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
                name="password"
                placeholder={"Password"}
                onChange={handleOnChange}
                value={input.password}
                className={inputStyle}
              />
              <p className="invisible peer-invalid:visible peer-invalid:italic block w-full text-sm p-0 -mt-6 mb-2 ml-9">
                Invalid Password*
              </p>
            </Label>
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
                name="confirmPass"
                placeholder={"Confirm your password"}
                onChange={handleOnChange}
                value={input.confirmPass}
                className={inputStyle}
              />
              <p
                id="confirmPass"
                onClick={handlePreventDefalut}
                className="italic block w-full p-0 -mt-6 mb-2 text-sm ml-9"
              >
                Invalid Comfirm Password*
              </p>
            </Label>
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
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <Input
                type={"text"}
                name="name"
                placeholder={"Your name"}
                onChange={handleOnChange}
                value={input.phone}
                className={inputStyle}
              />
              <p className="invisible peer-invalid:visible peer-invalid:italic block w-full p-0 text-sm -mt-6 ml-9">
                Invalid Phone Number*
              </p>
            </Label>
          </div>
          <div className="w-full self-end justify-self-end flex justify-center items-center font-robotoS text-base -mt-5">
            <div className="text-[#47392b] float-right flex justify-center items-center">
              <span className="mr-2 hidden sm:inline ">
                Already have account?{" "}
              </span>
              <a
                href="#"
                className="text-[#47392b] rounded-md float-right font-bold mr-5 hover:text-[#be3149] "
              >
                Login
              </a>
            </div>
            {/*  */}
            <button
              onClick={handleSignUp}
              className="relative border-none outline-none w-[100px] h-[40px] bg-[#e7b56e] text-[#47392b] shadow-phuongCustom active:shadow-phuongCustomActive rounded-md float-right font-bold active:translate-y-1 before:absolute before:w-0 before:h-full before:left-0 before:bottom-0 hover:before:w-full before:bg-[#fa8947] before:transition-all before:ease-in-out"
            >
              <span className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-50">
                Sign up
              </span>
            </button>
          </div>
          <div className="w-full self-center mt-5">
            <p className="block mx-auto text-center w-full text-[15px] md:text-[20px] font-robotoS text-[#47392b]">
              By resistering, you have agreed with Wordy about{" "}
            </p>
            <div className="flex justify-center items-center gap-2">
              <a className="italic font-robotoS text-[#47392b]" href="#">
                Terms of service
              </a>{" "}
              {"&"}
              <a className="italic font-robotoS text-[#47392b]" href="#">
                Privacy policy
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
