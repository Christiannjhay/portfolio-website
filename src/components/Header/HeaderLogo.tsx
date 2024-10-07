import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

export default function HeaderLogo() {
  const navigate = useNavigate();

  const LogoNavigation = () => {
    navigate("/");
  };
  return (
    <div className="flex cursor-pointer" onClick={LogoNavigation}>
      <div className="pr-2">
        <img src={Logo} alt="Logo" className="min-w-4 w-4 mt-1" />
      </div>
      <div className="text-red-500 font-GeomRegular">Christian</div>
      <div className="text-white font-GeomRegular ">Sugarol</div>
    </div>
  );
}
