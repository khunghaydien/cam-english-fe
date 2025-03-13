"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProvider from "antd/es/config-provider";
import antdTheme from "antd/es/theme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ThemeConfig } from "antd";

type ThemeNames =
  | "Blue"
  | "Purple"
  | "Magenta"
  | "Red"
  | "Orange"
  | "Yellow"
  | "Green";

type AntdThemes = Record<ThemeNames, ThemeConfig>;

export const AntdThemes: AntdThemes = {
  Blue: {
    token: {
      colorPrimary: "#1677FF",
    },
  },
  Purple: {
    token: {
      colorPrimary: "#722ED1",
    },
  },
  Magenta: {
    token: {
      colorPrimary: "#EB2F96",
    },
  },
  Red: {
    token: {
      colorPrimary: "#F5222D",
    },
  },
  Orange: {
    token: {
      colorPrimary: "#FA541C",
    },
  },
  Yellow: {
    token: {
      colorPrimary: "#FAAD14",
    },
  },
  Green: {
    token: {
      colorPrimary: "#52C41A",
    },
  },
};
const AntdProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          ...AntdThemes.Orange,
          algorithm:
            theme === "dark"
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
export default AntdProvider;
