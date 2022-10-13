import { useAuth } from "context/context";
import { ProjectListScreen } from "screens/project-list";

//authenticated：已登录的用户
export const AuthenticatedApp = () => {
  const info = useAuth();
  if (info instanceof Error) {
    return null;
  }
  return (
    <div>
      <button onClick={info.logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
