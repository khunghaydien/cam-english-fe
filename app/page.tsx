import { useTranslations } from "next-intl";
import Header from "@/component/header";

export default function page() {
  const t = useTranslations("HomePage");
  return <Header />;
}
