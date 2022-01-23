import { useEffect } from "react/cjs/react.development";

function ListProduct({ handleToggleList }) {
  useEffect(() => {
    window.onclick = () => {
      handleToggleList();
    };
  }, []);
  return (
    <div className="absolute overflow-hidden w-screen h-screen flex justify-center items-center z-50 bg-[rgba(0,0,0,0.6)]">
      <div className="w-4/5 h-4/5 flex justify-center items-center">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
export default ListProduct;
