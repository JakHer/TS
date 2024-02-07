import { useCallback, useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const context = useContext(UserContext);

  const handleLogin = useCallback(
    () =>
      context.setUser({
        name: "Jakub",
        email: "kuba@kuba",
      }),
    [context]
  );

  const handleLogout = useCallback(() => context.setUser(null), [context]);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <p>User name is: {context.user?.name}</p>
      <p>User email is: {context.user?.email}</p>
    </div>
  );
};
