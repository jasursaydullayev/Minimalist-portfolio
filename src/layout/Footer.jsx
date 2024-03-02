import { Link, NavLink } from "react-router-dom";
import logo from "../img/svg/cite-dark-logo.svg";
import github from "../img/svg/github.svg";
import inLogo from "../img/svg/in.svg";
import twitter from "../img/svg/twitter.svg";

function Footer() {
  return (
   <div className="w-full footer h-[80px] pt-6 bg-grayish">
     <div className="container text-[#fff] footer-container flex items-center justify-between">
     <div className="flex img-ul gap-[48px] items-center">
        <img src={logo} alt="" width={60} height={32} />
        <ul className="flex items-footer gap-[43px]">
          <NavLink className={({ isActive }) => (isActive ? "text-links-green" : "")} to={'/'}><li>HOME</li></NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-links-green" : "")} to={'/portfolio'}><li>PORTFOLIO</li></NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-links-green" : "")} to={'/contact'}><li>CONTACT ME</li></NavLink>
        </ul>
      </div>
      <div className="flex gap-4"> 
        <img src={github} alt="" width={25} height={24} />
        <img src={twitter} alt="" width={24} height={19.5} />
        <img src={inLogo} alt="" width={24} height={24} />
     </div>
    </div>
   </div>
  );
}

export default Footer;
