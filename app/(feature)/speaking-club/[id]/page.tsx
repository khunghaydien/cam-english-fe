import dynamic from "next/dynamic";
import React from "react";
import { ImSpinner2 } from "react-icons/im";

function page() {
  const SpeakingRoom = dynamic(
    () => import("@/components/feature/speaking-club/speaking-room"),
    {
      ssr: false,
      loading: () => (
        <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-50">
          <ImSpinner2 className="animate-spin text-primary w-12 h-12" />
        </div>
      ),
      suspense: true,
    }
  );
  return <SpeakingRoom />;
}

export default page;
