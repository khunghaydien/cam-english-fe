"use client";
import { useMounted } from "@/components/hook";
import React from "react";
import CreateChannel from "./create-channel";

function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <>
      <CreateChannel />
    </>
  );
}

export default index;
