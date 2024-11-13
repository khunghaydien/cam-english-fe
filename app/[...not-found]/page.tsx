"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [torchPosition, setTorchPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTorchPosition({ top: event.pageY, left: event.pageX });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="h-screen w-screen flex items-center justify-center cursor-pointer"
    >
      <div>
        <h1 className="font-bold text-center text-[10rem]">404</h1>
        <h2 className="font-bold text-3xl">
          Sorry we can't find what you are looking for 'cuz it's so dark in here
        </h2>
      </div>
      <div
        className="rounded-full fixed bg-muted-foreground/20"
        style={{
          top: torchPosition.top - 200,
          left: torchPosition.left - 200,
          width: "400px",
          height: "400px",
          boxShadow: "0 0 0 9999em rgba(0, 0, 0, 0.97)",
        }}
      ></div>
    </div>
  );
};

export default Page;
