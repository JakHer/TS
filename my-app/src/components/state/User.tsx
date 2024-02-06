import { useCallback, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = useCallback(
    () =>
      setUser({
        name: "Jakub",
        email: "kuba@kuba",
      }),
    []
  );

  const handleLogout = useCallback(
    () =>
      setUser({
        name: "",
        email: "",
      }),
    []
  );

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name {user.name}</p>
      <p>User email {user.email}</p>
    </div>
  );
};
