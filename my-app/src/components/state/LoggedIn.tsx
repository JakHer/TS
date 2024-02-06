import { useCallback, useMemo, useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = useCallback(() => setIsLoggedIn(true), []);
  const handleLogout = useCallback(() => setIsLoggedIn(false), []);

  const determineIfLoggedIn = useMemo(() => {
    if (isLoggedIn) {
      return "Logged In";
    } else {
      return "Logged Out";
    }
  }, [isLoggedIn]);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User is {determineIfLoggedIn}</p>
    </div>
  );
};
