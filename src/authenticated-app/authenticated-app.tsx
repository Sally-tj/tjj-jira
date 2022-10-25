/*
 * @Author: tj
 * @Description:
 * @Date: 2022-10-12 16:14:23
 */
import { Button } from "antd";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import "./authenticated-app.less";

//authenticated：已登录的用户
export const AuthenticatedApp = () => {
  const info = useAuth();
  if (info instanceof Error) {
    return null;
  }
  return (
    <div className="authenticated-wrapper">
      <div className="authenticated-header">
        <div className="header-left">
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </div>
        <Button onClick={info.logout}>登出</Button>
      </div>
      <div className="authenticated-main">
        <ProjectListScreen />
      </div>
    </div>
  );
};
