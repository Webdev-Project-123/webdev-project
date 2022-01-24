import Component1 from "./Component1";
import Component2 from "./Component2";
import Average from "./Average"
import SumStar from "./SumStar";
function Detail(props) {
    return (
      <div className="">
          <div>
            <Component1 Component1={props.product} />
          </div>
          <div>
            <Component2 Component2={props.product} />
          </div>
      </div>
    );
  }
  export default Detail;