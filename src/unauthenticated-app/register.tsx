/*
 * @Author: tj
 * @Description: 注册页面
 * @Date: 2022-10-11 14:16:27
 */
import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Register() {
  //在任何地方都可以通过useAuth()来调用login, register, logout，读取user
  const info = useAuth();
  if (info instanceof Error) {
    return null;
  }
  const register = info.register;

  // 提交表单
  const handleSubmit = (values: { username: string; password: string }) => {
    //调用register
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button style={{ width: "100%" }} type={"primary"} htmlType={"submit"}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}
