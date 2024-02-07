import React, { useMemo } from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  const determineIfLoggedIn = useMemo(() => {
    if (isLoggedIn) return <Component name="Jakub" />;
    else return <Login />;
  }, [Component, isLoggedIn]);

  return determineIfLoggedIn;
};
