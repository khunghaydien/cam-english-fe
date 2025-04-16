"use client";
import Header from "@/component/layout/header";
import Layout from "antd/es/layout";
import { useTranslations } from "next-intl";

export default function layout() {
  const t = useTranslations("HomePage");
  return (
    <Layout>
      <Header />
      <Layout>
      </Layout>
    </Layout>
  );
}
