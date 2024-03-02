import manage from "../img/png/manage.png";
import bookmark from "../img/png/bookmark.png";
import insure from "../img/png/insure.png";
import fylo from "../img/png/fylo.png";
import { Link, NavLink } from "react-router-dom";

 


function Portfolio() {
  return (
    <div>
      <div className="flex all-wrapper gap-[125px] mb-[80px]">
        <img className="h-[500px] manage-img" src={manage} alt="" />
        <div>
          <hr className="w-full all-hr max-w-[350px] h-[2px] opacity-15 bg-grayish mb-[103px] tracking-[-0.36px]" />
          <h2 className="font-ibra font-bold text-[40px] leading-[42px] mb-[28px]">
            Manage
          </h2>
          <p className="w-[350px] all-text font-normal text-[16px] leading-[30px] opacity-80 mb-[24px]">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <NavLink to={"/portfolio/manage"}>
            <button className="w-[175px] all-btn h-[48px] hover:bg-grayish hover:text-white font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px] mb-[103px]">
              VIEW PROJECT
            </button>
          </NavLink>
          <hr className="w-full max-w-[350px]  h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        </div>
      </div>
      <div className="flex all-wrapper gap-[125px] mb-[80px]">
        <div>
        <img className="manage-img h-[500px] mb-[32px] hidden-book" src={bookmark} alt="" />
          <hr className="w-full max-w-[350px] super-hr h-[2px] opacity-15 bg-grayish mb-[103px] tracking-[-0.36px]" />
          <h2 className="font-ibra font-bold text-[40px] leading-[42px] mb-[28px]">
            Bookmark
          </h2>
          <p className="w-[350px] font-normal all-text text-[16px] leading-[30px] opacity-80 mb-[24px]">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <NavLink to={"/portfolio/bookmark"}>
            <button className="w-[175px] all-btn h-[48px] hover:bg-grayish hover:text-white font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px] mb-[103px]">
              VIEW PROJECT
            </button>
          </NavLink>
          <hr className="w-full max-w-[350px] all-hr h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        </div>
        <img className="w-[540px] hidden-hr h-[500px]" src={bookmark} alt="" />
      </div>

      <div className="flex all-wrapper gap-[125px] mb-[80px]">
        <img className="w-[540px] manage-img h-[500px]" src={insure} alt="" />
        <div>
          <hr className="w-full max-w-[350px] super-hr h-[2px] opacity-15 bg-grayish mb-[103px] tracking-[-0.36px]" />
          <h2 className="font-ibra font-bold text-[40px] leading-[42px] mb-[28px]">
            Insure
          </h2>
          <p className="w-[350px] all-text font-normal text-[16px] leading-[30px] opacity-80 mb-[24px]">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully-responsive landing page. The only JavaScript this
            project required was to enable the toggling of the mobile
            navigation.
          </p>
          <NavLink to={"/portfolio/insure"}>
            <button className="w-[175px] all-btn hover:bg-grayish hover:text-white h-[48px] font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px] mb-[103px]">
              VIEW PROJECT
            </button>
          </NavLink>
          <hr className="w-full max-w-[350px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        </div>
      </div>
      <div className="flex all-wrapper gap-[125px] mb-[150px]">
      <img className="w-[540px] hidden-book manage-img  h-[500px]" src={fylo} alt="" />
        <div>
          <hr className="w-full max-w-[350px] hidden-hr h-[2px] opacity-15 bg-grayish mb-[103px] tracking-[-0.36px]" />
          <h2 className="font-ibra font-bold text-[40px] leading-[42px] mb-[28px]">
            Fylo
          </h2>
          <p className="w-[350px] font-normal all-text text-[16px] leading-[30px] opacity-80 mb-[24px]">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully-responsive. I took a mobile-first approach and used modern CSS
            like Flexbox and Grid for layout purposes.
          </p>
          <NavLink to={"/portfolio/fylo"}>
            <button className="w-[175px] all-btn h-[48px] hover:bg-grayish hover:text-white font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px] mb-[103px]">
              VIEW PROJECT
            </button>
          </NavLink>
          <hr className="w-full max-w-[350px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        </div>
        <img className="w-[540px] hidden-hr h-[500px]" src={fylo} alt="" />
      </div>

      <div className="flex contact items-center justify-between mb-[150px]">
        <h2 className="w-[350px] contact-text font-ibra font-bold text-[40px] leading-[42px] tracking-[-0.36px]">
          Interested in doing a project together?
        </h2>
        <hr className="w-full hidden-hr max-w-[534px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        <Link to={'/contact'}>
        <button className="w-[162px] h-[48px] hover:bg-grayish hover:text-white font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px]">
          CONTACT ME
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
