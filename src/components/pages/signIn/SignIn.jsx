import { Form, message } from "antd";
import {
  LABEL_SIGN_IN,
  LABEL_REGISTER_NOW,
  LABEL_WELCOME_BACK,
  LABEL_PASSWORD,
  INCORRECT_EMAIL_OR_PASSWORD,
  FIREBASE_ERR_INVALID_CREDENTIAL,
  SOMETHING_WENT_WRONG,
  SIGNED_IN_SUCCESSFUL,
} from "../../../constants/AppConstants";
import { Link, useNavigate } from "react-router-dom";
import { Title } from "./styles";
import { auth } from "../../../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { PrimaryBtn } from "../../common/button";
import { FormInput, FormInputPassword } from "../../common/input";

const SignIn = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        console.log("userCredential:", userCredential);
        // const user = userCredential.user;
        messageApi.open({
          type: "success",
          content: SIGNED_IN_SUCCESSFUL,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage =
          error.code === FIREBASE_ERR_INVALID_CREDENTIAL
            ? INCORRECT_EMAIL_OR_PASSWORD
            : SOMETHING_WENT_WRONG;

        messageApi.open({
          type: "error",
          content: errorMessage,
        });
      });
  };

  // When form submission failed
  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: "error",
      content:
        errorInfo?.errorFields[0]?.errors[0] || INCORRECT_EMAIL_OR_PASSWORD,
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        style={{
          maxWidth: "400px",
          margin: " 50px auto",
          border: "2px solid light-gray",
          borderRadius: "5px",
          padding: "10px 20px ",
        }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Title>{LABEL_WELCOME_BACK}</Title>

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
          name="password"
          label={LABEL_PASSWORD}
          rules={[{ required: true, message: "Please input your Password!" }]}
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
              {LABEL_SIGN_IN}
            </PrimaryBtn>
          )}
        </Form.Item>
        <Form.Item>
          <p>
            Don't have an account?
            <Link to={"/register"}> {LABEL_REGISTER_NOW}</Link>
          </p>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
