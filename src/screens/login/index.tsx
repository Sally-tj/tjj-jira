/*
 * @Author: tj
 * @Description: 登录页面
 * @Date: 2022-10-11 14:16:27
 */
import { useAuth } from "context/context";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Login() {
  //在任何地方都可以通过useAuth()来调用login, register, logout，读取user
  const info = useAuth();
  if (info instanceof Error) {
    return null;
  }

  // 提交表单
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //阻止表单提交的默认行为
    event.preventDefault();
    //得到username和password
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    //调用login
    info.login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {info.user ? (
        <div>
          已登录，登录名为{info.user?.name}
          <div>token:{info.user?.token}</div>
        </div>
      ) : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
}
