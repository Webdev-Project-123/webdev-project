import { useEffect } from "react/cjs/react.development";

function ListProduct({ handleToggleList }) {
  useEffect(() => {
    window.onclick = () => {
      handleToggleList();
    };
    return () => {
      window.onclick = () => {};
    };
  }, []);

  const initialData = [
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
    {
      id: 1,
      name: "name1",
      uploadDate: "1-1-1",
    },
  ];

  return (
    <div className="absolute overflow-x-hidden w-screen h-screen flex justify-center items-center z-50 bg-[rgba(0,0,0,0.6)] font-robotoS">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative md:w-4/5 w-[95%] h-4/5 flex justify-center items-center bg-[#fff4e4] rounded-md"
      >
        <button
          onClick={handleToggleList}
          className="absolute right-7 top-5 w-auto h-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="ld:w-4/5 md:w-[90%] w-full md:px-0 px-2 h-4/5 flex items-center flex-col overflow-y-scroll">
          {initialData.map(({ id, name, uploadDate }, index) => {
            return (
              <div
                className={`w-full h-auto py-4 flex ${
                  index % 2 === 0 ? "bg-[#fff4e6]" : "bg-[#f5e9d8]"
                }`}
              >
                <p className="w-[20%] text-center p-5">{id}</p>
                <p className="w-[60%] text-left border-l border-r border-[#421f1f] p-5">
                  {name}
                </p>
                <p className="w-[20%] text-center p-5">{uploadDate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ListProduct;
