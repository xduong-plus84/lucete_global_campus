import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Dropdown, message, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

export default function LanguageConfig() {
  const { t, i18n } = useTranslation();

  const items = [
    { label: "English", key: "en" },
    { label: "Tiếng Việt", key: "vi" },
    { label: "日本", key: "jp" },
    { label: "한국인", key: "kr" },
  ];

  const handleMenuClick = (e) => {
    // message.info(`Click on left button. ${e.key}`);
    console.log("click left button", e);

    i18n.changeLanguage(e.key);

    if (e.key === "close-dropdown") {
      //   setOpen(false);
    }
  };

  return (
    <div className="mr-4">
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
          onClick: handleMenuClick,
        }}
        placement="top"
      >
        <Typography>
          <span className="cursor-pointer">{t("Languague.1")}</span>
        </Typography>
      </Dropdown>
    </div>
  );
}
