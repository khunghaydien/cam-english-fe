"use client";
import { useMounted } from "@/components/hook";
import Button from "@mui/material/Button";
import React from "react";

function index() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <div>
      <Button>Create channel</Button>
    </div>
  );
}

export default index;
