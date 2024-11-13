"use client";
import { useMounted } from "@/components/hook";
import React from "react";

function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return <></>;
}

export default index;
