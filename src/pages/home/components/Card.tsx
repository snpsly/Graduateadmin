import { Card } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
const { Meta } = Card;

const App: React.FC = () => (
  <Card hoverable>
    <Meta title="admin" avatar={<UserOutlined />} />
  </Card>
);

export default App;
