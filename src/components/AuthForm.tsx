import { Button, Form, FormProps, Input } from "antd";
import { User } from "../services/auth";

type AuthForm = {
  isRegister?: boolean;
  onFinish: (values: User) => void;
};

export const AuthForm = ({ onFinish, isRegister }: AuthForm) => {
  return (
    <div className="container">
      <h2 className="">{isRegister ? "Login" : "Register"}</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<User>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please type your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<User>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please type your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
