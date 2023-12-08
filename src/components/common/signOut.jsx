import { auth } from "../../auth";
import { signOut } from "firebase/auth";
import { message } from "antd";
import {
  SOMETHING_WENT_WRONG,
  SIGNED_OUT_SUCCESSFULLY,
} from "../../constants/AppConstants";

const SignOut = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        messageApi.open({
          type: "success",
          content: SIGNED_OUT_SUCCESSFULLY,
        });
      })
      .catch((error) => {
        messageApi.open({
          type: "error",
          content: SOMETHING_WENT_WRONG,
        });
      });
  };
  return <>{contextHolder}</>;
};

export default SignOut;
