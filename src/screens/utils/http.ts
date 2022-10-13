import { useAuth } from "context/auth-context";
import qs from "qs";
import * as auth from "../../auth-provider";
const apiUrl = process.env.REACT_APP_API_URL;

//定义fetch第二个参数的类型
interface Config extends RequestInit {
  data?: object;
  token?: string;
}
//在参数后面加一个空的默认值，调用时就可以不传此参数（变成可选）
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET", //默认请求为get，后面的customConfig会覆盖前面的method
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? `application/json` : "",
    },
    ...customConfig,
  };
  //由于get请求所传的参数，需要带到url里面，而其他类型的请求是直接放在body里面的
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  //fetch和catch不一样，axios会在返回状态不为2**的时候抛出异常
  //fetch（‘url’）.then,fetch获取接口,返回一个promise，所以需要then来处理
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

//可以自动携带token的http协议方法（要携带其他hook，自己也必须是hook）
//如果所有的异步请求都是用http的话，就会自动将token加入到headers里面
export const useHttp = () => {
  const info = useAuth();
  if (info instanceof Error) {
    return Object;
  }
  //Parameters:ts操作符
  //在tuple类型前加...就可以把里面的参数都解放出来
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: info.user?.token });
};
