"use client";
import { ListItemIcon, MenuItem } from "@mui/material";
import React, { ReactNode } from "react";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import { useMounted } from "@/components/hook";
import { useTheme } from "next-themes";

const objectTheme: Record<
  string,
  { label: string; value: string; icon: ReactNode; description: string }
> = {
  light: {
    label: "Light Mode",
    value: "light",
    icon: <LightModeTwoToneIcon />,
    description: "Adjust English Test's interface to enhance light and mood.",
  },
  dark: {
    label: "Dark Mode",
    value: "dark",
    icon: <NightlightTwoToneIcon />,
    description: "Adjust English Test's interface to give your eyes a rest.",
  },
};

function SwitchTheme() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();
  if (!mounted) return null;
  return (
    <>
      <div className="flex items-start w-full px-4 mb-3">
        <ListItemIcon
          sx={{
            minWidth: "36px",
          }}
        >
          {objectTheme.dark.icon}
        </ListItemIcon>
        <div className="flex flex-col items-start">
          <div>{objectTheme.dark.label}</div>
          <div className="text-sx text-muted-foreground w-[300px] break-words whitespace-normal">
            {objectTheme.dark.description}
          </div>
        </div>
      </div>
      <div className="w-full pl-12 mb-2">
        <MenuItem
          onClick={() => setTheme(objectTheme.dark.value)}
          selected={theme === objectTheme.dark.value}
        >
          On
        </MenuItem>

        <MenuItem
          onClick={() => setTheme(objectTheme.light.value)}
          selected={theme === objectTheme.light.value}
        >
          Off
        </MenuItem>
      </div>
    </>
  );
}

export default SwitchTheme;
