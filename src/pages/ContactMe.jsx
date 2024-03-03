import github from "../img/svg/githumDark.svg";
import inLogo from "../img/svg/inDark.svg";
import twitter from "../img/svg/twitterDark.svg";

function ContactMe() {
  return (
    <div className="mb-[109px]">
      <hr className="w-full h-[2px] opacity-15 bg-grayish tracking-[-0.36px] mb-[48px]" />
      <div className="flex flex-direction gap-[125px]">
        <h2 className="font-ibra font-bold text-[40px] leading-[42px]">
          Get in Touch
        </h2>
        <div>
          <p className="w-[635px] all-text font-normal text-[16px] leading-[30px] opacity-80 mb-[24px]">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="flex gap-4 mb-[48px]">
            <img src={github} alt="" width={25} height={24} />
            <img src={twitter} alt="" width={24} height={19.5} />
            <img src={inLogo} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] opacity-15 bg-grayish tracking-[-0.36px] mb-[47px]" />
      <div className="flex flex-direction w-full">
        <h2 className="font-ibra w-full max-w-[311px] font-bold text-[40px] leading-[42px] mr-[145px]">
          Contact Me
        </h2>
        <div className="grow">
          <h5 className="text-[13px] leading-[13px] font-bold mb-[8px]">
            Name
          </h5>
          <input
            className="w-full max-w-[735px] mb-[24px] pl-[16px] py-[9px] bg-light-grey"
            type="text"
            placeholder="Jane Appleseed"
          />
          <h5 className="text-[13px] leading-[13px] font-bold mb-[8px]">
            Email Address
          </h5>
          <input
            className="w-full max-w-[735px] mb-[24px] pl-[16px] py-[9px] bg-light-grey"
            type="text"
            placeholder="email@example.com"
          />
          <h5 className="text-[13px] leading-[13px] font-bold mb-[8px]">
            Message
          </h5>
          <input
            className="w-full max-w-[735px] mb-[24px] pl-[16px] pt-[9px] pb-[57px] bg-light-grey"
            type="text"
            placeholder="How can I help?"
          />
          <button className="w-[200px] h-[48px] bg-dark-blue text-white text-[12px]  tracking-[2px]">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
