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
import { auth, db } from "../../../auth/firebase";
import { PrimaryBtn } from "./../../common/button/styles";
import { FormInput, FormInputPassword } from "../../common/input";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const writeUserData = (userId, userName, userEmail, userAddress) => {
    const referance = ref(db, "users/" + userId);

    const userData = {
      name: userName,
      email: userEmail,
      address: userAddress,
    };

    set(referance, userData);
  };

  // const writeUserData2 = () => {
  //   const referance = ref(db, "items/" + 1);
  //   const userData = {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: { rate: 3.9, count: 120 },
  //   };

  //   set(referance, userData);
  // };

  const onFinish = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        if (userCredentials) {
          // Save User data on firebase database
          writeUserData(
            userCredentials.user.uid,
            values.name,
            values.email,
            values.address
          );
          // writeUserData2();
          navigate("/sign-in");
          messageApi.open({
            type: "success",
            content: REGISTRATION_SUCCESSFUL,
          });
        }
      })
      .catch((error) => {
        console.error("Sign up error", error);
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
