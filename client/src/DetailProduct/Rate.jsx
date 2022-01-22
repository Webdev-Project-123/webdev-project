import Rating from "../Home/Rating";
function Rate(props) {
     if(props.name=="rating")
     {
        const one=200;
        const two=50;
        const three=100;
        const four=150;
        const five=10;
         return (
        <div className="flex mt-[20px] lg:w-max bg-[#fff]  rounded-2xl shadow-phuongCustom font-robotoS">
            <div className=" flex flex-row m-4 text-lg flex-wrap items-center">
                    {/* ShortRating */}

                    <div className="flex flex-col items-center justify-center ml-[25px]">
                        <div className="flex  items-end text-3xl">
                            <p className="text-7xl text-yellow-400">4</p>/5
                        </div>
                        <div>
                            <Rating avg={4}/>
                        </div>
                        <p className="text-base text-stone-500">(Có 99 đánh giá)</p>
                    </div>

                    {/* DetailRating */}
                        <div className="flex lg:ml-[100px] ">   
                            {/* Numberstar */}
                            <div>
                                    <div className="mt-[10px]">5 sao</div>
                                    <div className="mt-[10px]">4 sao</div>
                                    <div className="mt-[10px]">3 sao</div>
                                    <div className="mt-[10px]">2 sao</div>
                                    <div className="mt-[10px]">1 sao</div>
                            </div>
                            <div className="mt-[5px] ml-[5px]">
                                    <div className={`mt-[20px] h-1 w-[200px] bg-stone-500 before:absolute before:h-1 before:w-[${five}px] before:bg-yellow-300`}></div>
                                    <div className={`mt-[30px] h-1 w-[200px] bg-stone-500 before:absolute before:h-1 before:w-[${four}px] before:bg-yellow-300`}></div>
                                    <div className={`mt-[35px] h-1 w-[200px] bg-stone-500 before:absolute before:h-1 before:w-[${three}px] before:bg-yellow-300`}></div>
                                    <div className={`mt-[35px] h-1 w-[200px] bg-stone-500 before:absolute before:h-1 before:w-[${two}px] before:bg-yellow-300`}></div>
                                    <div className={`mt-[35px] h-1 w-[200px] bg-stone-500 before:absolute before:h-1 before:w-[${one}px] before:bg-yellow-300`}></div>

                            </div>
                            <div className="ml-[5px]">
                                    <div className="mt-[10px]">100%</div>
                                    <div className="mt-[10px]">100%</div>
                                    <div className="mt-[10px]">50% </div>
                                    <div className="mt-[10px]">10% </div>
                                    <div className="mt-[10px]">25% </div>
                            </div>
                        </div>
                    {/* Comment */}

                    <div className="lg:ml-[100px]">
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