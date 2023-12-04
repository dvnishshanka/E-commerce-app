import { Button, Form, Input } from "antd";
import {
  LABEL_REGISTER_NOW,
  LABEL_REGISTER,
  LABEL_I_AM_NEW_HERE,
  LABEL_USERNAME,
  LABEL_PASSWORD,
  LABEL_CONFIRM_PASSWORD,
  LABEL_SIGN_IN,
  LABEL_NAME,
} from "../../../constants/AppConstants";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Title } from "./styles";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="sign-up"
      layout="vertical"
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
    >
      <Title>{LABEL_I_AM_NEW_HERE}</Title>
      <Form.Item
        name="name"
        label={LABEL_NAME}
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label={LABEL_USERNAME}
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
        label={LABEL_PASSWORD}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        rules={[{ required: true, message: "Please confirm your password!" }]}
        label={LABEL_CONFIRM_PASSWORD}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", background: "#1a1a1a", fontWeight: "400" }}
        >
          {LABEL_REGISTER}
        </Button>
      </Form.Item>
      <Form.Item>
        <p>
          You have an account?<Link to={"/sign-in"}> {LABEL_SIGN_IN}</Link>
        </p>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
