import Rating from "../Home/Rating";

function CommentPerson() {
    return (
    <div>
        <div className="flex items-center">
            <img  className="rounded-full w-[40px]"src="http://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="" />
            <p className=" ml-[5px] font-bold text-sky-500">Nguyễn Văn Nguyễn</p>
            <div className="ml-[5px]">
             <Rating avg="5"/>
            </div>
        </div>

        <div className="ml-[50px]">
        <p className="text-xs mt-[-10px] opacity-75">Once week ago</p>
        <p className="w-[300px]">Truyện hay lắm mọi người</p>
        </div>
    </div>
    );
  }

export default CommentPerson;