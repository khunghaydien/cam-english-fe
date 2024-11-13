"use client";
import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import { signIn, useSession } from "next-auth/react";
import { useMounted } from "@/components/hook";
import dynamic from "next/dynamic";

const AccountMenu = dynamic(() => import("./account-menu"), {
  ssr: false,
  suspense: true,
});

function MainLayout({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  const { data } = useSession();
  if (!mounted) return null;
  return (
    <div className="flex-grow h-full flex flex-col">
      <div className="flex items-center justify-center">
        <header className="flex items-center justify-between gap-12 py-3 flex-grow max-w-[1400px]">
          <div className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-violet-900 text-transparent bg-clip-text hover:cursor-pointer">
            Cam's English
          </div>
          <>
            {!data ? (
              <Button
                sx={{
                  height: "40px",
                }}
                onClick={() =>
                  signIn("google", { callbackUrl: "/speaking-club" })
                }
              >
                Sign In
              </Button>
            ) : (
              <AccountMenu />
            )}
          </>
        </header>
      </div>
      <div className="bg-muted-foreground h-[0.5px]"></div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between gap-12 py-6 flex-grow max-w-[1400px]">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
