import Input from "../components/Input";
import Label from "../components/Label";
import Upload from "../components/Upload";

function AddProduct() {
  const inputStyle =
    "peer w-9/10 flex-shirnk-0 flex-grow mb-4 py-2 pr-2 outline-none border-b-2 border-b-[#47392b] placeholder:text-[#47392b] bg-transparent placeholder:text-[#51050F] placeholder:text-[1rem] placeholder:font-robotoS focus:placeholder:text-transparent placeholder:transition-colors placeholder:ease-out";
  const labelStyle =
    "w-full flex justify-center items-center flex-wrap gap-3 text-[#47392b]";

  return (
    <div className="w-screen h-screen px-[100px] py-[50px] flex justify-center items-center">
      <div className="w-3/5 h-full bg-red-300">
        <div className="w-4/5 h-4/5">
          <Label className={labelStyle}>
            <Input
              className={inputStyle}
              type="text"
              name="name"
              placeholde={"Enter the book's name"}
            />
          </Label>
          <Label className={labelStyle}>
            <Input
              className={inputStyle}
              type="text"
              name="author"
              placeholder={"Enter the book's author"}
            />
          </Label>
          <Label className={labelStyle}>
            <Input
              className={inputStyle}
              type="text"
              name="categories"
              placeholder={"Enter categories, separate by spacing"}
            />
          </Label>
          <Label className={labelStyle}>
            <Input
              className={inputStyle}
              type="text"
              name="publishCom"
              placeholder={"Enter the publish company"}
            />
          </Label>
          <Label className={labelStyle}>
            <Input
              className={inputStyle}
              type="date"
              name="publishDate"
              placeholder={"Enter the publish date"}
            />
          </Label>
          <Label></Label>
        </div>
      </div>
      <div className="w-2/5 h-full bg-sky-300">{/* <Upload /> */}</div>
    </div>
  );
}
export default AddProduct;
