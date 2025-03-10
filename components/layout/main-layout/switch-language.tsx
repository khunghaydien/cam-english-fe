"use client";
import { MenuItem } from "@mui/material";
import React from "react";
import NextImage from "next/image";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/i18n/service";
import { useMounted } from "@/hooks/mounted";

const objectLanguage: Record<
  string,
  { label: string; value: string; icon: string }
> = {
  en: {
    label: "English",
    value: "en",
    icon: "https://flagcdn.com/w80/gb.png",
  },
  vn: {
    label: "Vietnamese",
    value: "vn",
    icon: "https://flagcdn.com/w80/vn.png",
  },
};

function AccountMenu() {
  const mounted = useMounted();
  const locale = useLocale();
  if (!mounted) return null;

  return (
    <>
      <div className="flex items-center w-full px-4 gap-4 mb-3">
        <NextImage
          src={objectLanguage[locale].icon}
          alt={objectLanguage[locale].label}
          width={20}
          height={15}
        />
        <div className="flex flex-col items-start">
          <div>Language</div>
        </div>
      </div>
      <div className="w-full pl-12 mb-2">
        <MenuItem
          onClick={() => setUserLocale(objectLanguage.en.value as "en" | "vn")}
          selected={locale === objectLanguage.en.value}
        >
          <div className="flex items-center justify-between gap-6 w-full">
            {objectLanguage.en.label}
          </div>
        </MenuItem>

        <MenuItem
          onClick={() => setUserLocale(objectLanguage.vn.value as "en" | "vn")}
          selected={locale === objectLanguage.vn.value}
        >
          <div className="flex items-center justify-between gap-6 w-full">
            {objectLanguage.vn.label}
          </div>
        </MenuItem>
      </div>
    </>
  );
}

export default AccountMenu;
