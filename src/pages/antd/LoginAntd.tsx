import { User, loginUser } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm";
import { FormProps } from "antd";

export const LoginAntd = () => {
  const nav = useNavigate();

  const onFinish: FormProps<User>["onFinish"] = (values) => {
    loginUser(values)
      .then(({ data }) => {
        toast.success("Login Sucessfully!");
        localStorage.setItem("token", data.accessToken);
        nav("/antd");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  //   const onFinishFailed = () => {
  //     toast.error("Errors");
  //   };
  return (
    <AuthForm onFinish={onFinish} isRegister />
  );
};
