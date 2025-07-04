"use client";
import add from "@/public/add.png";
import back from "@/public/back.png";
import binance from "@/public/binance.png";
import body from "@/public/body.png";
import clock from "@/public/clock.png";
import close from "@/public/close.png";
import copy from "@/public/copy.png";
import down from "@/public/down.png";
import folder from "@/public/folder.png";
import header from "@/public/header.png";
import layer from "@/public/layer.png";
import left from "@/public/left.png";
import menu from "@/public/menu.png";
import minus from "@/public/minus.png";
import notification from "@/public/notification.png";
import plusGreen from "@/public/plus-green.png";
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
  titleKey?: string;
  title?: string;
};
const Button = ({ titleKey = "button.bet", title }: ButtonProps) => {
  const t = useTranslations("HomePage");
  const displayTitle = title || t(titleKey);
  
  return (
    <div className="relative cursor-pointer">
      <div className="z-10 lg:h-[117px] h-[40px] lg:rounded-[38px] rounded-[13px] bg-[#7ea300] md:h-[80px] md:rounded-[28px] sm:h-[60px] sm:rounded-[25px] absolute w-full top-[5px] lg:top-[10px]"></div>
      <div className="z-0 lg:h-[117px] h-[40px] lg:rounded-[38px] rounded-[13px]  md:h-[80px] md:rounded-[28px] sm:h-[60px] sm:rounded-[25px] bg-black absolute w-full border-2 border-[#C3FB04] top-[10px] lg:top-[20px]"></div>
      <div className="z-30 bg-[#7ea300] lg:w-[13px] md:w-[10px] sm:w-[8px] w-[5px] lg:h-[40px] md:h-[30px] sm:h-[25px] h-[18px] rounded-tl-[3px] rounded-bl-[3px] lg:rounded-tl-[8px] lg:rounded-bl-[8px] md:rounded-tl-[7px] md:rounded-bl-[7px] sm:rounded-tl-[6px] sm:rounded-bl-[6px] lg:top-[40px] top-[10px] absolute right-0 sm:top-[17px] md:top-[25px]"></div>
      <div className="z-30 bg-[#7ea300] lg:w-[13px] md:w-[10px] sm:w-[8px] w-[5px] lg:h-[40px] md:h-[30px] sm:h-[25px] h-[18px] rounded-tr-[3px] rounded-br-[3px] lg:rounded-tr-[8px] lg:rounded-br-[8px] md:rounded-tr-[7px] md:rounded-br-[7px] sm:rounded-tr-[6px] sm:rounded-br-[6px] lg:top-[40px] top-[10px] absolute left-0 sm:top-[17px] md:top-[25px]"></div>
      <div className="z-20 relative flex items-center justify-center bg-[#C3FB04] w-full text-black font-bold lg:text-[60px] lg:h-[117px] lg:rounded-[38px] md:text-[48px] md:h-[80px] md:rounded-[28px] sm:text-[38px] sm:h-[60px] sm:rounded-[25px] text-[20px] h-[40px] rounded-[13px]">
        {displayTitle}
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
      <div className="relative z-20 w-full flex items-center justify-start bg-black/90 p-3 min-h-[100px] rounded-lg">
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
  const t = useTranslations("HomePage");
  
  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center lg:gap-[48px] md:gap-[38px] sm:gap-[28px] gap-[20px]">
        <div className="relative">
          <div className="whitespace-nowrap">
            <span className="text-[11px] sm:text-[16px] md:text-[25px] lg:text-[33px] text-[#75757f] mr-1 whitespace-nowrap">
              {t("inputBet.bettingLimits")}
            </span>
            <span className="text-[13px] sm:text-[18px] md:text-[27px] lg:text-[39px] text-[#c5c5cf] whitespace-nowrap">
              {betLimit}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-[11px] sm:text-[16px] md:text-[25px] lg:text-[33px] text-[#75757f] mr-1 whitespace-nowrap">
              {t("inputBet.maximumWin")}
            </span>
            <span className="text-[13px] sm:text-[18px] md:text-[27px] lg:text-[39px] text-[#c5c5cf] whitespace-nowrap">
              {maximumWin}
            </span>
          </div>
        </div>
        <div className="relative lg:max-w-[519px] md:max-w-[400px] sm:max-w-[350px] max-w-[250px] flex-grow">
          <input
            placeholder={t("inputBet.placeholder")}
            type="text"
            className="h-[40px] text-[11px] px-30 lg:px-[98px] lg:h-[98px] lg:text-[33px] md:px-[75px] md:h-[75px] md:text-[28px] sm:px-[60px] sm:h-[60px] sm:text-[25px]
               placeholder:text-[#2e2e2e] border-[2px] relative text-center rounded-sm w-full bg-[#131314] border-[#29292F]"
          />
          <div
            className="w-[28px] h-[28px] top-[6px] left-[10px] rounded-[6px]
            lg:w-[64px] lg:h-[64px] lg:rounded-[16px] lg:top-[17px] lg:left-[19px] 
            md:w-[54px] md:h-[54px] md:rounded-[14px] md:top-[10px] md:left-[17px]
            sm:w-[44px] sm:h-[44px] sm:rounded-[12px] sm:top-[8px] sm:left-[15px]
            absolute flex items-center justify-center cursor-pointer bg-[#29292f]"
          >
            <Image
              src={minus}
              alt="Minus Icon"
              priority
              className="cursor-pointer w-[45%] h-auto text-[#68686f]"
            />
          </div>
          <div
            className="w-[28px] h-[28px] top-[6px] right-[10px] rounded-[6px]
            lg:w-[64px] lg:h-[64px] lg:rounded-[16px] lg:top-[17px] lg:right-[19px] 
            md:w-[54px] md:h-[54px] md:rounded-[14px] md:top-[10px] md:right-[17px]
            sm:w-[44px] sm:h-[44px] sm:rounded-[12px] sm:top-[8px] sm:right-[15px]
            absolute flex items-center justify-center cursor-pointer bg-[#29292f]"
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
  const t = useTranslations("HomePage");
  
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px]">
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
                  {t("betAnalyse.big")}
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
                  {t("betAnalyse.small")}
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
          {t("betAnalyse.ourBureauPrizeHash")}
        </div>
        <div className="flex items-center justify-between lg:px-[40px] px-[15px]">
          <Plus value={plusSmall} />
          <Plus value={plusBig} />
        </div>
      </div>
    </div>
  );
};
const Header = () => {
  const t = useTranslations("HomePage");
  
  return (
    <>
      <div className="flex items-center justify-between gap-1 mb-3">
        <div className="flex items-center lg:gap-[53px] gap-3">
          <div className="flex items-center justify-center w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px]">
            <Image
              src={back}
              alt="Back Icon"
              priority
              className="cursor-pointer w-full h-auto"
            />
          </div>
          <div className="lg:text-[57px] md:text-[37px] sm:text-[27px] text-[16px]">
            {t("header.gameTitle")}
          </div>
        </div>
        <div className="bg-black px-2 py-1 md:rounded-[15px] rounded-[5px] flex items-center gap-2">
          <div className="flex items-center justify-center lg:w-[59px] lg:h-[59px] md:w-[39px] md:h-[39px] sm:w-[29px] sm:h-[29px] w-[20px] h-[20px] ">
            <Image
              src={binance}
              alt="Binance Icon"
              priority
              className="cursor-pointer w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px lg:w-[14px] sm:h-[14px]">
            <Image
              src={down}
              alt="Down Icon"
              priority
              className="cursor-pointer w-full h-auto"
            />
          </div>
          <div className="lg:text-[54px] md:text-[34px] sm:text-[24px] text-[18px] whitespace-nowra">
            $ 286699.35
          </div>
          <div className="relative">
            <div className="absolute top-[2px] z-10 lg:w-[50px] lg:h-[50px] md:w-[37px] md:h-[37px] sm:w-[27px] sm:h-[27px] w-[20px] h-[20px] rounded-[3px] bg-[#7ea300]"></div>
            <div className="relative z-20 lg:w-[50px] lg:h-[50px] w-[20px] md:w-[37px] md:h-[37px] sm:w-[27px] sm:h-[27px] h-[20px] ] flex items-center justify-center p-1 bg-[#c3fb04] rounded-[3px]">
              <Image
                src={plusGreen}
                alt="Plust Green Icon"
                priority
                className="cursor-pointer w-full h-auto max-w-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full mb-12">
        <div className="flex items-center justify-center rounded-tl-full rounded-bl-full bg-[#4e4f50] w-[50%] text-[#c3fb04] lg:text-[48px] md:text-[38px] sm:text-[24px] text-[16px] py-3">
          {t("header.cryptoBetting")}
        </div>
        <div className="flex items-center justify-center rounded-tr-full rounded-br-full bg-[#29292f] w-[50%] text-[#696971] lg:text-[48px] md:text-[38px] sm:text-[24px] text-[16px] py-3">
          {t("header.transferBetting")}
        </div>
      </div>
    </>
  );
};
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex items-center justify-center min-h-[2000px] bg-[#18181b] font-bahnschrift">
      <h1>{t("title")}</h1>
      <div className="flex items-center justify-center w-[95%] fixed top-[45px] left-1/2 -translate-x-1/2 z-[100]">
        <Notification
          title={t("notification.title")}
          subTitle={t("notification.subtitle")}
        />
      </div>
      <div className="flex flex-col h-full w-[95%]">
        <Header />
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
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Page;
