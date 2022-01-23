import Component1 from "./Component1";
import Component2 from "./Component2";
import Average from "./Average"
import SumStar from "./SumStar";
function Detail(props) {
  // let avg=SumStar();
  // console.log(avg);
    return (
      <div className="">
          <div>
              <Component1  />
          </div>
          <div>
            <Component2 />
          </div>
      </div>
    );
  }
  export default Detail;