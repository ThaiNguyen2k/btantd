import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useState } from "react";
import FormAdd from "component/form/form";
const ButtonAdd = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Space direction="vertical">
      <Space wrap style={{ marginBottom: 10 }}>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Add User
        </Button>
      </Space>
    </Space>
  );
};
export default ButtonAdd;
