"use client";
import { useMounted } from "@/components/hook";
import React from "react";
import CreateChannel from "./create-channel";
import FilterChannel from "./filter-channel";
function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <div className="flex justify-between gap-6">
      <FilterChannel />
      <CreateChannel />
    </div>
  );
}

export default index;
