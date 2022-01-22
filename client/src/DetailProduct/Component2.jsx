import { useState } from "react"
import Information from "./Information";
import Description from "./Description";
import Rate from "./Rate";
const tabs=["information","description","rate"]
function Component2() {
    const [tabList,settabList]=useState("information");
    return (
      <div className="h-max bg-[#f1d0b1]">
         <div className="ml-[80px] ">
             <div className="flex">
                {tabs.map(tab=>(
                <div className="flex">
                    <div  className=" opacity-50 bg-[#ecb260] hover:bg-[#a3640c] w-[150px] rounded-3xl p-3 ml-[10px] uppercase font-ubuntu font-bold text-center mt-[20px]"
                        key={tab}
                        style={ tabList===tab ?{
                                color: '#fff',
                                backgroundColor: '#FEA82F',
                                opacity:2,
                                }:{}
                        }
                        onClick={()=>settabList(tab)}
                 >
                     {tab}
                    </div>
                </div>
                ))
                }
            </div>
            <div className="pb-10">
                    <Information name={tabList}/>
                    <Description name={tabList}/>
                    <Rate name={tabList}/>
            </div>

        </div>
      </div>
    );
  }
  export default Component2;