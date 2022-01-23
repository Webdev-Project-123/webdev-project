import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Input from "../components/Input";
import Label from "../components/Label";

function DeleteProduct({ handleToggleDeletePopup }) {
  const [productID, setProductID] = useState();

  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-2/5 flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const handleChangeProductID = (e) => {
    setProductID(e.target.value);
  };

  useEffect(() => {
    window.onclick = () => {
      handleToggleDeletePopup();
    };
    return () => {
      window.onclick = () => {};
    };
  }, []);

  return (
    <div className="absolute w-screen h-screen bg-[rgba(0,0,0,0.4)] top-0 right-0 flex justify-center items-center font-robotoS">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative lg:w-2/5 md:w-3/5 w-[90%] h-[35%] bg-[#ff9651] flex justify-center flex-col gap-[2rem] items-center text-[#5f472a] rounded-md"
      >
        <button
          onClick={handleToggleDeletePopup}
          className="absolute right-7 top-5 w-auto h-auto"
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
            type="number"
            // name={productID}
            onChange={handleChangeProductID}
            value={productID}
            placeholder={"Enter the product ID"}
            className={inputStyle}
          />
        </Label>
        <button className=" w-1/4 h-auto py-3 bg-[#f7af6c] shadow-phuongProfile active:translate-y-1 active:shadow-none rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteProduct;
