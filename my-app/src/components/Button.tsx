import React from "react";

type ButtonProps = {
  handlClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => (
  <button onClick={(event) => props.handlClick(event, 1)}>CLick</button>
);
