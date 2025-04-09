"use client";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { MenuInfo } from "rc-menu/es/interface";
import { useRouter } from "next/navigation";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
const items:ItemType<MenuItemType>[] = [
  {
    key: "library",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "exam",
    icon: <FileOutlined />,
    label: "Exam",
    children: [
      {
        key: "library/ielts",
        icon: <DesktopOutlined />,
        label: "ielts",
      },
      {
        key: "library/toeic",
        icon: <TeamOutlined />,
        label: "toeic",
      },
    ],
  },
];
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
      <Menu mode="inline" onClick={handleMenuClick} items={items} />
    </Sider>
  );
}
