import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HomeIcon } from "@/assets/Icons/Home";
import { AboutIcon } from "@/assets/Icons/About";
import { FolderIcon } from "@/assets/Icons/Folder";
import { HamburgerMenu } from "@/assets/Icons/HamburgerMenu";
import { Link } from "react-router-dom";

export default function SideSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenu />
      </SheetTrigger>
      <SheetContent className="bg-black border-none">
        <div className="pt-10 flex flex-col gap-5 text-white font-GeomRegular">
          <Link to={"/"} className="flex gap-2">
            <div className="text-red-500">
              <HomeIcon />
            </div>
            <h1 className="mt-[6px]">Home</h1>
          </Link>
          <Link to={"/projects"} className="flex gap-2">
            <div className="text-red-500">
              <FolderIcon />
            </div>
            <h1 className="mt-[6px]">Projects</h1>
          </Link>
          <Link to={"/about"} className="flex gap-2">
            <div className="text-red-500">
              <AboutIcon />
            </div>
            <h1 className="mt-[6px]">About</h1>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
