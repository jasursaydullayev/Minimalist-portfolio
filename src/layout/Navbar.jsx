import logo from "../img/svg/cite-logo.svg";
import { Link, NavLink } from "react-router-dom";
import burger from "../img/svg/burger.svg";

function Navbar() {
  return (
    <div className="container nav-wrapper flex items-center justify-between  pt-[64px] mb-[54px]">
      <Link to={"/"}>
        <img src={logo} alt="cite-logo" width={60} height={32} />
      </Link>

      <div className="block drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="w-[24px]"
          >
            <img className="block" src={burger} alt="" width={24} height={13} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
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
