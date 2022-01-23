import { useEffect, useState } from "react";

import Input from "../components/Input";
import Label from "../components/Label";

function AddProduct() {
  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const inputDateStyle =
    "peer w-full mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelDateStyle =
    "w-[30%] flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const [avatar, setAvatar] = useState();

  const handleUpload = () => {
    document.querySelector("#file").click();
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file.preview);
    setAvatar(file);
  };

  useEffect(() => {
    if (avatar) {
      document
        .getElementById("displayImg")
        .classList.remove("lg:min-h-[50%]", "min-h-[40%]");
      document.getElementById("displayImg").classList.add("before:hidden");
    } else {
      document
        .getElementById("displayImg")
        .classList.add("lg:min-h-[50%]", "min-h-[40%]");
      document.getElementById("displayImg").classList.remove("before:hidden");
    }
    return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  return (
    <div className="w-screen min-h-screen md:px-10 px-3 flex font-roboto py-10">
      <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center rounded-md">
        <div className="lg:w-[55%] w-full lg:h-full h-auto bg-[#FCECDD] flex flex-col justify-center items-center pt-[3rem] lg:pb-0 pb-[2rem] gap-8 rounded-l-md">
          <h1 className="w-full h-auto flex justify-center items-center text-2xl font-robotoS text-[#58493a]">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f5b14a] relative">
              <span className="relative text-[#ffeedf]">
                Add your new product
              </span>
            </span>
          </h1>
          <div className="w-4/5 lg:h-full flex justify-start items-start flex-col gap-5">
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="text"
                name="name"
                placeholder={"Book's name"}
              />
            </Label>
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="text"
                name="author"
                placeholder={"Book's author"}
              />
            </Label>
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="text"
                name="categories"
                placeholder={"Categories, separate by spacing"}
              />
            </Label>
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="text"
                name="publishCom"
                placeholder={"Publish company"}
              />
            </Label>
            <div className="flex justify-between flex-wrap items-center w-full h-auto">
              <p className="w-full mb-3">Enter the publish date:</p>
              <Label className={labelDateStyle}>
                <Input
                  type="number"
                  name={"date"}
                  min={1}
                  max={31}
                  placeholder={"Date"}
                  className={inputDateStyle}
                />
              </Label>
              <Label className={labelDateStyle}>
                <Input
                  type="number"
                  name={"month"}
                  min={1}
                  max={12}
                  placeholder={"Month"}
                  className={inputDateStyle}
                />
              </Label>
              <Label className={labelDateStyle}>
                <Input
                  type="number"
                  name={"year"}
                  min={1}
                  placeholder={"Year"}
                  className={inputDateStyle}
                />
              </Label>
            </div>
            <div className="flex justify-between flex-wrap items-center w-full h-auto">
              <Label className={labelDateStyle}>
                <Input
                  className={inputDateStyle}
                  type="number"
                  name="price"
                  placeholder={"Price"}
                />
              </Label>
              <Label className={labelDateStyle}>
                <Input
                  className={inputDateStyle}
                  type="number"
                  name="salePrice"
                  placeholder={"Sale"}
                />
              </Label>
              <Label className={labelDateStyle}>
                <Input
                  className={inputDateStyle}
                  type="number"
                  name="pages"
                  placeholder={"Pages"}
                />
              </Label>
            </div>
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="text"
                name="lang"
                placeholder={"Language of the book"}
              />
            </Label>
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="text"
                name="desc"
                placeholder={"Description"}
              />
            </Label>
            <Label className={labelStyle}>
              <Input
                className={inputStyle}
                type="number"
                name="inStock"
                placeholder={"Remaining amount of books"}
              />
            </Label>
          </div>
          <div className="w-full h-full hidden min-h-0 lg:min-h-[6rem] lg:flex items-center justify-center">
            <button className="w-[30%] lg:h-[45%] h-[65%] p-4 flex items-center justify-center border-noen outline-none rounded-md bg-[#fcc579] shadow-phuongProfile active:shadow-none active:translate-y-1 mb-5">
              Add
            </button>
          </div>
        </div>
        <div className="lg:w-[45%] w-full lg:h-full h-[50rem] bg-[#f8b75c] flex justify-center items-center flex-col gap-10 rounded-r-md">
          <h3 className="text-xl">Upload your books's image here!</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
          <div
            id="displayImg"
            className="border-dashed border border-black md:w-2/3 w-[80%] h-auto bg-[#FCECDD] rounded-md"
          >
            <img
              src={avatar?.preview}
              className="w-full h-full object-contain rounded-md relative before:absolute before:rounded-md before:w-full before:h-full before:top-0 before:left-0 before:bg-[#FCECDD]"
              alt=""
            />
          </div>
          <input
            id="file"
            type="file"
            className="hidden"
            accept="image/png, image/jpg, iamge/jpeg"
            onChange={handleUploadImage}
          />
          <div className="flex justify-center items-center w-full h-[7%] gap-8">
            <button
              onClick={handleUpload}
              className="w-[30%] h-[80%] bg-[#F4DFBA] rounded-md active:translate-y-1 active:shadow-none shadow-phuongProfile"
            >
              {avatar ? "Upload another" : "Upload"}
            </button>
            <button
              onClick={() => {
                setAvatar((prev) => null);
              }}
              className="w-[30%] h-[80%] bg-[#F4DFBA] rounded-md active:translate-y-1 active:shadow-none shadow-phuongProfile"
            >
              Clear
            </button>
          </div>
          <div className="flex lg:hidden justify-center items-center w-full h-[7%] gap-8">
            <button className="w-[30%] h-[80%] bg-[#f1d9ae] rounded-md active:translate-y-1 active:shadow-none shadow-phuongProfile">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
