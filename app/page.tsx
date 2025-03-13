import { useTranslations } from "next-intl";
import { Button } from "antd";

export default function page() {
  const t = useTranslations("HomePage");
  return <Button>{t("title")}</Button>;
}
