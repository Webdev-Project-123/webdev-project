function Information(props) {
   console.log(props.name);
    if(props.name=="information")
    {
        return (
            <div className="flex mt-[20px] ">
              <div className="h-[300px] bg-[#fff] w-[1100px] rounded-2xl shadow-phuongCustom">
                    <div>
                        
                    </div>
                    <div>

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
  export default Information;