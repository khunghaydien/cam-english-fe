"use client";
import { useMounted } from "@/components/hook";
import React from "react";
import CreateChannel from "./create-channel";
import FilterChannel from "./filter-channel";
import ListChannel from "./list-channel";
function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between gap-6">
        <FilterChannel />
        <CreateChannel />
      </div>
      <ListChannel />
    </div>
  );
}

export default index;
