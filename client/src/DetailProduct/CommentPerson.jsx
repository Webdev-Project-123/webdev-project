import Rating from "../Home/Rating";

function CommentPerson(props) {
    return (
    <div>
        <div className="flex items-center">
            <img  className="rounded-full w-[40px]"src={`${props.personComment["avatar"]}`} alt="" />
            <p className=" ml-[5px] font-bold text-sky-500">{props.personComment["name"]}</p>
            <div className="ml-[5px]">
             <Rating avg={props.personComment["stars"]}/>
            </div>
        </div>

        <div className="ml-[50px]">
        <p className="text-xs mt-[-10px] opacity-75">Once week ago</p>
        <p className="w-[250px]">{props.personComment["content"]}</p>
        </div>
    </div>
    );
  }

export default CommentPerson;