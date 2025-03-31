"use client";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import { useTranslations } from "next-intl";
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
  const handleMenuClick = (e: MenuInfo) => {
    router.push(`/${e.key}`);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu mode="inline" onClick={handleMenuClick}>
        <Menu.Item key="library" icon={<PieChartOutlined />}>
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
  );
}
