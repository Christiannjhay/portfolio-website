import { FacebookIcon } from "@/assets/Icons/Facebook";
import { GithubIcon } from "@/assets/Icons/Github";
import { InstagramIcon } from "@/assets/Icons/Instagram";
import { LinkedinIcon } from "@/assets/Icons/LinkedIn";
import { TwitterIcon } from "@/assets/Icons/Twitter";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <div className="flex gap-3 text-red-500">
      <div className="transition-transform transform hover:scale-125 hover:text-red-700 ease-in-out duration-200">
        <a
          href="https://www.linkedin.com/in/christian-elmer-jay-sugarol-491421242/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </div>
      <div className="transition-transform transform hover:scale-125 hover:text-red-700 ease-in-out duration-200">
        <a
          href="https://github.com/Christiannjhay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
      <div className="transition-transform transform hover:scale-125 hover:text-red-700 ease-in-out duration-200">
        <Link to="https://www.instagram.com/christiannjhay/">
          <InstagramIcon />
        </Link>
      </div>
      <div className="transition-transform transform hover:scale-125 hover:text-red-700 ease-in-out duration-200">
        <a
          href="https://x.com/Christiannjhay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
      <div className="transition-transform transform hover:scale-125 hover:text-red-700 ease-in-out duration-200">
        <a
          href="https://www.facebook.com/chan.jef.1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}
