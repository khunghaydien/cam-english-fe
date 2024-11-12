"use client";
import React, { ReactNode } from "react";
import { getTheme } from "./get-theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";

function index({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme === "dark" ? "dark" : "light");
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default index;
