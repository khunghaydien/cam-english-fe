"use client";
import { useMounted } from "@/components/hook";
import React from "react";
import CreateSpeakingRoom from "./create-speaking-room";
import FilterSpeakingRoom from "./filter-speaking-room";
import ListSpeakingRoom from "./list-speaking-room";
function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between gap-6 flex-wrap">
        <FilterSpeakingRoom />
        <CreateSpeakingRoom />
      </div>
      <ListSpeakingRoom />
    </div>
  );
}

export default index;
