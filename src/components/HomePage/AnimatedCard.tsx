export default function AnimatedCard() {
  return (
    <div className="relative  grid grid-rows-2 gap-1 w-[100%] h-[85%] overflow-hidden">
      <div className="row-span-1 w-full h-full gap-3 pb-2 overflow-hidden  grid grid-cols-12">
        <div className="animated-card-1 relative col-span-4 w-full h-full bg-[#0A0A0A] rounded-br-lg"></div>
        <div className="animated-card-2 relative col-span-8 w-full h-full bg-[#0A0A0A] rounded-bl-lg"></div>
      </div>
      <div className="row-span-1 grid grid-cols-12 pt-2 gap-3 w-full h-full ">
        <div className="animated-card-3 relative col-span-7 w-full h-full bg-[#0A0A0A] rounded-tr-lg"></div>
        <div className="animated-card-4 relative col-span-5 w-full h-full bg-[#0A0A0A] rounded-tl-lg"></div>
      </div>
    </div>
  );
}
