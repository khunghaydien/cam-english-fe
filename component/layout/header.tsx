"use client";
import {
  BellOutlined,
  MessageOutlined,
  SunOutlined,
  MoonOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { AutoComplete, AutoCompleteProps, Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import type { MenuInfo } from "rc-menu/es/interface";
import { useRouter } from "next/navigation";
import React from "react";
export default function header() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const handleMenuClick = (e: MenuInfo) => {
    router.push(`/${e.key}`);
  };
  const [options, setOptions] = React.useState<AutoCompleteProps["options"]>(
    []
  );
  const handleSearch = (value: string) => {
    setOptions(() => {
      if (!value || value.includes("@")) {
        return [];
      }
      return ["gmail.com", "163.com", "qq.com"].map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };
  return (
    <Header className="flex justify-between items-center gap-4">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF7E5F] to-[#FFB88C] bg-clip-text text-transparent">
        Cam's English
      </h3>
      <Menu
        mode="horizontal"
        className="flex justify-center flex-grow"
        onClick={handleMenuClick}
      >
        <Menu.Item key="speaking-club">Speaking Club</Menu.Item>
        <Menu.Item key="library">Library</Menu.Item>
        <Menu.Item key="analysis">Analysis</Menu.Item>
      </Menu>
      <div className="w-[300px]">
        <AutoComplete
          style={{ width: 200 }}
          onSearch={handleSearch}
          placeholder="Search..."
          options={options}
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex">
          <Button size="large" type="text" icon={<BellOutlined />} />
          <Button size="large" type="text" icon={<MessageOutlined />} />
          <Button
            size="large"
            type="text"
            icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          />
        </div>
        <Button size="large" type="text" icon={<UserOutlined />} />
      </div>
    </Header>
  );
}
