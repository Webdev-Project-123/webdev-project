import { useEffect, useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import uploadProductApi from "../../apiClient/uploadProductApi";
import ListProduct from "./ListProduct";

function AddProduct() {
  const [input, setInput] = useState({
    productName: "",
    productImage: "",
    productAuthors: "",
    productCategories: "",
    productUploadDate: "",
    productPublishComp: "",
    productPublishDate: "",
    productPrice: 0,
    productSalePrice: 0,
    productPages: 0,
    productLanguage: "",
    productDesc: "",
    productInStock: 0,
  });

  const [date, setDate] = useState({
    date: "",
    month: "",
    year: "",
  });

  const [image, setImage] = useState();

  const [viewList, setViewList] = useState(false);

  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  const inputDateStyle =
    "peer w-full mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelDateStyle =
    "w-[30%] flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  let data = new FormData();

  const handleUploadProduct = async () => {
    try {
      const payload = { ...input };
      payload.productPublishDate = `${date.date}-${date.month}-${date.year}`;
      payload.productAuthors = payload.productAuthors.split(" ");
      payload.productCategories = payload.productCategories.split(" ");
      const toDate = new Date();
      const today = toDate.getDate();
      const tomonth = toDate.getMonth();
      const toyear = toDate.getFullYear();

      payload.productUploadDate = `${today}-${tomonth + 1}-${toyear}`;

      payload.productPages = +payload.productPages;
      payload.productInStock = +payload.productInStock;
      payload.productPrice = +payload.productPrice;
      payload.productSalePrice = +payload.productSalePrice;

      data.append("productName", input.productName);
      data.append("productAuthors", payload.productAuthors);
      data.append("productCategories", payload.productCategories);
      data.append("productUploadDate", payload.productUploadDate);
      data.append("productPublishComp", input.productPublishComp);
      data.append("productPublishDate", payload.productPublishDate);
      data.append("productPrice", payload.productPrice);
      data.append("productSalePrice", payload.productSalePrice);
      data.append("productPages", payload.productPages);
      data.append("productLanguage", input.productLanguage);
      data.append("productDesc", input.productDesc);
      data.append("productInStock", payload.productInStock);
      data.append("productImage", image);

      const res = await uploadProductApi.post(data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputDate = (e) => {
    const newDate = { ...date };
    newDate[e.target.name] = e.target.value;
    setDate(newDate);
  };

  const handleInputBookInfo = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleUpload = () => {
    document.querySelector("#file").click();
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  const handleToggleList = () => {
    setViewList((prev) => !prev);
  };

  useEffect(() => {
    if (image) {
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
    return () => image && URL.revokeObjectURL(image.preview);
  }, [image]);

  return (
    <>
      {viewList && <ListProduct handleToggleList={handleToggleList} />}
      <div className="addBg w-screen min-h-screen md:px-10 px-3 flex font-roboto py-10">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center rounded-md">
          <div className=" relative lg:w-[55%] w-full lg:h-full h-auto bg-[#FCECDD] flex flex-col justify-center items-center pt-[3rem] lg:pb-0 pb-[2rem] gap-8 rounded-l-md">
            <div className="absolute top-0 left-0 lg:w-[6%] md:w-[6%] w-[10%] h-[10%]">
              <button className="w-full h-1/2 flex justify-center items-center bg-[#ff1818]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#fcecdd]"
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
              <button
                onClick={handleToggleList}
                className="w-full h-1/2 flex justify-center items-center"
              >
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
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
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
                  name="productName"
                  placeholder={"Book's name"}
                  value={input.productName}
                  onChange={handleInputBookInfo}
                />
              </Label>
              <Label className={labelStyle}>
                <Input
                  className={inputStyle}
                  type="text"
                  name="productAuthors"
                  placeholder={"Book's author"}
                  value={input.productAuthors}
                  onChange={handleInputBookInfo}
                />
              </Label>
              <Label className={labelStyle}>
                <Input
                  className={inputStyle}
                  type="text"
                  name="productCategories"
                  value={input.productCategories}
                  placeholder={"Categories, separate by spacing"}
                  onChange={handleInputBookInfo}
                />
              </Label>
              <Label className={labelStyle}>
                <Input
                  className={inputStyle}
                  type="text"
                  name="productPublishComp"
                  placeholder={"Publish company"}
                  value={input.productPublishComp}
                  onChange={handleInputBookInfo}
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
                    value={date.date}
                    className={inputDateStyle}
                    onChange={handleInputDate}
                  />
                </Label>
                <Label className={labelDateStyle}>
                  <Input
                    type="number"
                    name={"month"}
                    min={1}
                    max={12}
                    placeholder={"Month"}
                    value={date.month}
                    className={inputDateStyle}
                    onChange={handleInputDate}
                  />
                </Label>
                <Label className={labelDateStyle}>
                  <Input
                    type="number"
                    name={"year"}
                    min={1}
                    placeholder={"Year"}
                    value={date.year}
                    className={inputDateStyle}
                    onChange={handleInputDate}
                  />
                </Label>
              </div>
              <div className="flex justify-between flex-wrap items-center w-full h-auto">
                <Label className={labelDateStyle}>
                  <Input
                    className={inputDateStyle}
                    type="number"
                    name="productPrice"
                    placeholder={"Price"}
                    value={input.productPrice}
                    onChange={handleInputBookInfo}
                  />
                </Label>
                <Label className={labelDateStyle}>
                  <Input
                    className={inputDateStyle}
                    type="number"
                    name="productSalePrice"
                    placeholder={"Sale"}
                    value={input.productSalePrice}
                    onChange={handleInputBookInfo}
                  />
                </Label>
                <Label className={labelDateStyle}>
                  <Input
                    className={inputDateStyle}
                    type="number"
                    name="productPages"
                    placeholder={"Pages"}
                    value={input.productPages}
                    onChange={handleInputBookInfo}
                  />
                </Label>
              </div>
              <Label className={labelStyle}>
                <Input
                  className={inputStyle}
                  type="text"
                  name="productLanguage"
                  placeholder={"Language of the book"}
                  value={input.productLanguage}
                  onChange={handleInputBookInfo}
                />
              </Label>
              <Label className={labelStyle}>
                <Input
                  className={inputStyle}
                  type="text"
                  name="productDesc"
                  value={input.productDesc}
                  onChange={handleInputBookInfo}
                  placeholder={"Description"}
                />
              </Label>
              <Label className={labelStyle}>
                <Input
                  className={inputStyle}
                  type="number"
                  name="productInStock"
                  value={input.productInStock}
                  placeholder={"Remaining amount of books"}
                  onChange={handleInputBookInfo}
                />
              </Label>
            </div>
            <div className="w-full h-full hidden min-h-0 lg:min-h-[6rem] lg:flex items-center justify-center">
              <button
                onClick={handleUploadProduct}
                className="w-[30%] lg:h-[45%] h-[65%] p-4 flex items-center justify-center border-noen outline-none rounded-md bg-[#fcc579] shadow-phuongProfile active:shadow-none active:translate-y-1 mb-5"
              >
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
                src={image?.preview}
                className="w-full h-full object-contain rounded-md block relative before:absolute before:rounded-md before:w-full before:h-full before:top-0 before:left-0 before:bg-[#FCECDD]"
                alt=""
              />
            </div>
            <input
              id="file"
              type="file"
              className="hidden"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleUploadImage}
            />
            <div className="flex justify-center items-center w-full h-[7%] gap-8">
              <button
                onClick={handleUpload}
                className="w-[30%] h-[80%] bg-[#F4DFBA] rounded-md active:translate-y-1 active:shadow-none shadow-phuongProfile"
              >
                {image ? "Upload another" : "Upload"}
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
              <button
                onClick={handleUploadProduct}
                className="w-[30%] h-[80%] bg-[#f1d9ae] rounded-md active:translate-y-1 active:shadow-none shadow-phuongProfile"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
