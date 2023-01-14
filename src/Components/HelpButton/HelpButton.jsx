import React from "react";

// antd
import { FloatButton } from "antd";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { PhoneOutlined, CommentOutlined } from "@ant-design/icons";

export default function HelpButton() {
  return (
    <div id="helpButton">
      <FloatButton.Group
        icon={<CustomerServiceOutlined />}
        type="primary"
        shape="circle"
        trigger="hover"
      >
        <FloatButton tooltip="Gọi điện" icon={<PhoneOutlined />} />
        <FloatButton tooltip="Nhắn tin" icon={<CommentOutlined />} />
      </FloatButton.Group>
    </div>
  );
}
