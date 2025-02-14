"use client";
import add from "@/public/add.png";
import body from "@/public/body.png";
import buttonLayoutOne from "@/public/button-layout-1.png";
import buttonLayoutTwo from "@/public/button-layout-2.png";
import clock from "@/public/clock.png";
import close from "@/public/close.png";
import copy from "@/public/copy.png";
import folder from "@/public/folder.png";
import header from "@/public/header.png";
import layer from "@/public/layer.png";
import left from "@/public/left.png";
import menu from "@/public/menu.png";
import minus from "@/public/minus.png";
import notification from "@/public/notification.png";
import plus from "@/public/plus.png";
import right from "@/public/right.png";
import Image from "next/image";
type PlusProps = {
  value: string;
};
const Plus = ({ value }: PlusProps) => {
  return (
    <div className="flex items-center justify-center bg-black opacity-[27%] rounded-md lg:rounded-[34px] lg:w-[171px] md:w-[151px] sm:w-[131px] w-[121px] lg:h-[64px] md:h-[59px] sm:h-[44px] h-[34px] py-[10px] px[11px] gap-[19px]">
      <div className="flex items-center justify-center lg:w-[49px] md:w-[39px] sm:w-[29px] w-[19px] lg:h-[49px] md:h-[39px] sm:h-[29px] h-[19px] rounded-full bg-[#4e0b1d]">
        <Image
          src={plus}
          alt="Plus Icon"
          priority
          className="cursor-pointer lg:w-[25px] md:w-[22px] sm:w-[20px] w-[18px] text-[#b13e5e]"
        />
      </div>
      <div className="text-[18px] lg:text-[39px] md:text-[22px] sm:text-[20px]  text-[#b46177]">
        {value}
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-[117px] rounded-[50px] bg-[#29292f] absolute z-0"></div>
      <div className="h-[117px] rounded-tl-[50px] rounded-bl-[50px] bg-[#68686f] absolute z-10 top-0 w-[50%]"></div>
    </div>
  );
};
const Page = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[2000px] bg-[#18181b]"
      style={{ fontFamily: "Bahnschrift" }}
    >
      {/* header */}
      <div className="fixed top-[45px] z-[100] w-full flex justify-center ">
        <div className="absolute top-[55%] h-full z-0 w-[95%]">
          <Progress />
        </div>
        <div className="relative rounded-[50px] bg-black min-h-[222px] z-10 w-[95%]">
          <Image
            src={notification}
            alt="Notification Icon"
            priority
            className="absolute lg:top-[-35px] lg:w-[303px] md:top-[-5px] md:w-[250px] sm:w-[200px] sm:top-[20px] w-[45%] h-auto"
          />

          <div className="text-left lg:pl-[300px] lg:pr-[100px] md:pl-[250px] md:pr-[70px] sm:pr-[50px] sm:pl-[200px] pl-[45%] h-full flex flex-col justify-center">
            <div className="text-[20px] sm:text-[25px] md:text-[35px] lg:text-[45px] font-bold text-[#bff701]">
              X.GAME Web3 Pioneers
            </div>
            <div className="text-[18px] sm:text-[19px] md:text-[29px] lg:text-[39px] text-white">
              Hash games, blockchain gameplay is fairer and verifiable!
            </div>
          </div>

          <div className="absolute top-[14px] right-[14px]">
            <div className="flex items-center justify-center rounded-full bg-[#2d2d2d] cursor-pointer lg:w-[65px] md:w-[55px] sm:w-[45px] w-[35px] lg:h-[65px] md:h-[55px] sm:h-[45px] h-[35px]">
              <div className="w-full flex items-center justify-center h-full">
                <Image
                  src={close}
                  alt="Close Icon"
                  priority
                  className="w-[45%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* body */}

      <div className="flex flex-col min-h-screen h-full w-[95%]">
        <div className="relative w-full z-1">
          <Image src={header} alt="Header Icon" className="w-full h-auto" />
          <div className="absolute inset-0 w-full">
            <div className="flex justify-between items-center lg:px-[41px] lg:pt-[43px] pt-[3%] px-[3%]">
              <div className="lg:w-[38px] md:w-[28px] w-[18px]">
                <Image
                  src={folder}
                  alt="Folder Icon"
                  priority
                  className="cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="lg:text-[48px] font-bold md:text-[38px] sm:text-[28px] text-[18px]">
                  79rufh0IWkie9……dj7hfAhd8
                </div>
                <div className="lg:w-[34px] md:w-[28px] w-[18px]">
                  <Image
                    src={copy}
                    alt="Copy Icon"
                    priority
                    className="cursor-pointer w-[34px]"
                  />
                </div>
              </div>
              <div className="lg:w-[48px] md:w-[28px] w-[18px]">
                <Image
                  src={menu}
                  alt="Menu Icon"
                  priority
                  className="cursor-pointer "
                />
              </div>
            </div>
            <div className="text-[#CD3E66] justify-center flex lg:text-[33px] md:text-[33px] sm:[23px] text-[16px]">
              Our Bureau Prize Hash
            </div>
          </div>
        </div>

        <div className="relative w-full z-10  bottom-[70px]">
          <Image
            src={body}
            alt="Body Icon"
            className="w-full h-auto min-h-[250px]"
          />
          <div className="absolute w-full h-full top-0">
            <div className="flex items-center justify-center w-full ">
              <Image src={layer} alt="Layer" priority />
            </div>
          </div>
          <div className="absolute w-full h-full lg:top-[62px]  md:top-[52px]  sm:top-[42px] top-[32px]">
            <div className="flex items-center justify-center w-full">
              <Image
                src={clock}
                alt="Clock Icon"
                priority
                className="lg:w-[186px] md:w-[166px] sm:w-[146px] w-[126px]"
              />
            </div>
          </div>
          <div className="absolute inset-0 py-6 w-full">
            <div className="flex items-center justify-between px-6 mb-12">
              <Plus value={"0.00"} />
              <Plus value={"0.00"} />
            </div>
            <div className="flex items-center justify-between gap-12 px-6">
              <div className="relative w-full">
                <Image src={left} alt="Wing Icon" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                  <div className="lg:text-[72px] md:text-[52px] sm:text-[32px] text-[22px] font-bold">
                    BIG
                  </div>
                  <div className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[18px] text-[#dc8098]">
                    1 : 1.98
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <Image src={right} alt="Wing Icon" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                  <div className="lg:text-[72px] md:text-[52px] sm:text-[32px] text-[22px] font-bold">
                    SMALL
                  </div>
                  <div className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[18px] text-[#dc8098]">
                    1 : 1.98
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between lg:gap-[48px] md:gap-[38px] ms:gap-[28px] gap-[18px] w-full">
          <div className="">
            <div className="flex-nowrap">
              <span className="sm:text-[25px] md:text-[27px] lg:text-[33px] text-[#75757f] mr-1 flex-nowrap">
                Betting Limits:
              </span>
              <span className="sm:text-[25px] md:text-[27px] lg:text-[39px] text-[#c5c5cf]">
                10~200,000
              </span>
            </div>
            <div className="flex-nowrap">
              <span className="sm:text-[25px] md:text-[27px] lg:text-[33px] text-[#75757f] mr-1 flex-nowrap">
                Maximum Win:
              </span>
              <span className="sm:text-[25px] md:text-[27px] lg:text-[39px] text-[#c5c5cf]">
                {" "}
                0.00
              </span>
            </div>
          </div>
          <div className="relative lg:w-[519px] w-[200px]">
            <input
              placeholder="Bet Amount"
              type="text"
              className="h-[56px] px-[50px] py-[26px] text-[20px] rounded-lg lg:px-[170px] lg:py-[36px] w-full lg:h-[98px] lg:rounded-[20px] lg:text-[33px] bg-[#131314] border-[#29292F] 
               placeholder:text-[#2e2e2e] border-[2px] relative"
            />
            {/* Button Giảm */}
            <div
              className="flex items-center justify-center 
             w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px] 
             rounded-[12px] lg:rounded-[16px] bg-[#29292f] 
             absolute top-[14px] lg:top-[17px] left-[10px] sm:left-2 md:left-4 lg:left-[19px] 
             cursor-pointer"
            >
              <Image
                src={minus}
                alt="Minus Icon"
                priority
                className="cursor-pointer w-[20px] sm:w-[22px] md:w-[24px] lg:w-[27px] text-[#68686f]"
              />
            </div>

            {/* Button Tăng */}
            <div
              className="flex items-center justify-center 
               w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px] 
               rounded-[12px] lg:rounded-[16px] bg-[#29292f] 
               absolute top-[14px] lg:top-[17px] right-[10px] sm:right-2 md:right-4 lg:right-[19px] 
               cursor-pointer"
            >
              <Image
                src={add}
                alt="Add Icon"
                priority
                className="cursor-pointer w-[20px] sm:w-[22px] md:w-[24px] lg:w-[27px] text-[#68686f]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="fixed bottom-[45px] left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
        <Image
          src={buttonLayoutOne}
          alt="Minus Icon"
          priority
          className="z-[10]"
        />
        <div className="z-[100] absolute text-black text-[25px] md:text-[50px] sm:text-[40px] font-bold">
          <div className="flex items-center justify-center h-full w-full">
            BET
          </div>
        </div>
        <Image
          src={buttonLayoutTwo}
          alt="Minus Icon"
          priority
          className="absolute top-[10px]"
        />
      </div>
    </div>
  );
};

export default Page;
