"use client";
import Header from "@/component/layout/header";
import Sider from "@/component/layout/sider";
import Layout from "antd/es/layout";
import { Content } from "antd/es/layout/layout";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  const t = useTranslations("HomePage");
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
