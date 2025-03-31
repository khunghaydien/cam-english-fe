"use client";
import {
  BellOutlined,
  MessageOutlined,
  SunOutlined,
  MoonOutlined,
  UserOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Layout from "antd/es/layout";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";
import type { MenuInfo } from "rc-menu/es/interface";
import { useRouter } from "next/navigation";

export default function page() {
  const t = useTranslations("HomePage");
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const { theme, setTheme } = useTheme();

  const handleMenuClick = (e: MenuInfo) => {
    router.push(`/${e.key}`);
  };

  return (
    <Layout>
      <Header className="flex justify-between items-center h-full">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF7E5F] to-[#FFB88C] bg-clip-text text-transparent">
          Cam's English
        </h3>
        <Menu
          mode="horizontal"
          className="flex justify-center items-center flex-grow"
          onClick={handleMenuClick}
        >
          <Menu.Item key="speaking-club">Speaking Club</Menu.Item>
          <Menu.Item key="library">Library</Menu.Item>
          <Menu.Item key="analysis">Analysis</Menu.Item>
        </Menu>
        <div className="flex items-center gap-4">
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
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu mode="inline" onClick={handleMenuClick}>
            <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="exam" icon={<FileOutlined />} title="Exam">
              <Menu.Item icon={<DesktopOutlined />} key="library/ielts">
                ielts
              </Menu.Item>
              <Menu.Item icon={<TeamOutlined />} key="library/toeic">
                toeic
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className="h-[1000px]"></Content>
      </Layout>
    </Layout>
  );
}
