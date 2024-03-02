import logo from "../img/svg/cite-logo.svg";
import { Link, NavLink } from "react-router-dom";
import burger from "../img/svg/burger.svg";

function Navbar() {
  return (
    <div className="container nav-wrapper flex items-center justify-between pt-[64px] mb-[54px]">
      <Link to={"/"}>
        <img src={logo} alt="cite-logo" width={60} height={32} />
      </Link>
      <img className="block" src={burger} alt="" width={24} height={13} />
      <ul className="flex item gap-[42px] text-grayish">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-links-green" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to={"portfolio"}
          className={({ isActive }) => (isActive ? "text-links-green" : "")}
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to={"contact"}
          className={({ isActive }) => (isActive ? "text-links-green" : "")}
        >
          CONTACT ME
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
