import "../Style/custom.css";

function SpanWordy() {
  return (
    <div className="h-full w-[50px] md:flex hidden items-center justify-center">
      <div className="relative flex flex-col h-3/4 w-auto px-3 justify-center items-center gap-6 font-robotoS text-xl bg-[#fdae47]">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#f5f1f1] sideBanner"></div>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>D</span>
        <span>Y</span>
      </div>
    </div>
  );
}

export default SpanWordy;
