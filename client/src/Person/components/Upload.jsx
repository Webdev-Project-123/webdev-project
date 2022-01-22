import { useEffect, useRef, useState } from "react";

function Upload({ setPopUs }) {
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
    // return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  const handleOnUpload = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div
      ref={bgDisabled}
      className="absolute z-50 top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center"
    >
      <div className="relative w-4/5 min-h-[80%] bg-[#eee] shadow-phuongProfile flex justify-center items-center">
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
          <input
            type="file"
            className="block"
            accept="image/png, image/jpg, iamge/jpeg"
            onChange={handleOnUpload}
          />
        ) : (
          <div className="w-3/5 h-3/5 flex justify-center items-center flex-col text-xl gap-5">
            <p className="font-robotoS mt-7">Preview your avatar</p>
            <img src={avatar?.preview} className="w-[wh] h-[wh] object-fill" />
            <div className="w-full h-auto flex justify-center items-center gap-[100px] mb-7">
              <button className="min-w-[150px] w-fit px-3 py-2 h-auto bg-[#333]">
                Upload another
              </button>
              <button className="min-w-[150px] w-fit px-3 py-2 h-auto bg-[#333]">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
