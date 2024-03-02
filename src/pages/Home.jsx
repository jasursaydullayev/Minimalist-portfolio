import bottom from "../img/svg/doen.svg";
import man from "../img/png/man.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="h-[600px] home-wrapper pt-[228px] bg-first-page-nav-bg bg-no-repeat bg-contain mb-[150px]">
        <div className="w-[445px] home-div h-[357px] bg-white">
          <h1 className="font-ibra hey-text font-bold text-[50px] leading-[50px] pt-[56px] mb-[53px] w-[390px] tracking-[-0.45px]">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <button className="absolute w-[200px] h-[48px] bg-dark-blue text-white text-[12px] pl-[48px] tracking-[2px]">
            ABOUT ME
          </button>
          <img
            className="relative"
            src={bottom}
            alt=""
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="flex about gap-[125px] mb-[150px]">
        <img className="h-[600px] man-img" src={man} alt="" />
        <div>
          <hr className="w-full max-w-[350px] h-[1px] opacity-15 bg-grayish mb-[50px] tracking-[-0.36px]" />
          <h2 className="font-ibra font-bold text-[40px] leading-[42px] mb-[28px]">
            About Me
          </h2>
          <p className="w-[350px] junior font-normal text-[16px] leading-[30px] opacity-80 mb-[24px]">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Link to={'/portfolio'}>
            <button className="w-[202px] h-[48px] font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px] mb-[46px] hover:bg-grayish hover:text-white">
              GO TO PORTFOLIO
            </button>
          </Link>
          <hr className="w-full max-w-[350px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
        </div>
      </div>
      <div className="flex contact items-center justify-between mb-[150px]">
        <h2 className="w-[350px] contact-text font-ibra font-bold text-[40px] leading-[42px] tracking-[-0.36px]">
          Interested in doing a project together?
        </h2>
        <hr className="w-full hidden-hr max-w-[534px] h-[2px] opacity-15 bg-grayish tracking-[-0.36px]" />
       <Link to={'/contact'}>
       <button className="w-[162px] hover:bg-grayish hover:text-white  h-[48px] font-normal text-[12px] leading-[14.1px] border border-grayish text-center tracking-[2px]">
          CONTACT ME
        </button>
       </Link>
      </div>
    </div>
  );
}

export default Home;
