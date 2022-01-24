
function YourCart() {
    return (
      <div className="lg:text-lg md:text-md text-sm">
          <div className="bg-[#FFC288] h-max min-h-[650px] ">
              
                <div class=" font-serif font-bold lg:text-4xl md:text-4xl text-2xl text-center p-6  text-rose-900">
                    Welcome to your cart!
                </div>

                <div className="flex flex-wrap justify-center ">
                    <div className=" flex flex-col  items-center lg:w-[800px] w-[99%] lg:mt-0 ">
                        {/* 1 */}
                        <div className="flex bg-[#fff]  mt-[2%] min-h-[100px]  h-max  w-[90%] rounded-xl ">
                            <div className="my-2 ml-2 font-ubuntu lg:min-w-[650px] md:min-w-[650px] ">
                                <div className="flex flex-wrap">
                                    <p className="font-bold">ID:</p>
                                    <p className="ml-[5px]">1</p>
                                </div>
                                <div className="flex flex-wrap  lg:max-w-[600px] md:max-w-[600px] max-w-[250px] ">
                                    <p className="font-bold">Name: </p>
                                    <p className="ml-[5px]">Nguyễn Ngọc Nam Nguyễn Ngọc Nam Nam Nam Nguyễn Ngọc</p>
                                </div>
                                <div className="flex flex-wrap ">
                                    <p className="font-bold">Prices:</p>
                                    <p className="ml-[5px] font-bold text-red-600">50$</p>
                                    <p className="">/product</p>
                                </div>
                                <div className="flex  ">
                                    <p className="mr-[5px] font-bold">Quantities: </p>
                                    <button className="cursor-pointer ml-[20px] border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <p className="ml-[20px]">3</p>
                                    <button className="cursor-pointer ml-[20px] border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ml-5 ">
                                    <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </button>
                            </div>
                            
                        </div>
                            {/* 2 */}
                            <div className="flex bg-[#fff]  mt-[2%] min-h-[100px]  h-max  w-[90%] rounded-xl ">
                            <div className="my-2 ml-2 font-ubuntu lg:min-w-[650px] md:min-w-[650px] ">
                                <div className="flex flex-wrap">
                                    <p className="font-bold">ID:</p>
                                    <p className="ml-[5px]">1</p>
                                </div>
                                <div className="flex flex-wrap  lg:max-w-[600px] md:max-w-[600px] max-w-[250px] ">
                                    <p className="font-bold">Name: </p>
                                    <p className="ml-[5px]">Nguyễn Ngọc Nam Nguyễn Ngọc Nam Nam Nam Nguyễn Ngọc</p>
                                </div>
                                <div className="flex flex-wrap ">
                                    <p className="font-bold">Prices:</p>
                                    <p className="ml-[5px] font-bold text-red-600">50$</p>
                                    <p className="">/product</p>
                                </div>
                                <div className="flex  ">
                                    <p className="mr-[5px] font-bold">Quantities: </p>
                                    <button className="cursor-pointer ml-[20px] border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <p className="ml-[20px]">3</p>
                                    <button className="cursor-pointer ml-[20px] border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ml-5 ">
                                    <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </button>
                            </div>
                            
                        </div>
                            {/* 3 */}
                            <div className="flex bg-[#fff]  mt-[2%] min-h-[100px]  h-max  w-[90%] rounded-xl ">
                            <div className="my-2 ml-2 font-ubuntu lg:min-w-[650px] md:min-w-[650px] ">
                                <div className="flex flex-wrap">
                                    <p className="font-bold">ID:</p>
                                    <p className="ml-[5px]">1</p>
                                </div>
                                <div className="flex flex-wrap  lg:max-w-[600px] md:max-w-[600px] max-w-[250px] ">
                                    <p className="font-bold">Name: </p>
                                    <p className="ml-[5px]">Nguyễn Ngọc Nam Nguyễn Ngọc Nam Nam Nam Nguyễn Ngọc</p>
                                </div>
                                <div className="flex flex-wrap ">
                                    <p className="font-bold">Prices:</p>
                                    <p className="ml-[5px] font-bold text-red-600">50$</p>
                                    <p className="">/product</p>
                                </div>
                                <div className="flex  ">
                                    <p className="mr-[5px] font-bold">Quantities: </p>
                                    <button className="cursor-pointer ml-[20px] border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <p className="ml-[20px]">3</p>
                                    <button className="cursor-pointer ml-[20px] border-solid border-2 border-amber-500 rounded-2xl hover:bg-amber-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ml-5 ">
                                    <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </button>
                            </div>
                            
                        </div>
                            {/* ----- */}
                    </div>
                    {/* Order Detail */}
                    <div className=" rounded-xl lg:ml-[3%] lg:mt-[15px] mt-[5%] bg-[#fff] min-h-[100px]  h-max lg:w-[25%] w-[90%] ">
                        <h1 className="text-center mt-[10px] font-bold text-sky-500 font-xl">
                                Order detail
                        </h1>
                        <div className="flex ml-[10px] mt-[10px]">
                            <p className="font-bold">Total quantitiy:</p>
                            <p className="ml-[10px]">3</p>
                        </div>
                        <div className="flex ml-[10px] mt-[10px]">
                            <p className="font-bold">Total money:</p>
                            <p className="ml-[10px]">150$</p>
                        </div>
                        <div className="flex justify-center my-[20px]">

                        <button className="  cursor-pointer   bg-red-600 text-white border-solid border-2 border-amber-500 rounded-xl hover:bg-amber-500"

                        >
                                Payment
                        </button>
                        </div>
                        
                    </div>

                </div>
          </div>
      </div>
    );
  }
  
export default YourCart;