/*
 * @Author: tj
 * @Description: context入口文件
 * @Date: 2022-10-11 19:44:02
 */

import { ReactNode } from "react";
import { AuthProvider } from "./context";

interface PropsType {
  children: ReactNode;
}

//作为根，将整个App包裹住
export const AppProviders = (props: PropsType) => {
  return <AuthProvider>{props.children}</AuthProvider>;
};
