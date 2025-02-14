"use client";
import add from "@/public/add.png";
import body from "@/public/body.png";
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
    <div className="flex items-center justify-center bg-[#00000044] px-2 py-1 gap-2 rounded-sm md:rounded-md">
      <div className="flex items-center justify-center rounded-full bg-[#4e0b1d] p-1">
        <Image
          src={plus}
          alt="Plus Icon"
          priority
          className="cursor-pointer lg:w-[25px] md:w-[22px] sm:w-[20px] w-[9px] text-[#b13e5e]"
        />
      </div>
      <div className="text-[13px] lg:text-[39px] md:text-[22px] sm:text-[20px] text-[#b46177]">
        {value}
      </div>
    </div>
  );
};
type ButtonProps = {
  title: string;
};
const Button = ({ title }: ButtonProps) => {
  return (
    <div className="relative cursor-pointer">
      <div className="z-10 lg:h-[117px] h-[40px] bg-[#7ea300] lg:rounded-[38px] rounded-[13px] absolute w-full top-[5px] lg:top-[10px]"></div>
      <div className="z-0 lg:h-[117px] h-[40px] bg-black lg:rounded-[38px] rounded-[13px] absolute w-full border-2 border-[#C3FB04] top-[10px] lg:top-[20px]"></div>
      <div className="z-30 bg-[#7ea300] lg:w-[13px] w-[5px] lg:h-[40px] h-[18px] rounded-tl-[3px] rounded-bl-[3px] lg:rounded-tl-[8px] lg:rounded-bl-[8px] absolute lg:top-[60px] top-[10px] right-0"></div>
      <div className="z-30 bg-[#7ea300] lg:w-[13px] w-[5px] lg:h-[40px] h-[18px] rounded-tr-[3px] rounded-br-[3px] lg:rounded-tr-[8px] lg:rounded-br-[8px] absolute lg:top-[60px] top-[10px] left-0"></div>
      <div className="z-20 relative flex items-center justify-center bg-[#C3FB04] lg:rounded-[38px] rounded-[13px] w-full text-black font-bold lg:text-[60px] text-[20px] lg:h-[117px] h-[40px]">
        {title}
      </div>
    </div>
  );
};
type NotificationProps = {
  title: string;
  subTitle: string;
};
const Notification = ({ title, subTitle }: NotificationProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-[14px] right-[24px] z-30 lg:top-[24px] lg:right-[34px]">
        <div className="flex items-center justify-center rounded-full bg-[#2d2d2d] lg:w-[65px] lg:h-[65px] w-[22px] h-[22px]">
          <Image
            src={close}
            alt="Close Icon"
            priority
            className="w-[45%] h-auto"
          />
        </div>
      </div>
      <div className="w-full bg-[#29292f] absolute z-0 h-[100px] bottom-[-10px] rounded-lg"></div>
      <div className="bg-[#68686f] absolute z-10 h-[100px] bottom-[-10px] w-[50%] rounded-bl-lg"></div>
      <div className="relative z-20 w-full flex items-center justify-start bg-black p-3 min-h-[100px] rounded-lg">
        <div className="absolute z-10 w-[25%] min-w-[100px]">
          <div className="w-full h-auto flex items-center justify-center ">
            <Image
              src={notification}
              alt="Notification Icon"
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="text-left pl-[100px] sm:pl-[150px] md:pl-[200px] lg:pl-[250px]">
          <div className="font-bold lg:text-[45px] md:text-[35px] sm:text-[25px] text-[15px] text-[#bff701] md:mb-[24px]">
            {title}
          </div>
          <div className="lg:text-[39px] md:text-[33px] sm:text-[23px] text-[13px]">
            {subTitle}
          </div>
        </div>
      </div>
    </div>
  );
};
type InputBetProps = {
  betLimit: string;
  maximumWin: string;
};

