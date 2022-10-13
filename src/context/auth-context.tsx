/*
 * @Author: tj
 * @Description: auth-context
 * @Date: 2022-10-11 19:44:12
 */
import React, { ReactNode, useState } from "react";
import { User } from "screens/project-list/search-panel";
import { useMount } from "screens/utils";
import { http } from "screens/utils/http";
import * as auth from "../auth-provider";

//定义form类型
interface AuthForm {
  username: string;
  password: string;
}
const token = auth.getToken();

//定义初始化的user,刷新页面的时候user就不会变成null
//在localStorage里面找token，然后拿着token去获取user信息
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token !== "") {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

//创建一个context（默认是undefined）
const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => void;
      register: (form: AuthForm) => void;
      logout: () => void;
    }
  | undefined
>(undefined);
//命名（没有实际作用）
AuthContext.displayName = "AuthContext";

//处理主要逻辑
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //定义user
  const [user, setUser] = useState<User | null>(null);
  //登录（调用login接口）
  const login = (form: AuthForm) => {
    auth.login(form).then((user) => {
      setUser(user);
    });
  };
  //注册(调用register)
  const register = (form: AuthForm) => {
    auth.register(form).then((user) => setUser(user));
  };
  //退出（重置user）
  const logout = () => {
    auth.logout().then(() => setUser(null));
  };

  //刷新页面，初次加载的时候调用，调用bootstrapUser，然后通过setUser设置user初始值
  useMount(() => {
    bootstrapUser().then(setUser);
  });

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

//自定义hook(重要)
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    return new Error("useAuth必须在AuthProvider里面使用");
  }
  return context;
};

// 定义好所有的router
// 分配路由的时候 就去检查token？正常渲染 ： 登录
