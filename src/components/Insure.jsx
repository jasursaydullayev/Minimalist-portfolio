import insure from '../img/png/port-nav-3.png'
import first from "../img/png/insure.png";
import second from "../img/png/insure-2.jpg";
import left from "../img/svg/left.svg";
import right from "../img/svg/right.svg";
import { Link } from "react-router-dom";

function Insure() {
  return (
    <div>
    <div className="mb-[64px]">
      <img className="w-full min-h-[140px] first-bg mb-[115px]" src={insure} alt="" />
      <div className="flex footer-container gap-[125px]">
        <div className="w-full">
          <hr className="w-full max-w-[350px] h-[2px] opacity-15 mb-[48px] bg-grayish tracking-[-0.36px]" />
          <h2 className="font-ibra font-bold text-[40px] leading-[42px] mb-[29px]">
          Insure
          </h2>
          <p className="w-[354px] all-text font-normal text-[15px] leading-[30px] opacity-80 mb-[23px]">
          This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.
          </p>
          <h3 className="font-bold text-[16px] leading-[30px] text-links-green mb-[16px]">
            Interaction Design / Front End Development
          </h3>

          <h3 className="font-bold text-[16px] leading-[30px] text-links-green mb-[32px]">
            HTML / CSS / JS
          </h3>
          <button className="w-[178px] h-[48px] hover:bg-grayish hover:text-white font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px] mb-[48px]">
            VISIT WEBSITE
          </button>
          <hr className="w-full max-w-[350px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        </div>
        <div>
          <h3 className="font-normal text-[32px] font-ibra leading-[42px] tracking-[-0.29px] mb-[28px]">
            Project Background
          </h3>
          <p className="w-[635px] all-text font-normal text-[15px] leading-[30px] opacity-80 mb-[40px]">
          This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.
          </p>
          <h3 className="font-normal font-ibra text-[32px] leading-[42px] tracking-[-0.29px] mb-[28px]">
            Static Previews
          </h3>
          <img className="mb-[32px] z-img w-full max-w-[635px] h-[400px] object-top" src={first} alt="" />
          <img
            className="mb-[64px]"
            src={second}
            alt=""
          />
        </div>
      </div>
    </div>
    <div>
      <hr className="w-full h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
      <div className="flex justify-between items-center">
        <Link to={"/portfolio/bookmark"} className="flex strelka-1 gap-[25px] items-center">
          <img src={left} alt="" width={8} height={16} />
          <div>
            <h4 className="font-normal font-ibra text-[32px] leading-[36px] tracking-[-0.29px]">
            Bookmark
            </h4>
            <p className="text-[16px] leading-[30px] opacity-50">
              Previous Project
            </p>
          </div>
        </Link>
        <div className="h-[130px] w-[1px] bg-grayish opacity-15"></div>

        <Link
          to={"/portfolio/fylo"}
          className="flex strelka-2 gap-[25px] items-center"
        >
           <img className="hidden-book" src={right} alt="" width={8} height={16} />
          <div>
            <h4 className="font-normal font-ibra text-[32px] leading-[36px] tracking-[-0.29px] ml-[77px]">
            Fylo
            </h4>
            <p className="text-[16px] ml-[43px] leading-[30px] opacity-50">
              Next Project
            </p>
          </div>
          <img className="hidden-hr" src={right} alt="" width={8} height={16} />
        </Link>
      </div>
      <hr className="w-full h-[2px] opacity-15 bg-grayish tracking-[-0.36px] mb-[115px]" />
      <div className="flex items-center contact justify-between mb-[150px]">
        <h2 className="w-[350px] contact-text font-ibra font-bold text-[40px] leading-[42px] tracking-[-0.36px]">
          Interested in doing a project together?
        </h2>
        <hr className="w-full hidden-hr max-w-[534px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        <Link to={"/contact"}>
          <button className="w-[162px] h-[48px] hover:bg-grayish hover:text-white font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px]">
            CONTACT ME
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Insure