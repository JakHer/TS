import React, { useCallback } from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps) => {
  const handleInputChage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => console.log("event", event),
    []
  );
  return <input value={value} onChange={handleInputChage} />;
};
