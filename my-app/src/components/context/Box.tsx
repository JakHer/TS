import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      Theme Context
    </div>
  );
};
