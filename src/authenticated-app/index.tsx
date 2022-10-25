/*
 * @Author: tj
 * @Description:
 * @Date: 2022-10-12 16:14:23
 */
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import "./index.less";
import "../components/Row.tsx";

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
          <div className="header-logo" />
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </div>
        <div>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <Button type={"link"} onClick={info.logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            {/*preventDefault()防止页面的重新刷新*/}
            <Button type={"link"} onClick={(e) => e.preventDefault()}>
              Hi,{info.user?.name}
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="authenticated-main">
        <ProjectListScreen />
      </div>
    </div>
  );
};
