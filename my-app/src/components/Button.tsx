import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type Color } from "../lib/types";
// interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue " | "green";
// }

// interface ISuperButtonProps extends IButtonProps {
//   size: "sm" | "md" | "lg";
// }

type ButtonProps<T> = ComponentPropsWithoutRef<"button"> & {
  type?: "button" | "submit" | "reset";
  color?: "red" | "blue " | "green";
};

type SuperButtonProps<T> = ButtonProps<T> & {
  size?: "sm" | "md" | "lg";
  countValue: T;
  countHistory: T[];
};

type User = {
  name: string;
  sessionId: string;
};

type Guest = Omit<User, "name">;

type ButtonColor = Color;

const convertToArray = <T,>(value: T): T[] => {
  return [value];
};

function convertToArray2<T>(value: T): T[] {
  return [value];
}

convertToArray("Convert");

export const Button = <T,>({ children, ...rest }: SuperButtonProps<T>) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click Me");
  const [isPrimary, setIsPrimary] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;

  const ref = useRef<HTMLButtonElement>(null);

  const color = localStorage.getItem("buttonColor") as ButtonColor;

  const buttonTextOptions = [
    "Click Me!",
    "Click Me 2!",
    "Click Me 3!",
  ] as const;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log(event);
      return event;
    },
    []
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (resp: unknown) => console.log(resp)
    );
  }, []);

  return (
    <button onClick={handleClick} {...rest}>
      {buttonTextOptions.map((item) => item)}
    </button>
  );
};
