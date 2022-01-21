function Component1() {
    return (
      <div className="bg-[#FCECDD] h-[500px] relative flex justify-center">
            <div  className="absolute bg-[#ffffff] w-[1100px] h-[450px] my-[25px] 
                            rounded-3xl shadow-lg  shadow-black 
                            before:absolute before:content-[''] before:w-[250px] 
                            before:h-[450px] before:bg-[#FEA82F] before:rounded-l-3xl 
                            "
            >
                <div className="absolute flex flex-wrap">
                    {/*Image */}
                     <div className=" mx-[50px] my-[25px] w-[400px] h-[400px] z-1 rounded-2xl  shadow-lg  shadow-black ">
                        <img className="rounded-2xl" src="https://cdn0.fahasa.com/media/catalog/product/6/0/600chom-sao-linh-thu-_-tap-2.jpg" alt="" />
                    </div>
                     {/*Detail */}
                    <div className=" bg-[#ffffff] w-[600px] h-[450px] rounded-3xl">
                        <h1 
                            className="font-bold text-2xl mt-[10px] font-mono"
                        >
                        Chòm Sao Linh Thú - Tập 2
                        </h1>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  export default Component1;