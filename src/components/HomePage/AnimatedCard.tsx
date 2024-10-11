export default function AnimatedCard() {
  return (
    <div className="relative  grid grid-rows-2 gap-1 w-[100%] h-[85%] overflow-hidden">
      <div className="row-span-1 w-full h-full gap-3 pb-2 overflow-hidden  grid grid-cols-12">
        <div className="animated-card-1 relative col-span-4 w-full h-full bg-[#0A0A0A] rounded-br-lg">
          <div className="animated-card-1-child absolute inset-0 w-[40%] h-[30%] z-10 rounded-br-lg">
            <div className="w-full h-full rounded-br-lg bg-[#0A0A0A]"></div>
          </div>
        </div>
        <div className="animated-card-2 relative col-span-8 w-full h-full bg-[#0A0A0A] rounded-bl-lg">
          <div className="absolute animated-card-2-child w-[80%] h-[60%] top-0 right-0 rounded-bl-lg z-10">
            <div className="w-full h-full rounded-bl-lg bg-[#0A0A0A]"></div>
          </div>
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-12 pt-2 gap-3 w-full h-full ">
        <div className="animated-card-3 relative col-span-7 w-full h-full bg-[#0A0A0A] rounded-tr-lg">
          <div className="animated-card-3-child absolute bottom-0 left-0 w-[80%] h-[30%] rounded-tr-lg bg-[#0A0A0A] transform -translate-x-1/2">
            <div className="w-full h-full bg-[#0A0A0A] rounded-tr-lg"></div>
          </div>
        </div>
        <div className="animated-card-4 relative col-span-5 w-full h-full bg-[#0A0A0A] rounded-tl-lg">
          <div className="absolute animated-card-4-child bottom-0 right-0 w-[90%] h-[80%] bg-[#0A0A0A]  z-10 rounded-tl-lg">
            <div className="w-full h-full rounded-tl-lg bg-[#0A0A0A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
