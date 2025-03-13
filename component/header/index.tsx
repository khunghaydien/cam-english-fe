"use client";
import {
  BellOutlined,
  MessageOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, theme as antdTheme } from "antd";
import { useTheme } from "next-themes";
import React from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { token } = antdTheme.useToken();
  return (
    <Layout.Header style={{ backgroundColor: token.colorBgContainer }}>
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        <Button size="large" type="text">
          Cam's English
        </Button>
        <Flex gap="middle">
          <Button size="large" type="text">
            Speaking Club
          </Button>
          <Button size="large" type="text">
            Library
          </Button>
          <Button size="large" type="text">
            Analysis
          </Button>
        </Flex>
        <Flex align="center" gap="middle">
          <Flex>
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
          </Flex>
          <Button size="large" type="text" icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default Header;
