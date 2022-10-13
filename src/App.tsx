/*
 * @Author: tj
 * @Description:
 * @Date: 2022-10-11 14:16:27
 */
import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app.tsx";

function App() {
  const info = useAuth();
  if (info instanceof Error) {
    return null;
  }
  return (
    <div className="App">
      {info.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
