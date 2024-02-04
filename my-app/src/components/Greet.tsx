import { useMemo } from "react";

type GreetProps = {
  name: string;
  messagesCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const renderLogged = useMemo(() => {
    switch (props.isLoggedIn) {
      case true:
        return `Hello ${props.name}. You have ${props.messagesCount} unread messages`;
      case false:
        return "Hello Guest! You are not logged in";
      default:
        return "Hello Guest! You are not logged in";
    }
  }, []);

  return (
    <div>
      <h1>{renderLogged}</h1>
    </div>
  );
};
