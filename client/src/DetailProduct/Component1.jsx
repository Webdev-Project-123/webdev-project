import { useEffect, useState } from "react";
import Rating from "../Home/Rating";
import Average from "./Average";
import SumStar from "./SumStar";

function Component1(props) {
    const item=props.Component1;
    let cart={
        productID: item["id"],
        productName: item["title"],
        productPrice: item["discount"],
        productQuantity: 0
    }
    useEffect(()=>{
        cart.productQuantity=counts;
        console.log(cart);
    })
    const number=item["in-stock"];
    const [counts, setCounts]=useState(1);
    const handleClick=(number,value)=>{
        if(value>=1 && value<=number)
        {
            setCounts(value);
        }
    }
    return (
      <div className="bg-[#FCECDD] lg:h-[500px] h-max lg:py-0 py-[20px] flex justify-center items-center lg:text-lg sm:text-sm">
                <div className="flex flex-wrap  justify-center  ">
                    {/*Image */}
                    <div className="flex justify-center items-center bg-[#fff] lg:w-[500px] lg:h-[450px] w-[340px] h-[340px] rounded-3xl
                                    shadow-phuongCustom shadow-black "
                    >
                        <img className="rounded-2xl m-1[0px] lg:h-[400px] lg:w-[450px] h-[340px] w-[340px] shadow-phuongCustomActive shadow-black
                                        lg:hover:h-[450px] lg:hover:w-[500px] lg:hover:rounded-3xl lg:duration-1000
                        " src={`${item["image"]}`} alt="" srcset="" />
                    </div>

                     {/*Detail */}
                    <div className=" bg-[#ffffff] lg:mt-0 md:mt-0 mt-[20px] lg:h-[450px] lg:min-w-[600px] sm:h-max sm:max-w-sm mx-[10px] 
                                    rounded-3xl shadow-phuongCustom shadow-black"
                    >
                        <div className="px-[10px]">
                        {/* Title */}
                        <h1 
                            className="font-bold text-2xl mt-[20px] font-robotoS"
                        >
                        {item["title"]}
                        </h1>
                        {/* Star */}
                        <div className="flex mt-2 opacity-50 items-center">
                            <Rating avg={Average( item["rating"] )}/>
                            <p className="ml-[10px]">Have {SumStar(item["rating"])} rating</p>
                        </div>
                            {/* ShortInformation */}
                        <div className="flex flex-wrap mt-[5px]">
                            {/* in4-1 */}
                            <div>
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Supplier:</p>
                                    <p className="text-base ml-[8px] font-semibold">{item["publishing-company"]}</p>
                                </div>
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Company:</p>
                                    <p className="text-base ml-[8px] font-semibold">{item["publishing-company"]}</p>
                                </div>
                            </div>
                                {/* in4-2 */}
                            <div className="lg:ml-[50px] sm:ml-0">
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Author:</p>
                                    <p className="text-base ml-[8px] font-semibold">{item["authors"]}</p>
                                </div>
                                <div className="flex">
                                     <p className="text-sm mt-[2px]">Types:</p>
                                    <p className="text-base ml-[8px] font-semibold">Paperback, Hardcover</p>
                                </div>
                            </div>

                        </div>
                        {/* Price */}
                        <div className="flex mt-[10px] flex-wrap items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="ml-[5px]">Price:</h3>
                           <p className="mt-[9px] ml-[10px] opacity-50 line-through
                           ">
                               {item["price"]}$
                           </p>
                            <p className="text-2xl  text-red-500 font-bold ml-[10px]">{item["discount"]}$</p>
                            <div className="flex items-center lg:ml-[20px] ml-[10px] bg-red-600 text-white px-[8px] py-[15px] rounded-3xl h-[20px] animate-bounce shadow-phuongCustom shadow-slate-500 ">
                                <p>Super sale</p>
                            </div>
                        </div>
                            {/* Chính sách*/}
                        <div className="mt-[10px] flex flex-wrap items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p className="text-sm ml-[5px]">Return policy:</p>
                            <p className="text-sm ml-[30px] font-semibold">Return products in one month</p>
                            <a href="#" className="text-base ml-[28px] text-sky-500 font-semibold">More informations</a>
                        </div>
                             {/* Delivery */}
                        <div className="mt-[10px] flex flex-wrap items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm text-[#61B15A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                            <p className="text-sm  ml-[5px]">Delivery:</p>
                            <p className="text-sm ml-[30px] font-semibold">4-7 days</p>
                        </div>
                            {/* Selecttion */}
                        <div className="flex flex-wrap mt-[10px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm text-violet-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <p className="text-sm ml-[5px]">Please choose types: </p>
                            <div>
                            <select className="ml-[20px] h-[32px] w-[125px] bg-[#1691d8] text-white rounded-2xl cursor-pointer
                                             shadow-gray-300 shadow-phuongCustom "
                            >
                                     <option value="1">Paperback</option>
                                     <option value="2">Hardcover</option>
                            </select>
                            </div>
                        </div>
                            {/* Quantity */}
                        <div className="flex  flex-wrap items-center mt-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <p className="text-sm ml-[5px]">Quantities: </p>
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
                            </div>
                                <p className="text-sm lg:mt-0 mt-[10px] ml-[20px] text-slate-800 font-bold"> Only have {item["in-stock"]} products</p>
                        </div>
                            {/* Add to the cart */}
                            <div className="mt-[20px] justify-center flex text-white h-[50px]">
                                <button className="border-solid border-2  bg-red-600 hover:bg-red-700 rounded-2xl w-[200px] h-[36px]">
                                    <div className="flex items-center  justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <p className="pl-[10px]">
                                            Add to the cart
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