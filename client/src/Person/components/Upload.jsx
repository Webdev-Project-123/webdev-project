import { useEffect, useRef, useState } from "react";

function Upload({ setPopUs, popUp }) {
  const bgDisabled = useRef();

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target == bgDisabled.current) return setPopUs((prev) => !prev);
    };
    return () => {
      window.onclick = () => {};
    };
  }, []);

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar, popUp]);

  const handleOnUpload = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  const handleUploadAgain = () => {
    setAvatar();
  };

  const handleSubmit = () => {};

  return (
    <div
      ref={bgDisabled}
      className="absolute overflow-x-hidden z-50 top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center"
    >
      <div className="relative w-4/5 h-[90%] bg-[#eee] shadow-phuongProfile rounded-md flex justify-center items-center">
        <button
          onClick={() => setPopUs((prev) => !prev)}
          className="absolute top-5 right-5 text-[#3d1d1d] hover:text-[#a13a3a]"
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
        {!avatar ? (
          <div>
            <input
              type="file"
              className=""
              accept="image/png, image/jpg, iamge/jpeg"
              onChange={handleOnUpload}
            />
            <button>Choose file</button>
          </div>
        ) : (
          <div className="w-3/5 h-3/5 flex justify-center items-center flex-col text-xl gap-5">
            <p className="font-robotoS mt-7">Preview your avatar</p>
            <div className="max-w-[80%] max-h-[80%]">
              <img
                src={avatar?.preview}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-auto flex justify-center items-center gap-[100px] mb-7">
              <button
                onClick={handleUploadAgain}
                className="min-w-[180px] w-fit px-3 py-2 h-auto min-h-[40px] relative bg-[#fcd3ac] rounded-md transition-all ease-linear after:ease-out after:absolute after:bottom-0 after:left-0 after:rounded-md after:w-full after:h-0 after:bg-[#FEA82F] hover:after:h-full after:transition-all"
              >
                <span className="absolute top-1/2 left-1/2 w-full py-2 -translate-x-1/2 -translate-y-1/2 z-50">
                  Upload another
                </span>
              </button>
              <button
                onClick={handleSubmit}
                className="min-w-[180px] w-fit px-3 py-2 h-auto min-h-[40px] relative bg-[#fcd3ac] rounded-md transition-all ease-linear after:ease-out after:absolute after:bottom-0 after:left-0 after:rounded-md after:w-full after:h-0 after:bg-[#FEA82F] hover:after:h-full after:transition-all"
              >
                <span className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-50">
                  Submit
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
