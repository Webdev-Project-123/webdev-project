import { useState } from "react";
import Rating from "../Home/Rating";
import CommentPerson from "./CommentPerson";
function Rate(props) {
     if(props.name=="rating")
     {
        const [notify, setNotify]=useState("")
        const handleNotify=(value)=>{
            setNotify(value);
            setTimeout(()=>{
                setNotify("");
            },3000)
        };
         return (
        <div className="flex mt-[20px] lg:w-max bg-[#fff]  rounded-2xl shadow-phuongCustom font-robotoS">
            <div className=" flex flex-row m-4 text-lg flex-wrap justify-center items-center">
                    {/* ShortRating */}

                    <div className="flex flex-col items-center justify-center lg:ml-[25px]">
                        <div className="flex  items-end text-3xl">
                            <p className="text-7xl text-yellow-400">4</p>/5
                        </div>
                        <div>
                            <Rating avg={4}/>
                        </div>
                        <p className="text-base text-stone-500">(Have 99 rating)</p>
                    </div>   
                           
                    {/* Comment */}

                    <div className="lg:ml-[100px] md:ml-[25px] mt-[20px]">
                        {/* person1 */}
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
                         {/* person2 */}
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
                        {/* Person3 */}
                        <CommentPerson/>

                    </div>
                    {/* CommentRating */}
                    <div className="flex flex-col lg:mt-0 mt-[10px]">
                            <h1 className="font-bold text-center">Comment rating</h1>
                            <div className=" flex flex-col h-[100%]">
                                <label>Star numbers: </label>
                                <input className=" rounded-xl placeholder:italic placeholder:text-sm border-solid border-2 border-indigo-600" name="" id="" required placeholder="Number..." type="number"/>
                            </div>
                            <div className=" flex flex-col h-[100%]">
                                <label>Content comment: </label>
                                <input className="  rounded-xl placeholder:italic placeholder:text-sm  border-solid border-2 border-indigo-600" name="" id="" required placeholder="Text..." type="text" />
                            </div>
                            <input className=" rounded-xl cursor-pointer w-[100px] h-[30px] bg-orange-500 text-white mt-[15px]" type="submit" value="SEND"
                            onClick={()=>handleNotify("⚠️Please buy this product before rating")}
                            />
                        <div>
                            <p className=" text-center animate-pulse text-red-600 font-bold mt-[20px] max-w-[200px] text-sm">{notify}</p>
                        </div>
                    </div>
            </div>
        </div>
             );
     }
     return (
         <div>
             
         </div>
     )
     
     
   }
   export default Rate;