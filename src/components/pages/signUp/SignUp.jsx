import { Form, message } from "antd";
import {
  LABEL_REGISTER,
  LABEL_I_AM_NEW_HERE,
  LABEL_PASSWORD,
  LABEL_CONFIRM_PASSWORD,
  LABEL_SIGN_IN,
  LABEL_NAME,
  LABEL_Address,
  REGISTRATION_SUCCESSFUL,
  SOMETHING_WENT_WRONG,
  FIREBASE_ERR_EMAIL_EXIST,
  EMAIL_EXIST,
} from "../../../constants/AppConstants";
import { Link, useNavigate } from "react-router-dom";
import { Title } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { PrimaryBtn } from "./../../common/button/styles";
import { FormInput, FormInputPassword } from "../../common/input";

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up
        messageApi.open({
          type: "success",
          content: REGISTRATION_SUCCESSFUL,
        });
        navigate("/sign-in");
      })
      .catch((error) => {
        console.log("error", error, error.code, error.message);
        const errorMessage =
          error.code === FIREBASE_ERR_EMAIL_EXIST
            ? EMAIL_EXIST
            : SOMETHING_WENT_WRONG;

        messageApi.open({
          type: "error",
          content: errorMessage,
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        style={{
          maxWidth: "400px",
          margin: " 50px auto",
          border: "2px solid light-gray",
          borderRadius: "5px",
          padding: "10px 20px ",
        }}
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
          <FormInput />
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
          <FormInput />
        </Form.Item>
        <Form.Item
          name="address"
          label={LABEL_Address}
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <FormInput />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
          label={LABEL_PASSWORD}
          hasFeedback
        >
          <FormInputPassword />
        </Form.Item>
        <Form.Item
          name="confirm"
          label={LABEL_CONFIRM_PASSWORD}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <FormInputPassword />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <PrimaryBtn
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              {LABEL_REGISTER}
            </PrimaryBtn>
          )}
        </Form.Item>
        <Form.Item>
          <p>
            You have an account?<Link to={"/sign-in"}> {LABEL_SIGN_IN}</Link>
          </p>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
