import { Link } from "react-router-dom";

export default function HeaderNavigation() {
  return (
    <nav className="nav text-white list-none flex gap-4 lg:gap-10 font-GeomRegular ">
      <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-red-500 after:h-[3px] after:w-0 after:top-6 after:transition-all after:duration-300 hover:after:w-full">
        <Link to="/">Home</Link>
      </li>
      <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-red-500 after:h-[3px] after:w-0 after:top-6 after:transition-all after:duration-300 hover:after:w-full">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-red-500 after:h-[3px] after:w-0 after:top-6 after:transition-all after:duration-300 hover:after:w-full">
        <Link to="/about">About</Link>
      </li>

      <div>
        <Link
          to={
            "https://drive.google.com/uc?export=download&id=1qLwIi72ozxUNK1oG8hdWwYlPcQUp_QPc"
          }
        >
          <button className="bg-red-500 px-3 rounded-xl hover:bg-red-700">
            Resume
          </button>
        </Link>
      </div>
    </nav>
  );
}
