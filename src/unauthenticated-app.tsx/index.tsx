/*
 * @Author: tj
 * @Description: 未登录用户入口
 * @Date: 2022-10-12 16:15:16
 */
import { Button, Card } from "antd";
import { useState } from "react";
import Login from "./login";
import Register from "./register";
import "./index.less";

//unauthenticated：没有登录的用户
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="unauthenticated">
      <div className="unauthenticated-background"></div>
      <div className="unauthenticated-header-wrapper"></div>
      <Card className="unauthenticated-card-wrapper">
        <h2 className="title">{isRegister ? "请登录" : "请注册"}</h2>
        {isRegister ? <Login /> : <Register />}
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </a>
      </Card>
    </div>
  );
};
