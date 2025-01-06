"use client";
import React from "react";
import CreateSpeakingRoom from "./create-speaking-room";
import FilterSpeakingRoom from "./filter-speaking-club";
import ListSpeakingRoom from "./list-speaking-club";
import { useMounted } from "@/hooks/mounted";
function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between gap-6 flex-wrap">
        <FilterSpeakingRoom />
        <CreateSpeakingRoom />
        <>Test web hook</>
      </div>
      <ListSpeakingRoom />
    </div>
  );
}

export default index;
