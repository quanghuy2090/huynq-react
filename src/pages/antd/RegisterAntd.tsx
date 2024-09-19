import { registerUser, User } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm";
import { FormProps } from "antd";

export const RegisterAntd = () => {
  const nav = useNavigate();

  const onFinish: FormProps<User>["onFinish"] = (values) => {
    registerUser(values)
      .then(() => {
        toast.success("Register Sucessfully!");
        nav("/login");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  //   const onFinishFailed = () => {
  //     toast.error("Errors");
  //   };
  return (
    <AuthForm onFinish={onFinish} />
  );
};
