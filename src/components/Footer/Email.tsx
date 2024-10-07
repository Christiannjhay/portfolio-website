import { GmailIcon } from "@/assets/Icons/Gmail";

export default function Email() {
  return (
    <div className="flex gap-2 ">
      <div className="text-red-500">
        <GmailIcon />
      </div>
      <div className="mt-[5px] font-GeomLight text-sm text-white">
        <h1>sugarolchristian8@gmail.com</h1>
      </div>
    </div>
  );
}
