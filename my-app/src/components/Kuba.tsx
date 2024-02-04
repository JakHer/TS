import React from "react";

type KubaProps = {
  children: React.ReactNode;
};

export const Kuba = ({ children }: KubaProps) => {
  return <p>{children}</p>;
};
