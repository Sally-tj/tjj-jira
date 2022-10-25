/*
 * @Author: tj
 * @Description:系统主入口
 * @Date: 2022-10-11 14:39:26
 */
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
// 将antd的引入放在jira-dev-tool的后面，可以保证后面写的antd会覆盖前面的jira-dev-tool里面的antd
import "antd/dist/antd.less";
import { AppProviders } from "./context";
import { createRoot } from "react-dom/client";

loadServer(() => {
  const container = document.getElementById("root");
  const root = createRoot(container as HTMLElement);
  root.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
