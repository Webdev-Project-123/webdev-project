import { useState } from "react";
import Rating from "../Home/Rating";

function Component1() {
    const number=10;
    const [counts, setCounts]=useState(1);
    const handleClick=(number,value)=>{
        if(value>=1 && value<=number)
        {
            setCounts(value);
        }

    }
    return (
      <div className="bg-[#FCECDD] h-[550px] relative flex justify-center items-center">
            <div  className="absolute bg-[#ffffff] w-[1100px] h-[450px] my-[25px] 
                            rounded-3xl shadow-phuongCustomActive  shadow-black 
                            before:absolute before:content-[''] before:w-[250px] 
                            before:h-[450px] before:bg-[#FEA82F] before:rounded-l-3xl 
                            "
            >
                <div className="absolute flex flex-wrap">
                    {/*Image */}
                     <div className=" mx-[50px] my-[25px] w-[400px] h-[400px] z-1 rounded-2xl 
                                         shadow-phuongCustom  shadow-black 
                                         duration-500
                                         hover:w-[420px] hover:h-[420px] hover:mx-[40px] hover:mt-[15px]
                     ">
                        <img className="rounded-2xl" src="https://cdn0.fahasa.com/media/catalog/product/6/0/600chom-sao-linh-thu-_-tap-2.jpg" alt="" />
                    </div>
                     {/*Detail */}
                    <div className=" bg-[#ffffff] w-[600px] h-[450px] rounded-3xl">
                        {/* Title */}
                        <h1 
                            className="font-bold text-2xl mt-[20px] font-robotoS"
                        >
                        Chòm Sao Linh Thú - Tập 2 
                        </h1>
                        {/* Star */}
                        {/* <Rating avg={3}/> */}
                        <div className="flex mt-2 opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p className="ml-[10px]">99 đánh giá</p>
                        </div>
                            {/* ShortInformation */}
                        <div className="flex flex-wrap mt-[5px]">
                            {/* in4-1 */}
                            <div>
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Nhà cung cấp:</p>
                                    <p className="text-base ml-[8px] font-semibold">NXB Kim Đồng</p>
                                </div>
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Nhà xuất bản:</p>
                                    <p className="text-base ml-[8px] font-semibold">NXB Kim Đồng</p>
                                </div>
                            </div>
                                {/* in4-2 */}
                            <div className="ml-[50px]">
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Tác giả:</p>
                                    <p className="text-base ml-[8px] font-semibold">Matsuri Akino</p>
                                </div>
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Hình thức bìa:</p>
                                    <p className="text-base ml-[8px] font-semibold">Bìa mềm, Bìa cứng</p>
                                </div>
                            </div>

                        </div>
                        {/* Price */}
                        <div className="flex mt-[10px] flex-wrap items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="ml-[5px]">Giá:</h3>
                           <p className="mt-[9px] ml-[10px] opacity-50 line-through
                           ">
                               70000đ
                           </p>
                            <p className="text-3xl text-red-500 font-bold ml-[10px]">50000đ</p>
                            <div className="flex items-center ml-[20px] bg-red-600 text-white px-[8px] py-[15px] rounded-3xl h-[20px] animate-bounce shadow-phuongCustom shadow-slate-500 ">
                                <p>Siêu sale</p>
                            </div>
                        </div>
                            {/* Chính sách*/}
                        <div className="mt-[10px] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p className="text-sm ml-[5px]">Chính sách đổi trả:</p>
                            <p className="text-sm ml-[30px] font-semibold">Đổi trả sản phẩm trong 30 ngày</p>
                            <a href="#" className="text-base ml-[20px] text-sky-500 font-semibold">Xem thêm</a>
                        </div>
                             {/* Delivery */}
                        <div className="mt-[10px] flex items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm text-[#61B15A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                            <p className="text-sm  ml-[5px]">Thời gian giao hàng dự kiến:</p>
                            <p className="text-sm ml-[30px] font-semibold">4-7 ngày</p>
                        </div>
                            {/* Selecttion */}
                        <div className="flex mt-[10px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm text-violet-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <p className="text-sm ml-[5px]">Vui lòng chọn loại bìa: </p>
                            <div>
                            <select className="ml-[20px] h-[32px] w-[125px] bg-[#1691d8] text-white rounded-2xl cursor-pointer shadow-gray-300 shadow-phuongCustom pl-[20px]">
                                     <option value="1">Bìa mềm</option>
                                     <option value="2">Bìa cứng</option>
                            </select>
                            </div>
                        </div>
                            {/* Quantity */}
                        <div className="flex  items-center mt-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <p className="text-sm ml-[5px]">Số lượng: </p>
                            <div className="flex item-center ml-[20px]">
                                <button 
                                    className="mx-2 border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500"
                                    onClick={()=>handleClick(number,counts-1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="mx-2 ">
                                    {counts}
                                </div>
                                <button 
                                    className="mx-2 border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500"
                                    onClick={()=>handleClick(number,counts+1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <p className="text-sm ml-[20px] text-slate-800 font-bold">Còn {number} sản phẩm</p>
                            </div>
                        </div>
                            {/* Add to the cart */}
                            <div className="mt-[20px] flex text-white h-[50px]">
                                <button className="border-solid border-2  bg-red-600 hover:bg-red-700 rounded-2xl w-[200px] h-[36px]">
                                    <div className="flex items-center  justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <p className="pl-[10px]">
                                            Thêm vào giỏ hàng
                                        </p>
                                    </div>
                                </button>
                            </div>


                    </div>
                </div>
            </div>
      </div>
    );
  }
  export default Component1;