import { Button, Form, Input } from "antd";
import {
  LABEL_SIGN_IN,
  LABEL_REGISTER_NOW,
  LABEL_WELCOME_BACK,
  LABEL_USERNAME,
  LABEL_PASSWORD,
} from "../../../constants/AppConstants";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Title } from "./styles";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      style={{
        maxWidth: "400px",
        margin: " 50px auto",
        border: "2px solid light-gray",
        borderRadius: "5px",
        padding: "10px 20px ",
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Title>{LABEL_WELCOME_BACK}</Title>
      <Form.Item
        name="username"
        label={LABEL_USERNAME}
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={LABEL_PASSWORD}
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", background: "#1a1a1a", fontWeight: "400" }}
        >
          {LABEL_SIGN_IN}
        </Button>
      </Form.Item>
      <Form.Item>
        <p>
          Don't have an account?
          <Link to={"/register"}> {LABEL_REGISTER_NOW}</Link>
        </p>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
