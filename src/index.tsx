/*
 * @Author: tj
 * @Description:
 * @Date: 2022-10-11 14:39:26
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
