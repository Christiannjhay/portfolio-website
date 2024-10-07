import { ResumeIcon } from "@/assets/Icons/Resume";
import SideSheetMenu from "../Header/SideSheetMenu";
import HeaderNavigation from "../Header/HeaderNavigation";
import HeaderLogo from "../Header/HeaderLogo";

export default function Header() {
  return (
    <div className="w-full p-3 grid grid-cols-12 bg-black ">
      <div className="flex col-span-10 md:col-span-4 md:px-20  overflow-hidden">
        <HeaderLogo />
      </div>
      <div className="col-span-8 justify-end px-20 hidden md:flex">
        <HeaderNavigation />
      </div>
      <div className="col-span-2 gap-2 justify-end items-center text-white flex md:hidden ">
        <div className="text-xs p-2 bg-red-500 rounded-lg">
          <ResumeIcon />
        </div>
        <div>
          <SideSheetMenu />
        </div>
      </div>
    </div>
  );
}