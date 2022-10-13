/*
 * @Author: tj
 * @Description: 主页面
 * @Date: 2022-09-01 14:13:21
 */
import React from "react";
import { useState, useEffect } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useDebounce, useMount } from "../utils/index";
import { useHttp } from "screens/utils/http";

//执行npm start 就是本地开发（.env.development）
//执行npm run build 就是上线（.env）
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]); //展示所有的负责人
  const [param, setParam] = useState({ name: "", personId: "" }); //搜索面板参数
  const debouncedParam = useDebounce(param, 200); //防抖动，一秒后才请求
  const [list, setList] = useState([]); //返回筛选的负责人

  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  //组件加载时，只执行一次
  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
