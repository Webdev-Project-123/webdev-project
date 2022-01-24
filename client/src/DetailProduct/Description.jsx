import { useEffect } from "react";

function Description(props) {
    
    if(props.name=="description")
    {
         useEffect(()=>{
             document.getElementById('description').innerHTML=props.description["description"];
          },[props.description["description"]])
         return (
               <div className="flex  justify-center mt-[20px] h-max bg-[#fff] w-auto rounded-2xl shadow-phuongCustom lg:w-[1100px]">
                   <div id="description" className=" m-4 text-lg font-robotoS">

                   </div>
               </div>
             );
     }
     return (
         <div>
             
         </div>
     )
     
     
   }
   export default Description;