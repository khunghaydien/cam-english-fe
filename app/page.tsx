"use client";
import add from "@/public/add.png";
import bgNotification from "@/public/bg-notification.png";
import body from "@/public/body.png";
import buttonLayoutOne from "@/public/button-layout-1.png";
import buttonLayoutTwo from "@/public/button-layout-2.png";
import clock from "@/public/clock.png";
import close from "@/public/close.png";
import copy from "@/public/copy.png";
import folder from "@/public/folder.png";
import header from "@/public/header.png";
import layerNotificationTwo from "@/public/layer-notification-2.png";
import layerNotification from "@/public/layer-notification.png";
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
    <div className="flex items-center justify-center bg-black opacity-[27%] rounded-[34px] w-[171px] h-[64px] py-[10px] px[11px] gap-[19px]">
      <div className="flex items-center justify-center w-[49px] h-[49px] rounded-full bg-[#4e0b1d]">
        <Image
          src={plus}
          alt="Plus Icon"
          priority
          className="cursor-pointer w-[25px] text-[#b13e5e]"
        />
      </div>
      <div className="text-[39px] text-[#b46177]">{value}</div>
    </div>
  );
};

type WingProps = {
  imageUrl: string;
  title: string;
  value: string;
};

const Wing = ({ imageUrl, title, value }: WingProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "294px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="text-[72px] text-bold">{title}</div>
      <div className="text-[48px] text-[#dc8098]">{value}</div>
    </div>
  );
};

const Bet = () => {
  return (
    <div className="">
      <div className="absolute w-[1080px] top-[60px]">
        <div className="flex items-center justify-center">
          <Image
            src={layer}
            alt="Layer"
            priority
            className="absolute z-[10] top-[-60px]"
          />
          <Image
            src={clock}
            alt="Clock Icon"
            priority
            className="cursor-pointer w-[182px] h-[102px] z-[100]"
          />
        </div>
      </div>
      <div className="absolute w-[1080px] top-[125px] left-[20px]">
        <div className="flex items-center gap-[28px]">
          <Wing imageUrl={left.src} title="BIG" value="1 : 1.98" />
          <Wing imageUrl={right.src} title="SMALL" value="1 : 1.98" />
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="relative ">
      <div
        style={{
          backgroundImage: `url(${header.src})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "560px",
        }}
      >
        <div className="flex justify-between items-center w-[1080px] px-[41px] pt-[43px]">
          <Image
            src={folder}
            alt="Folder Icon"
            priority
            className="cursor-pointer w-[38px]"
          />
          <div className="flex items-center gap-3">
            <div className="text-[48px] font-bold">
              79rufh0IWkie9……dj7hfAhd8
            </div>
            <Image
              src={copy}
              alt="Copy Icon"
              priority
              className="cursor-pointer w-[34px]"
            />
          </div>
          <Image
            src={menu}
            alt="Menu Icon"
            priority
            className="cursor-pointer w-[48px]"
          />
        </div>
        <div className="text-[#CD3E66] w-[1080px] justify-center flex text-[33px]">
          Our Bureau Prize Hash
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${body.src})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "449px",
          position: "absolute",
          top: "125px",
        }}
      >
        <div className="w-[1080px] relative">
          <div className="flex justify-between px-[18px] pt-[23px]">
            <Plus value={"0.00"} />
            <Plus value={"0.00"} />
          </div>
          <Bet />
        </div>
      </div>
      <div className="flex items-center justify-between w-[1080px] px-[21px] pt-[41px]">
        <div>
          <div>
            <span className="text-[33px] text-[#75757f] mr-1">
              Betting Limits:
            </span>
            <span className="text-[39px] text-[#c5c5cf]">10~200,000</span>
          </div>
          <div>
            <span className="text-[33px] text-[#75757f] mr-1">
              Maximum Win:
            </span>
            <span className="text-[39px] text-[#c5c5cf]"> 0.00</span>
          </div>
        </div>
        <div className="relative">
          <input
            placeholder="Bet Amount"
            type="text"
            className="px-[170px] py-[36px] w-[519px] h-[98px] rounded-[20px] bg-[#131314] border-[#29292F] placeholder:text-[#2e2e2e] border-[2px] text-[33px] relative"
          />
          <div className="flex items-center justify-center w-[64px] h-[64px] rounded-[16px] bg-[#29292f] absolute top-[17px] left-[19px] cursor-pointer">
            <Image
              src={minus}
              alt="Minus Icon"
              priority
              className="cursor-pointer w-[27px] text-[#68686f]"
            />
          </div>
          <div className="flex items-center justify-center w-[64px] h-[64px] rounded-[16px] bg-[#29292f] absolute top-[17px] right-[19px] cursor-pointer">
            <Image
              src={add}
              alt="Add Icon"
              priority
              className="cursor-pointer w-[27px] text-[#68686f]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="flex items-center justify-center w-screen ">
      <div>
        <div className="absolute top-[120px]">
          <Image src={layerNotification} alt="Layer Notification" priority />
        </div>
        <div className="absolute top-[120px]">
          <Image src={layerNotificationTwo} alt="Layer Notification" priority />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgNotification.src})`,
          backgroundRepeat: "no-repeat",
          width: "1080px",
          height: "222px",
          position: "relative",
        }}
      >
        <div className="absolute top-[-35px]">
          <Image src={notification} alt="Notification Icon" priority />
        </div>
        <div className="pt-[35px] pl-[300px] pr-[100px]">
          <div className="text-[45px] font-bold text-[#bff701]">
            X.GAME Web3 Pioneers
          </div>
          <div className="text-[39px]">
            Hash games, blockchain gameplay is fairer and verifiable!
          </div>
        </div>

        <div className="absolute top-[14px] right-[11px]">
          <div className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-[#2d2d2d] cursor-pointe">
            <Image src={close} alt="Close Icon" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div
      className="bg-[#18181b] relative"
      style={{ fontFamily: "Bahnschrift" }}
    >
      <div className="absolute top-[55px]">
        <div className="w-screen flex justify-center items-center">
          <Notification />
        </div>
      </div>
      <div className="flex items-center justify-center w-screen h-[1500px]">
        <Body />
      </div>
      <div className="absolute bottom-[55px]">
        <div className="w-screen flex justify-center items-center cursor-pointer">
          <Image
            src={buttonLayoutOne}
            alt="Minus Icon"
            priority
            className="z-[10]"
          />
          <div className="z-[100] absolute text-[60px] text-black">BET</div>
          <Image
            src={buttonLayoutTwo}
            alt="Minus Icon"
            priority
            className="absolute top-[10px]"
          />
        </div>
      </div>
    </div>
  );
}