const InputBet = ({ betLimit, maximumWin }: InputBetProps) => {
  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center lg:gap-[48px] gap-[20px]">
        <div className="relative">
          <div className="whitespace-nowrap">
            <span className="text-[11px] lg:text-[33px] text-[#75757f] mr-1 whitespace-nowrap">
              Betting Limits:
            </span>
            <span className="text-[13px] lg:text-[39px] text-[#c5c5cf] whitespace-nowrap">
              {betLimit}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-[11px] lg:text-[33px] text-[#75757f] mr-1 whitespace-nowrap">
              Maximum Win:
            </span>
            <span className="text-[13px] lg:text-[39px] text-[#c5c5cf] whitespace-nowrap">
              {maximumWin}
            </span>
          </div>
        </div>
        <div className="relative lg:max-w-[519px] max-w-[250px] flex-grow">
          <input
            placeholder="Bet Amount"
            type="text"
            className="h-[40px] text-[11px] rounded-sm w-full lg:h-[98px] lg:text-[33px] bg-[#131314] border-[#29292F] 
               placeholder:text-[#2e2e2e] border-[2px] relative text-center px-30 lg:px-[70px]"
          />
          <div
            className="flex items-center justify-center w-[28px] h-[28px]
             rounded-[6px] lg:w-[64px] lg:h-[64px] lg:rounded-[16px] bg-[#29292f] 
             absolute top-[6px] lg:top-[17px] left-[10px] lg:left-[19px] 
             cursor-pointer"
          >
            <Image
              src={minus}
              alt="Minus Icon"
              priority
              className="cursor-pointer w-[45%] h-auto text-[#68686f]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[28px] h-[28px]
                        rounded-[6px] lg:w-[64px] lg:h-[64px] lg:rounded-[16px] bg-[#29292f] 
                        absolute top-[6px] lg:top-[17px] right-[10px] lg:right-[19px] 
                        cursor-pointer"
          >
            <Image
              src={add}
              alt="Add Icon"
              priority
              className="cursor-pointer w-[45%] h-auto text-[#68686f]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type BetAnalyseProps = {
  plusSmall: string;
  plusBig: string;
  big: string;
  small: string;
};

const BetAnalyse = ({ plusSmall, plusBig, big, small }: BetAnalyseProps) => {
  return (
    <div className="relative w-full h-[350px] md:h-[550px] lg:h-[700px]">
      <div className="absolute w-full h-full">
        <Image
          src={header}
          alt="Header Icon"
          className="w-full h-auto absolute top-0 z-0"
        />
        <Image
          src={body}
          alt="Body Icon"
          className="w-full h-auto absolute top-[50px] z-10 sm:top-[70px] md:top-[100px] lg:top-[120px]"
        />
        <Image
          src={layer}
          alt="Layer"
          priority
          className="w-full h-auto absolute top-[50px] sm:top-[70px] md:top-[100px] lg:top-[120px] z-20"
        />
        <div className="absolute top-[70px] sm:top-[110px] md:top-[150px] lg:top-[170px] z-30 w-full">
          <div className="flex items-center justify-center w-full">
            <Image
              src={clock}
              alt="Clock Icon"
              priority
              className="w-[18%] h-auto max-w-[186px]"
            />
          </div>
        </div>
        <div className="relative top-[95px] sm:top-[170px] md:top-[210px] lg:top-[240px] z-30 w-full">
          <div className="flex items-center justify-between gap-4 px-4 sm:gap-12 sm:px-6">
            <div className="relative w-full">
              <Image src={left} alt="Wing Icon" className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                <div className="lg:text-[72px] md:text-[52px] sm:text-[32px] text-[24px] font-bold">
                  BIG
                </div>
                <div className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[16px] text-[#dc8098]">
                  {big}
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <Image src={right} alt="Wing Icon" className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                <div className="lg:text-[72px] md:text-[52px] sm:text-[32px] text-[24px] font-bold">
                  SMALL
                </div>
                <div className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[16px] text-[#dc8098]">
                  {small}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute insect-0 w-full h-[250px] sm:h-[350px] md:h-[470px] lg:h-[570px] z-50">
        <div className="flex items-center justify-between gap-6 w-full lg:px-[40px] px-[20px] lg:pt-[40px] pt-[20px]">
          <div className="lg:w-[38px] md:w-[30px] sm:w-[25px] w-[13px]">
            <Image
              src={folder}
              alt="Folder Icon"
              priority
              className="cursor-pointer w-full h-auto min-w-[13px]"
            />
          </div>
          <div className="flex items-center lg:gap-6 gap-3">
            <div className="lg:text-[48px] md:text-[35px] sm:text-[28px] font-bold text-[16px] whitespace-nowrap">
              79rufh0IWkie9……dj7hfAhd8
            </div>
            <div className="lg:w-[34px] md:w-[28px] sm:w-[23px] w-[11px]">
              <Image
                src={copy}
                alt="Copy Icon"
                priority
                className="cursor-pointer w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:w-[48px] md:w-[38px] sm:w-[32px] w-[16px]">
            <Image
              src={menu}
              alt="Menu Icon"
              priority
              className="cursor-pointer w-full h-auto min-w-[16px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-[#CD3E66] lg:text-[33px] md:text-[27px] sm:[23px] text-[11px] ">
          Our Bureau Prize Hash
        </div>
        <div className="flex items-center justify-between lg:px-[40px] px-[15px]">
          <Plus value={plusSmall} />
          <Plus value={plusBig} />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[2000px] bg-[#18181b] font-bahnschrift"
    >
      <div className="flex items-center justify-center w-[95%] fixed top-[45px] left-1/2 -translate-x-1/2 z-[100]">
        <Notification
          title="X.GAME Web3 Pioneers"
          subTitle="Hash games, blockchain gameplay is fairer and verifiable!"
        />
      </div>
      <div className="flex flex-col h-full w-[95%]">
        <BetAnalyse
          plusSmall="0.00"
          plusBig="0.00"
          big="1 : 1.98"
          small="1 : 1.98"
        />
        <InputBet betLimit="10~200,000" maximumWin="0.00" />
      </div>
      <div className="flex items-center justify-center w-[95%] fixed bottom-[45px] left-1/2 -translate-x-1/2 z-[100]">
        <div className="w-[60%]">
          <Button title="BET" />
        </div>
      </div>
    </div>
  );
};

export default Page;
