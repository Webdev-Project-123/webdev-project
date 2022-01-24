import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="w-auto h-auto text-center text-2xl">
        Nothing Here, plead go back to{" "}
        <Link to="/">
          <span className="text-red-700">HomePage</span>
        </Link>
      </h1>
    </div>
  );
}

export default NoMatch;
