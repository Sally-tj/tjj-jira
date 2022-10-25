/*
 * @Author: tj
 * @Description:系统主入口
 * @Date: 2022-10-11 14:39:26
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
// 将antd的引入放在jira-dev-tool的后面，可以保证后面写的antd会覆盖前面的jira-dev-tool里面的antd
import "antd/dist/antd.less";
import { AppProviders } from "./context";

loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
