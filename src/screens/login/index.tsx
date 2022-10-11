import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function login() {
  //登录
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response: Response) => {
      if (response.ok) {
      }
    });
  };
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
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
